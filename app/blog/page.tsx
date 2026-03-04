'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, formatDate, BlogCategory } from '@/lib/blog-data';
import {
    ArrowForward,
    CalendarToday,
    AccessTime,
    LocalOffer,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { baseUrl } from '@/lib/enhanced-seo';
import './blog.css';

const CATEGORY_COLORS: Record<BlogCategory, string> = {
    'Document Management': 'bg-blue-100 text-blue-700',
    'AI & Automation': 'bg-purple-100 text-purple-700',
    Pharmaceutical: 'bg-green-100 text-green-700',
    Healthcare: 'bg-rose-100 text-rose-700',
    Manufacturing: 'bg-orange-100 text-orange-700',
    Compliance: 'bg-yellow-100 text-yellow-700',
    'Digital Transformation': 'bg-teal-100 text-teal-700',
    'Case Study': 'bg-indigo-100 text-indigo-700',
};

const PLANNED_TOPICS = [
    { category: 'Document Management', readingTimeMin: 6 },
    { category: 'AI & Automation', readingTimeMin: 7 },
    { category: 'Manufacturing', readingTimeMin: 5 },
    { category: 'Healthcare', readingTimeMin: 6 },
    { category: 'Compliance', readingTimeMin: 8 },
    { category: 'Digital Transformation', readingTimeMin: 6 },
] as const;

export default function BlogPage() {
    const posts = getAllPosts();
    const hasPosts = posts.length > 0;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Blog',
                        name: 'CannyMinds Blog',
                        description: 'Insights on enterprise content management and digital transformation.',
                        url: `${baseUrl}/blog`,
                        publisher: {
                            '@type': 'Organization',
                            name: 'CannyMinds Technology Solutions',
                            logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` },
                        },
                    })
                }}
            />

            <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 lg:py-24 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl"
                        >
                            <p className="text-blue-100 font-semibold text-sm tracking-wide uppercase mb-3">
                                Knowledge Hub
                            </p>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-tight">
                                Blog &amp; Insights
                            </h1>
                            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed">
                                Expert insights on enterprise content management, digital transformation,
                                and the future of business technology.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Posts Grid */}
                <section className="py-16 lg:py-20">
                    <div className="container mx-auto px-6 lg:px-12">
                        {hasPosts ? (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            >
                                {posts.map((post) => (
                                    <motion.div key={post.slug} variants={itemVariants}>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="group block bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col"
                                        >
                                            {post.coverImage && (
                                                <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                                                    <Image
                                                        src={post.coverImage}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-6 flex flex-col flex-1">
                                                {/* Category & Reading Time */}
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[post.category]}`}>
                                                        <LocalOffer sx={{ fontSize: 12 }} />
                                                        {post.category}
                                                    </span>
                                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                                        <AccessTime sx={{ fontSize: 14 }} />
                                                        {post.readingTimeMin} min
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                    {post.title}
                                                </h2>

                                                {/* Excerpt */}
                                                <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3 leading-relaxed">
                                                    {post.excerpt}
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                                        <CalendarToday sx={{ fontSize: 14 }} />
                                                        {formatDate(post.publishedAt)}
                                                    </div>
                                                    <span className="text-xs font-semibold text-primary group-hover:gap-2 transition-all flex items-center gap-1">
                                                        Read More <ArrowForward sx={{ fontSize: 14 }} />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            /* Coming Soon - Skeleton Cards */
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="mb-10"
                                >
                                    <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-2">
                                        Coming Soon
                                    </p>
                                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                        Articles in Production
                                    </h2>
                                </motion.div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                                >
                                    {PLANNED_TOPICS.map((topic, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            className="bg-white rounded-xl border-2 border-dashed border-gray-200 overflow-hidden"
                                        >
                                            <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-50 relative">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-gray-300 text-6xl font-bold opacity-20">?</div>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold opacity-40 ${CATEGORY_COLORS[topic.category as BlogCategory]}`}>
                                                        <LocalOffer sx={{ fontSize: 12 }} />
                                                        {topic.category}
                                                    </span>
                                                    <span className="text-xs text-gray-300 flex items-center gap-1">
                                                        <AccessTime sx={{ fontSize: 14 }} />
                                                        {topic.readingTimeMin} min
                                                    </span>
                                                </div>
                                                <div className="space-y-2 mb-4">
                                                    <div className="h-5 bg-gray-100 rounded w-full animate-pulse" />
                                                    <div className="h-5 bg-gray-100 rounded w-4/5 animate-pulse" />
                                                </div>
                                                <div className="space-y-2 mb-4">
                                                    <div className="h-3 bg-gray-50 rounded w-full animate-pulse" />
                                                    <div className="h-3 bg-gray-50 rounded w-11/12 animate-pulse" />
                                                    <div className="h-3 bg-gray-50 rounded w-3/4 animate-pulse" />
                                                </div>
                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="h-3 bg-gray-100 rounded w-24 animate-pulse" />
                                                    <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                                                        In Production
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
