import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts, formatDate, getRelatedPosts, BlogCategory } from '@/lib/blog-data';
import {
    CalendarToday,
    AccessTime,
    ArrowBack,
    ArrowForward,
    LocalOffer,
    CheckCircle,
    Update,
    LinkedIn,
    Twitter,
} from '@mui/icons-material';
import { baseUrl } from '@/lib/enhanced-seo';
import BlogSocialShare from '@/components/blog/BlogSocialShare';
import BlogFAQ from '@/components/blog/BlogFAQ';

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    const ogImage = post.seo.ogImage ? `https://www.cannymindstech.com${post.seo.ogImage}` : `${baseUrl}/og-image.jpg`;

    return {
        title: post.seo.metaTitle,
        description: post.seo.metaDescription,
        keywords: post.seo.keywords,
        alternates: {
            canonical: post.seo.canonicalUrl,
            languages: {
                'en': post.seo.canonicalUrl,
                'x-default': post.seo.canonicalUrl,
            },
        },
        openGraph: {
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            url: post.seo.canonicalUrl,
            type: 'article',
            siteName: 'CannyMinds Technology Solutions',
            locale: 'en_US',
            images: [{ url: ogImage, width: 1200, height: 630 }],
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [post.author.name],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seo.metaTitle,
            description: post.seo.metaDescription,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// ── Category colours ──────────────────────────────────────────────────────────
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

// ── Simple Markdown → HTML (no extra deps) ────────────────────────────────────
function renderContent(md: string): string {
    return md
        .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-secondary mt-8 mb-3">$1</h3>')
        .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-secondary mt-10 mb-4 border-b border-gray-200 pb-2">$1</h2>')
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
        .replace(/`(.+?)`/g, '<code class="bg-gray-100 text-primary px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
        .replace(/(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g, (_m, header, _sep, rows) => {
            const th = header.split('|').filter(Boolean).map((c: string) =>
                `<th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 bg-gray-100">${c.trim()}</th>`).join('');
            const tr = rows.trim().split('\n').map((r: string) =>
                '<tr>' + r.split('|').filter(Boolean).map((c: string) =>
                    `<td class="px-4 py-2 text-sm text-gray-600 border-t border-gray-100">${c.trim()}</td>`).join('') + '</tr>').join('');
            return `<div class="overflow-x-auto my-6"><table class="min-w-full border border-gray-200 rounded-lg overflow-hidden"><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table></div>`;
        })
        .replace(/^(\d+)\. (.+)$/gm, '<li class="flex gap-2 text-gray-700 leading-relaxed"><span class="text-primary font-bold flex-shrink-0">$1.</span><span>$2</span></li>')
        .replace(/^- ✅ (.+)$/gm, '<li class="flex items-start gap-2 text-gray-700"><span class="text-green-500 mt-0.5 flex-shrink-0">✓</span><span>$1</span></li>')
        .replace(/^[-•] (.+)$/gm, '<li class="flex items-start gap-2 text-gray-700 leading-relaxed"><span class="text-primary mt-1.5 flex-shrink-0">●</span><span>$1</span></li>')
        .replace(/((?:<li .+<\/li>\n?)+)/g, '<ul class="space-y-2 my-4 ml-2">$1</ul>')
        .replace(/^(?!<[hultd]|<div|<code)(.+)$/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>')
        .replace(/<p[^>]*>\s*<\/p>/g, '');
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const allPosts = getAllPosts();
    const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
    const prev = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
    const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

    // Enhanced schema with multiple image sizes and author URL
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: post.seo.canonicalUrl,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        image: post.coverImage ? [
            {
                '@type': 'ImageObject',
                url: `https://www.cannymindstech.com${post.coverImage}`,
                width: 1200,
                height: 675,
                caption: post.title
            },
            {
                '@type': 'ImageObject',
                url: `https://www.cannymindstech.com${post.coverImage}`,
                width: 1200,
                height: 900,
                caption: post.title
            },
            {
                '@type': 'ImageObject',
                url: `https://www.cannymindstech.com${post.coverImage}`,
                width: 1200,
                height: 1200,
                caption: post.title
            }
        ] : undefined,
        author: {
            '@type': 'Person',
            name: post.author.name,
            description: post.author.bio,
            url: post.author.linkedIn || 'https://www.cannymindstech.com/about',
            jobTitle: post.author.role,
            knowsAbout: post.author.credentials
        },
        publisher: {
            '@type': 'Organization',
            name: 'CannyMinds Technology Solutions',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.cannymindstech.com/logo.png',
                width: 600,
                height: 60
            },
            url: 'https://www.cannymindstech.com',
            sameAs: [
                'https://in.linkedin.com/company/cannyminds-technology-solutions',
                'https://x.com/cannyminds',
                'https://www.facebook.com/p/CannyMinds-Technology-Solutions-100063646614219/'
            ]
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
        wordCount: post.content.split(' ').length,
        inLanguage: 'en-IN',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': post.seo.canonicalUrl
        }
    };

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cannymindstech.com' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.cannymindstech.com/blog' },
            { '@type': 'ListItem', position: 3, name: post.title, item: post.seo.canonicalUrl }
        ]
    };

    // Extract FAQs from the sections array instead of post.content
    const faqSection = post.sections?.find(s => s.heading.toLowerCase().includes('faq'));
    const faqsData: { question: string, answer: string }[] = [];

    if (faqSection) {
        // Parse HTML format: <strong>Question?</strong><br>Answer text<br><br>
        const matches = Array.from(faqSection.content.matchAll(/<strong>(.*?)<\/strong><br>(.*?)((?:<br><br>)|$)/g));
        matches.forEach(m => {
            faqsData.push({
                question: m[1].trim(),
                answer: m[2].trim().replace(/<br>/g, '\n')
            });
        });
    }

    // FAQPage schema removed — restricted to government/healthcare authority sites since Aug 2023

    // Filter out FAQ sections from the generic map to avoid duplicate display
    const regularSections = post.sections ? post.sections.filter(s => !s.heading.toLowerCase().includes('faq')) : [];

    const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <main className="min-h-screen bg-white pt-16 sm:pt-20">

                {/* ── Breadcrumb ── */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-600" aria-label="Breadcrumb">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium truncate">{post.category}</span>
                        </nav>
                    </div>
                </div>

                {/* ── Article Header with Featured Image ── */}
                <article className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Category Badge */}
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${CATEGORY_COLORS[post.category]}`}>
                                {post.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                                {post.excerpt}
                            </p>

                            {/* Author & Meta Info */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pb-8 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 relative">
                                        {post.author.image ? (
                                            <Image
                                                src={post.author.image}
                                                alt={post.author.name}
                                                width={48}
                                                height={48}
                                                loading="lazy"
                                                quality={80}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-lg">
                                                {post.author.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{post.author.name}</div>
                                        <div className="text-sm text-gray-600">{post.author.role}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <CalendarToday sx={{ fontSize: 16 }} />
                                    {formatDate(post.publishedAt)}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <Update sx={{ fontSize: 16 }} />
                                    Updated {formatDate(post.updatedAt)}
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                    <AccessTime sx={{ fontSize: 16 }} />
                                    {post.readingTimeMin} min read
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="mt-8 mb-10 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200">
                                {post.coverImage ? (
                                    <Image
                                        src={post.coverImage}
                                        alt={`${post.title} - ${post.excerpt.substring(0, 100)}...`}
                                        width={1200}
                                        height={675}
                                        priority
                                        quality={90}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 320px), 900px"
                                        className="w-full h-auto aspect-[16/9] object-cover"
                                    />
                                ) : (
                                    <div className="w-full aspect-[16/9] flex flex-col items-center justify-center p-8">
                                        <div className="w-24 h-24 mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                                            <span className="text-5xl">📄</span>
                                        </div>
                                        <p className="text-sm text-gray-500 font-medium">Featured Image Placeholder</p>
                                        <p className="text-xs text-gray-400 mt-1">1200 x 675 pixels recommended</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </article>

                {/* ── Body + Sidebar ── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                        {/* Article */}
                        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
                            {/* Introduction */}
                            {post.content && (
                                <div className="text-gray-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
                            )}

                            {/* Table of Contents (Mobile/Tablet) */}
                            {regularSections.length > 0 && (
                                <div className="lg:hidden bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 mb-10">
                                    <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                                        Table of Contents
                                    </h2>
                                    <nav className="space-y-2">
                                        {regularSections.map((section, index) => (
                                            <a
                                                key={section.id}
                                                href={`#${section.id}`}
                                                className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all group"
                                            >
                                                <span className="font-medium">{index + 1}. {section.heading}</span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Main Sections */}
                            {regularSections.map((section, index) => (
                                <div key={section.id}>
                                    <section id={section.id} className="mb-12 scroll-mt-20">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                            <span className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-xl font-bold text-lg">
                                                {index + 1}
                                            </span>
                                            {section.heading}
                                        </h2>
                                        <div className="text-gray-700 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: renderContent(section.content) }} />
                                    </section>

                                    {/* Section Images */}
                                    {section.id === 'powers-automation' && (
                                        <div className="mb-12 rounded-xl overflow-hidden border border-gray-200">
                                            <Image
                                                src="/images/Blogs/digital-transformation-documentation/documentation-powers-automation.png"
                                                alt="How documentation powers automation in digital transformation - workflow diagram showing automated document processing, approvals, and employee onboarding"
                                                width={1200}
                                                height={675}
                                                loading="lazy"
                                                quality={85}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 320px), 900px"
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                        </div>
                                    )}
                                    {section.id === 'real-world-applications' && (
                                        <div className="mb-12 rounded-xl overflow-hidden border border-gray-200">
                                            <Image
                                                src="/images/Blogs/digital-transformation-documentation/documentation-improves-collaboration.png"
                                                alt="Documentation improves team collaboration - remote teams working together with centralized document management system for better project execution"
                                                width={1200}
                                                height={675}
                                                loading="lazy"
                                                quality={85}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) calc(100vw - 320px), 900px"
                                                className="w-full h-auto aspect-[16/9] object-cover"
                                            />
                                        </div>
                                    )}

                                    {/* Inline CTA — appears after section 2 */}
                                    {index === 1 && (
                                        <div className="my-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary text-white rounded-2xl px-6 py-5">
                                            <div>
                                                <p className="font-bold text-base sm:text-lg leading-tight">Still managing documents manually?</p>
                                                <p className="text-blue-100 text-sm mt-1">See how CannyMinds cuts document retrieval time by 90%.</p>
                                            </div>
                                            <Link
                                                href="/contact"
                                                className="flex-shrink-0 bg-white text-primary font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
                                            >
                                                Book a Demo
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Conclusion CTA */}
                            <div className="mt-12 bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    At CannyMinds Technology Solutions, we help businesses modernize their documentation and accelerate digital transformation with enterprise-grade solutions.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
                                >
                                    <span>Get Expert Consultation</span>
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                            </div>

                            {/* Tags */}
                            <div className="mt-10 pt-6 border-t border-gray-200 flex items-center flex-wrap gap-2">
                                <LocalOffer sx={{ fontSize: 18 }} className="text-gray-400" />
                                {post.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Appended FAQ Component */}
                            {faqsData.length > 0 && (
                                <BlogFAQ faqs={faqsData} />
                            )}

                            {/* Author Bio - Moved from sidebar */}
                            <div className="mt-10 pt-6 border-t border-gray-200">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 md:mb-6">About the Author</h3>
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="flex-shrink-0">
                                            {post.author.image ? (
                                                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md">
                                                    <Image
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 80px, 96px"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-md">
                                                    {post.author.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-gray-900 text-xl">{post.author.name}</div>
                                            <div className="text-sm md:text-base text-gray-600 mb-3">{post.author.role}</div>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {post.author.bio}
                                            </p>

                                            {/* Social */}
                                            {(post.author.linkedIn || post.author.twitter) && (
                                                <div className="flex gap-3 pt-2">
                                                    {post.author.linkedIn && (
                                                        <a href={post.author.linkedIn} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#0a66c2] rounded-full transition-colors">
                                                            <LinkedIn />
                                                        </a>
                                                    )}

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar CTA - Moved from sidebar */}
                            <div className="mt-10 bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden">
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-2xl mb-2">Need Expert Guidance?</h3>
                                        <p className="text-blue-100 leading-relaxed md:text-lg">
                                            Talk to our team about document management, AI automation, or compliance challenges.
                                        </p>
                                    </div>
                                    <Link href="/contact" className="flex-shrink-0 flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
                                        Contact Us <ArrowForward />
                                    </Link>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl"></div>
                            </div>

                            {/* Prev / Next */}
                            <div className="mt-12 grid sm:grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                                {prev && (
                                    <Link href={`/blog/${prev.slug}`} className="group flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
                                        <ArrowBack sx={{ fontSize: 20 }} className="text-gray-400 group-hover:text-primary mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-xs text-gray-400 mb-1">Previous</div>
                                            <div className="text-sm font-semibold text-gray-800 group-hover:text-primary line-clamp-2">{prev.title}</div>
                                        </div>
                                    </Link>
                                )}
                                {next && (
                                    <Link href={`/blog/${next.slug}`} className={`group flex items-start gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all ${!prev ? 'sm:col-start-2' : ''}`}>
                                        <div className="flex-1">
                                            <div className="text-xs text-gray-400 mb-1 text-right">Next</div>
                                            <div className="text-sm font-semibold text-gray-800 group-hover:text-primary line-clamp-2 text-right">{next.title}</div>
                                        </div>
                                        <ArrowForward sx={{ fontSize: 20 }} className="text-gray-400 group-hover:text-primary mt-0.5 flex-shrink-0" />
                                    </Link>
                                )}
                            </div>
                        </article>

                        {/* ── Sidebar ── */}
                        <aside className="lg:w-72 xl:w-80 flex-shrink-0 hidden lg:block">
                            <div className="sticky top-24 space-y-8 pb-10">

                                {/* Table of Contents (Desktop) */}
                                {regularSections.length > 0 && (
                                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                        <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                            <span className="w-1 h-4 bg-primary rounded-full"></span>
                                            On this page
                                        </h2>
                                        <nav className="space-y-1">
                                            {regularSections.map((section, index) => (
                                                <a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                                                >
                                                    {index + 1}. {section.heading}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                )}

                                {/* Social Share */}
                                <BlogSocialShare url={post.seo.canonicalUrl} title={post.title} />

                                {/* Related Articles */}
                                {relatedPosts.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
                                        <div className="space-y-3">
                                            {relatedPosts.map((r) => (
                                                <Link key={r.slug} href={`/blog/${r.slug}`} className="block p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group shadow-sm bg-white">
                                                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold border mb-2 ${CATEGORY_COLORS[r.category]}`}>
                                                        {r.category}
                                                    </span>
                                                    <div className="text-sm font-semibold text-gray-800 group-hover:text-primary leading-snug line-clamp-2">{r.title}</div>
                                                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                                                        <AccessTime sx={{ fontSize: 12 }} /> {r.readingTimeMin} min read
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Back */}
                                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors group p-4 rounded-xl border border-gray-200 bg-white hover:bg-primary/5 shadow-sm w-full justify-center">
                                    <ArrowBack sx={{ fontSize: 18 }} className="group-hover:-translate-x-1 transition-transform" />
                                    Back to all articles
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
