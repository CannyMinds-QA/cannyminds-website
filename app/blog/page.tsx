import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllCategories, formatDate, BlogCategory } from '@/lib/blog-data';
import {
    CalendarToday,
    AccessTime,
    ArrowForward,
} from '@mui/icons-material';
import { baseUrl } from '@/lib/enhanced-seo';

export const metadata: Metadata = {
    title: 'Blog | CannyMinds Technology Solutions',
    description:
        'Insights on enterprise content management and digital transformation.',
    alternates: { canonical: 'https://www.cannymindstech.com/blog' },
    openGraph: {
        title: 'Blog | CannyMinds Technology Solutions',
        description: 'Insights on enterprise content management and digital transformation.',
        url: 'https://www.cannymindstech.com/blog',
        type: 'website',
        siteName: 'CannyMinds',
        images: [{ url: 'https://www.cannymindstech.com/og-image.jpg', width: 1200, height: 630 }],
    },
};

const jsonLd = {
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
};

const CATEGORY_COLORS: Record<BlogCategory, string> = {
    'Document Management': 'bg-blue-100 text-blue-700 border-blue-200',
    'AI & Automation': 'bg-purple-100 text-purple-700 border-purple-200',
    Pharmaceutical: 'bg-green-100 text-green-700 border-green-200',
    Healthcare: 'bg-rose-100 text-rose-700 border-rose-200',
    Manufacturing: 'bg-orange-100 text-orange-700 border-orange-200',
    Compliance: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Digital Transformation': 'bg-teal-100 text-teal-700 border-teal-200',
    'Case Study': 'bg-indigo-100 text-indigo-700 border-indigo-200',
};

// Planned topics shown as skeleton cards when no posts exist
const PLANNED_TOPICS = [
    { category: 'Document Management', readingTimeMin: 6 },
    { category: 'AI & Automation', readingTimeMin: 7 },
    { category: 'Manufacturing', readingTimeMin: 5 },
    { category: 'Healthcare', readingTimeMin: 6 },
    { category: 'Compliance', readingTimeMin: 8 },
    { category: 'Digital Transformation', readingTimeMin: 6 },
] as const;

const CATEGORY_LIST: BlogCategory[] = [
    'Document Management',
    'AI & Automation',
    'Pharmaceutical',
    'Healthcare',
    'Manufacturing',
    'Compliance',
    'Digital Transformation',
    'Case Study',
];

export default function BlogPage() {
    const posts = getAllPosts();
    const categories = getAllCategories();
    const hasPosts = posts.length > 0;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-white pt-16 sm:pt-20">

                {/* ── Hero ── */}
                <section className="bg-gradient-to-br from-primary to-secondary text-white py-12 sm:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                                Blog
                            </h1>
                            <p className="text-base sm:text-lg text-blue-100">
                                Insights on enterprise content management and digital transformation.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

                    {/* ── Posts Grid ── */}
                    {hasPosts ? (
                        <section>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                                    >
                                        {post.coverImage && (
                                            <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                                                <Image
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${CATEGORY_COLORS[post.category]}`}>
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-gray-400 ml-auto">
                                                    {post.readingTimeMin} min
                                                </span>
                                            </div>
                                            <h2 className="text-lg font-bold text-secondary mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                            <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                <div className="text-xs text-gray-400">
                                                    {formatDate(post.publishedAt)}
                                                </div>
                                                <span className="text-xs font-medium text-primary group-hover:gap-1 transition-all flex items-center gap-0.5">
                                                    Read <ArrowForward sx={{ fontSize: 14 }} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ) : (
                        /* ── Skeleton Cards ── */
                        <section>
                            <div className="mb-6">
                                <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                                    Coming Soon
                                </h2>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {PLANNED_TOPICS.map((topic, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg border border-dashed border-gray-200 flex flex-col overflow-hidden"
                                    >
                                        <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-50" />
                                        <div className="p-5 flex flex-col gap-4">
                                            <div className="flex items-center justify-between">
                                                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${CATEGORY_COLORS[topic.category as BlogCategory]}`}>
                                                    {topic.category}
                                                </span>
                                                <span className="text-xs text-gray-300">
                                                    {topic.readingTimeMin} min
                                                </span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-4 bg-gray-100 rounded w-full" />
                                                <div className="h-4 bg-gray-100 rounded w-4/5" />
                                            </div>
                                            <div className="space-y-1.5">
                                                <div className="h-3 bg-gray-50 rounded w-full" />
                                                <div className="h-3 bg-gray-50 rounded w-11/12" />
                                            </div>
                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                                <div className="h-3 bg-gray-100 rounded w-20" />
                                                <span className="text-xs text-gray-300">Coming soon</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                </div>
            </main>
        </>
    );
}
