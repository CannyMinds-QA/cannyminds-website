import { MetadataRoute } from 'next'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

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

// Recursively find all page.tsx files in the app directory
function getAllPages(dir: string, baseDir: string = dir): string[] {
  const pages: string[] = []

  try {
    const files = readdirSync(dir)

    for (const file of files) {
      const filePath = join(dir, file)

      // Skip special Next.js directories and files
      if (file.startsWith('_') || file === 'api' || file === 'node_modules') {
        continue
      }

      try {
        const stat = statSync(filePath)

        if (stat.isDirectory()) {
          // Recursively search subdirectories
          pages.push(...getAllPages(filePath, baseDir))
        } else if (file === 'page.tsx' || file === 'page.ts' || file === 'page.jsx' || file === 'page.js') {
          // Found a page file - convert to route
          const relativePath = filePath.replace(baseDir, '').replace(/\\/g, '/').replace(/\/page\.(tsx|ts|jsx|js)$/, '')
          const route = relativePath || '/'

          // Skip dynamic routes (containing brackets) as we want only static routes or specifically handled ones
          if (!route.includes('[') && !route.includes(']')) {
            pages.push(route)
          }
        }
      } catch (err) {
        // Skip files that can't be accessed
        continue
      }
    }
  } catch (err) {
    // If directory can't be read, return empty array
    return []
  }

  return pages
}

// Define priority and change frequency for different page types
function getPageConfig(route: string): { priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' } {
  if (route === '/') {
    return { priority: 1.0, changeFrequency: 'weekly' }
  }

  if (route.startsWith('/solutions/') || route.startsWith('/industries/') || route.startsWith('/bpm/') || route.startsWith('/services')) {
    return { priority: 0.9, changeFrequency: 'weekly' }
  }

  if (route === '/about') {
    return { priority: 0.8, changeFrequency: 'monthly' }
  }

  if (route === '/contact') {
    return { priority: 0.8, changeFrequency: 'monthly' }
  }

  // Default for other pages
  return { priority: 0.7, changeFrequency: 'weekly' }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const currentDate = new Date()

  // Get all pages from the app directory
  const appDir = join(process.cwd(), 'app')
  const routes = getAllPages(appDir)

  // Generate sitemap entries for all routes
  return routes.map((route) => {
    const config = getPageConfig(route)

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    }
  }).sort((a, b) => b.priority - a.priority) // Sort by priority (highest first)
}
