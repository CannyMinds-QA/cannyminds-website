import { MetadataRoute } from 'next'

// Get base URL from environment variables or use production URL as fallback
function getBaseUrl(): string {
  // Check for Vercel deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Check for custom domain or Next.js public URL
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // Development environment
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000'
  }

  // Production fallback
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
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
