import { MetadataRoute } from 'next'

// Get base URL from environment variables or use production URL as fallback
function getBaseUrl(): string {
  // Development environment
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }

  // Always use production URL (not preview URLs)
  // Check for custom production domain first
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // Production fallback - always use this
  // Never use VERCEL_URL as it returns preview URLs on staging deployments
  return 'https://www.cannymindstech.com'
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/static/'],
      },
      // Allow AI crawlers explicitly for citation and AI search visibility
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
