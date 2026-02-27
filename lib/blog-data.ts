// ── Types ─────────────────────────────────────────────────────────────────────

export type BlogCategory =
    | 'Document Management'
    | 'AI & Automation'
    | 'Pharmaceutical'
    | 'Healthcare'
    | 'Manufacturing'
    | 'Compliance'
    | 'Digital Transformation'
    | 'Case Study';

export interface Author {
    name: string;
    role: string;
    bio: string;
    image: string;
    credentials: string[];
    linkedIn?: string;
    twitter?: string;
}

export interface BlogSection {
    id: string;
    heading: string;
    content: string;
}

export interface SEOMetadata {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage?: string;
    canonicalUrl: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    sections: BlogSection[];
    category: BlogCategory;
    tags: string[];
    author: Author;
    publishedAt: string; // ISO 8601 with timezone: YYYY-MM-DDTHH:mm:ss+05:30
    updatedAt: string; // ISO 8601 with timezone: YYYY-MM-DDTHH:mm:ss+05:30
    readingTimeMin: number;
    coverImage?: string; // path under /public
    featured?: boolean;
    seo: SEOMetadata;
}

// ── Posts ─────────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'digital-transformation-documentation',
        title: 'Digital Transformation Starts With Documentation: Here\'s Why',
        excerpt: 'Discover why proper documentation is the foundation of successful digital transformation and how it powers automation, compliance, and business growth in modern enterprises.',
        content: `In today's fast-moving digital world, every business is chasing faster workflows, smarter decisions, and better customer experiences. Companies are investing in AI, cloud tools, and workflow automation but often overlook the one thing that makes all of it actually work: documentation.

Yes, documentation. The humble files, forms, policies, and processes that many still see as "boring admin work" are actually the backbone of every successful digital transformation. Without proper documentation, even the most advanced systems struggle to deliver results.

At CannyMinds Technology Solutions, we've seen first-hand how companies that organize and streamline their documentation from day one not only accelerate their digital journey but also gain a real competitive edge. Let's break down why documentation is so important and why it should be your first step toward digital transformation.`,
        sections: [
            {
                id: 'single-source-of-truth',
                heading: 'Documentation Creates a Single Source of Truth',
                content: `One of the biggest challenges in any organization is information scattered everywhere. Emails, spreadsheets, cloud drives, paper files—when data is spread out, it leads to mistakes, duplication, and wasted time.

Proper documentation centralizes all critical information—policies, SOPs, contracts, project files, HR records—into a single, reliable repository. Everyone knows where to go for the right information, and the confusion of multiple versions disappears.

With a modern <a href="/product/enterprise-content-management" class="text-primary hover:underline font-medium">document management system</a>, all your files become organized, searchable, and accessible from anywhere. This simple step sets the stage for all your other digital transformation initiatives.`
            },
            {
                id: 'powers-automation',
                heading: 'Documentation Powers Automation',
                content: `Digital transformation is all about making work faster and smarter. But automation can't happen without clear instructions.

Every workflow—whether it's onboarding a new employee, approving finance requests, or managing operations—needs a defined, documented process. A documented workflow is the blueprint that automation tools follow to perform tasks accurately.

The result? Reduced errors, faster approvals, and more time for employees to focus on strategic, value-driven work. Documentation doesn't just support automation—it makes it possible.`
            },
            {
                id: 'compliance-security',
                heading: 'Documentation Keeps You Compliant and Secure',
                content: `Many industries—finance, healthcare, logistics, IT—face strict <a href="/solutions/pharmaceutical/regulatory-compliance" class="text-primary hover:underline font-medium">compliance requirements</a>. One missing form or outdated policy can lead to audits, fines, or worse.

Digitized documentation ensures that:
• All files are securely stored
• Only the right people have access
• Changes are tracked and logged
• Audit-ready records are always up-to-date

When documentation is properly managed, digital transformation doesn't just improve efficiency—it reduces risk and keeps your business safe.`
            },
            {
                id: 'improves-collaboration',
                heading: 'Documentation Improves Collaboration',
                content: `Remote and hybrid work is now standard, but working across teams, locations, and time zones can be messy without proper documentation.

Centralized and organized documents help teams:
• Work on the same version of a file
• Track comments and approvals in real-time
• Avoid redundant emails and messages

The result? Smoother collaboration, faster project execution, and fewer miscommunications—exactly what digital transformation is supposed to deliver.`
            },
            {
                id: 'speeds-decision-making',
                heading: 'Documentation Speeds Up Decision-Making',
                content: `Leaders today need real-time insights to make quick and informed decisions. But scattered, outdated, or unclear documents slow everything down.

With structured documentation:
• Reports and data are easy to access
• Historical trends and comparisons are readily available
• Decisions are made faster and with confidence

Well-managed documentation transforms raw information into actionable intelligence, enabling smarter and faster decisions at every level of the organization.`
            },
            {
                id: 'enables-growth',
                heading: 'Documentation Enables Growth and Scalability',
                content: `As businesses grow, processes become more complex. Without proper documentation, scaling leads to confusion, inefficiency, and mistakes.

A modern <a href="/product/enterprise-content-management" class="text-primary hover:underline font-medium">document management system</a> provides:
• Standardized templates and workflows
• Easy onboarding for new employees
• Seamless integration with other digital tools
• Consistent processes across teams and locations

In other words, good documentation doesn't just keep operations running smoothly today—it prepares your organization for future growth.`
            }
        ],
        category: 'Digital Transformation',
        tags: ['Documentation', 'Digital Transformation', 'Automation', 'Enterprise Content Management', 'Compliance'],
        author: {
            name: 'Christopher',
            role: 'Chief Technology Officer',
            bio: 'Christopher is the CTO at CannyMinds Technology Solutions, leading technical innovation in enterprise software development and digital transformation.',
            image: '/images/about/Christopher-Director.png',
            credentials: [
                'Chief Technology Officer',
                'Expert in Document Management Systems',
                'Led 500+ Digital Transformation Projects',
                'Specialized in Healthcare, Finance & Manufacturing'
            ],
            linkedIn: 'https://in.linkedin.com/company/cannyminds-technology-solutions',
            twitter: 'https://x.com/cannyminds'
        },
        publishedAt: '2026-02-27T09:00:00+05:30',
        updatedAt: '2026-02-27T09:00:00+05:30',
        readingTimeMin: 6,
        coverImage: '/images/Blogs/digital-transformation-documentation/digital-transformation-documentation-hero.png',
        featured: true,
        seo: {
            metaTitle: 'Digital Transformation Starts With Documentation: Here\'s Why',
            metaDescription: 'Learn why documentation is the foundation of successful digital transformation. Discover how proper document management powers automation, ensures compliance, and drives business growth. Expert insights from 20+ years of enterprise software experience.',
            keywords: ['digital transformation', 'documentation management', 'document management system', 'enterprise content management', 'workflow automation', 'business process automation', 'compliance management', 'digital workplace', 'enterprise document automation', 'document digitization'],
            ogImage: '/images/Blogs/digital-transformation-documentation/digital-transformation-documentation-hero.png',
            canonicalUrl: 'https://www.cannymindstech.com/blog/digital-transformation-documentation'
        }
    }
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export function getAllPosts(): BlogPost[] {
    return [...BLOG_POSTS].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getFeaturedPosts(): BlogPost[] {
    return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
    return getAllPosts().filter((p) => p.category === category);
}

export function getAllCategories(): BlogCategory[] {
    const seen = new Set<BlogCategory>();
    for (const post of BLOG_POSTS) seen.add(post.category);
    return Array.from(seen);
}

export function formatDate(iso: string): string {
    // Handle both YYYY-MM-DD and ISO 8601 with timezone
    const date = new Date(iso);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function getRelatedPosts(currentSlug: string, category: BlogCategory, limit: number = 3): BlogPost[] {
    return getAllPosts()
        .filter(post => post.slug !== currentSlug && post.category === category)
        .slice(0, limit);
}
