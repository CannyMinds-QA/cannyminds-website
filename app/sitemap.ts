import { MetadataRoute } from 'next'
import { statSync } from 'fs'
import { join } from 'path'
import { getAllPosts } from '@/lib/blog-data'

/**
 * Sitemap Implementation following Google's Official Guidelines
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 *
 * Key points from Google:
 * - Required: <loc> (absolute, fully-qualified URL)
 * - Optional: <lastmod> (W3C Datetime format - only update when content changes)
 * - Ignored by Google: <priority> and <changefreq> (not included)
 * - Image sitemap: Max 1,000 images per URL entry
 */

const BASE_URL = 'https://www.cannymindstech.com'

/**
 * Get the last modified date of a page file
 * Returns the actual file modification time, not the current date
 */
function getPageLastModified(route: string): Date {
  try {
    // Convert route to file path
    const filePath = route === '/'
      ? join(process.cwd(), 'app', 'page.tsx')
      : join(process.cwd(), 'app', route, 'page.tsx')

    const stats = statSync(filePath)
    return stats.mtime
  } catch {
    // Fallback: return a fixed date if file not found
    return new Date('2025-01-01')
  }
}

/**
 * Ordered list of all pages with their images
 * Order: Home → Products → Solutions → AI Solutions → About → Contact → Privacy → Terms
 */
const PAGES_WITH_IMAGES: Array<{ route: string; images?: string[] }> = [
  // ============== HOME ==============
  {
    route: '/',
    images: ['/og-image.jpg'],
  },

  // ============== PRODUCTS ==============
  {
    route: '/product',
    images: ['/og-image.jpg'],
  },
  {
    route: '/product/enterprise-content-management',
    images: [
      '/images/about/Christopher-Director.png',
    ],
  },
  {
    route: '/product/hr-management',
    images: [
      '/images/products/cannyhr/cannyhr4.png',
      '/images/products/cannyhr/cannyhr1.png',
      '/images/products/cannyhr/cannyhr3.png',
      '/images/about/Christopher-Director.png',
    ],
  },
  {
    route: '/product/scanning-solution',
    images: [
      '/images/products/cannyscan2.png',
      '/images/products/cannyscan1.jpg',
      '/images/products/cannyscan.png',
    ],
  },
  {
    route: '/product/tracking-system',
    images: [
      '/images/products/cannytrack/cannytrack.png',
      '/images/products/cannytrack/cannytrack2.png',
      '/images/products/cannytrack/cannytrack5.png',
      '/images/products/cannytrack/cannytrack4.png',
      '/images/about/Christopher-Director.png',
    ],
  },
  {
    route: '/product/physical-records-management',
    images: [
      '/images/common/security.png',
      '/images/rms/cannyrms-dashboard.png',
      '/images/rms/cannyrms-upload-inward.png',
      '/images/rms/cannyrms-verification.png',
      '/images/rms/cannyrms-retrieval-request.png',
      '/images/rms/cannyrms-manager-approval.png',
      '/images/rms/cannyrms-refiling.png',
      '/images/rms/cannyrms-handover.png',
      '/images/rms/cannyrms-quick-search.png',
    ],
  },
  {
    route: '/product/ebmr',
    images: [
      '/images/solutions/Pharma/batch-record-automation/pharma-eBMR.png',
    ],
  },

  // ============== SOLUTIONS - HEALTHCARE ==============
  {
    route: '/solutions',
    images: ['/og-image.jpg'],
  },
  {
    route: '/solutions/healthcare',
    images: [
      '/images/solutions/healthcare/overview/Healthcare%20Document%20Management%20Solutions.png',
    ],
  },
  {
    route: '/solutions/healthcare/patient-records',
    images: [
      '/images/solutions/healthcare/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM.png',
      '/images/solutions/healthcare/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM/Scan%20or%20Upload%20the%20Document.png',
      '/images/solutions/healthcare/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM/System%20Tags%20and%20Files%20It%20Automatically.png',
      '/images/solutions/healthcare/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM/Clinicians%20Search%20and%20Retrieve%20Instantly.png',
      '/images/solutions/healthcare/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM/Full%20Audit%20Trail%20of%20Who%20Accessed%20What.png',
    ],
  },
  {
    route: '/solutions/healthcare/clinical-workflows',
    images: [
      '/images/solutions/healthcare/automate%20clinical%20approvals/Automate%20Clinical%20Approvals.png',
    ],
  },
  {
    route: '/solutions/healthcare/compliance-audit',
  },
  {
    route: '/solutions/healthcare/document-digitization',
    images: [
      '/images/solutions/healthcare/How%20Hospitals%20Manage%20Patient%20Records%20with%20CannyECM/Clinicians%20Search%20and%20Retrieve%20Instantly.png',
    ],
  },

  // ============== SOLUTIONS - PHARMACEUTICAL ==============
  {
    route: '/solutions/pharmaceutical',
    images: [
      '/images/solutions/Pharma/overview/Pharma-Manufacturing.png',
      '/images/solutions/Pharma/overview/Industry-Context.png',
      '/images/solutions/Pharma/overview/Digitization-Services.png',
      '/images/solutions/Pharma/overview/Records-Management.png',
    ],
  },
  {
    route: '/solutions/pharmaceutical/batch-record-automation',
    images: [
      '/images/solutions/Pharma/batch-record-automation/eBMR-Automation-for-Pharmaceutical-Manufacturing.png',
      '/images/solutions/Pharma/batch-record-automation/pharma-eBMR.png',
      '/images/solutions/Pharma/batch-record-automation/Predictive-Equipment-Maintenance.png',
    ],
  },
  {
    route: '/solutions/pharmaceutical/quality-inspection-capa',
    images: [
      '/images/solutions/Pharma/quality-inspection-capa/Quality-Inspection-CAPA-Management.png',
      '/images/solutions/Pharma/quality-inspection-capa/Quality-Inspection-Automation.png',
      '/images/solutions/Pharma/quality-inspection-capa/CAPA-Management-Intelligence.png',
    ],
  },
  {
    route: '/solutions/pharmaceutical/regulatory-compliance',
    images: [
      '/images/solutions/Pharma/regulatory-compliance/Regulatory-Compliance-Document-Control.png',
      '/images/solutions/Pharma/regulatory-compliance/workflow-pharma.png',
      '/images/solutions/Pharma/regulatory-compliance/Regulatory-Document-Generation.png',
    ],
  },

  // ============== SOLUTIONS - FINANCE ==============
  {
    route: '/solutions/finance',
  },
  {
    route: '/solutions/finance/banking-technology',
    images: [
      '/images/solutions/Banking/next-gen-banking-technology.png',
    ],
  },
  {
    route: '/solutions/finance/insurance-technology',
    images: [
      '/images/solutions/Insurance/intelligent-insurance-automation.png',
    ],
  },
  {
    route: '/solutions/finance/governance-compliance',
  },

  // ============== SOLUTIONS - MANUFACTURING ==============
  {
    route: '/solutions/manufacturing',
  },
  {
    route: '/solutions/manufacturing/shop-floor-automation',
    images: [
      '/images/solutions/manfactureing/shop%20floor%20automation/Manufacturing-Shop-Floor-Automation-v2.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/manual-paper-entery.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/manufacturing-automation-workflow-v3.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Starts-Digital-Production-Record.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Shift-Person-Records-Hourly-Production.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Supervisor-Reviews-Digital-Entry.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Manager-Gives-Final-Approval.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Automated-Digital-Report-Generated-v2.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Monitoring-and-Visibility-history.png',
      '/images/solutions/manfactureing/shop%20floor%20automation/Standardized-Digital-Template.png',
    ],
  },
  {
    route: '/solutions/manufacturing/document-control',
    images: [
      '/images/solutions/manfactureing/Document-Control-And-SOP-Management/Document-Control-SOP-Management.png',
      '/images/solutions/manfactureing/Document-Control-And-SOP-Management/CAD-Viewer.png',
      '/images/solutions/manfactureing/Document-Control-And-SOP-Management/SOP-Work-Instruction.png',
    ],
  },
  {
    route: '/solutions/manufacturing/quality-management',
    images: [
      '/images/solutions/manfactureing/Quality-Management-System/Quality-Management-System.png',
    ],
  },
  {
    route: '/solutions/manufacturing/engineering-change-management',
    images: [
      '/images/solutions/manfactureing/Engineering-Change-Management/Engineering-Change-Management.png',
    ],
  },
  {
    route: '/solutions/manufacturing/equipment-maintenance',
    images: [
      '/images/solutions/manfactureing/Equipment-Maintenance-And-Asset-Documentation/Equipment-Maintenance.png',
    ],
  },
  {
    route: '/solutions/manufacturing/vendor-procurement',
    images: [
      '/images/solutions/manfactureing/Vendor-Procurement-Document-Management/Vendor-Procurement-Document-Management.png',
    ],
  },
  {
    route: '/solutions/manufacturing/fmcg-digital-transformation',
    images: [
      '/images/solutions/manfactureing/FMCG/Digitizing-Production-Batch-Records.png',
      '/images/solutions/manfactureing/FMCG/SOP-Work-Instruction-Control.png',
      '/images/solutions/manfactureing/FMCG/Quality-Control.png',
      '/images/solutions/manfactureing/FMCG/Hygiene-Safety-Compliance.png',
      '/images/solutions/manfactureing/FMCG/Equipment-Maintenance-FMCG.png',
      '/images/solutions/manfactureing/FMCG/Vendor-packaging-FMCG.png',
    ],
  },
  {
    route: '/solutions/manufacturing/bottling',
    images: [
      '/images/solutions/manfactureing/bottling/hero.png',
      '/images/solutions/manfactureing/bottling/Electronic-Batch-Records-bottle.png',
      '/images/solutions/manfactureing/bottling/Quality-Control-Lab-Automation.png',
      '/images/solutions/manfactureing/bottling/End-to-End-Traceability.png',
      '/images/solutions/manfactureing/bottling/Maintenance-CIP-Management.png',
    ],
  },

  // ============== SOLUTIONS - PROFESSIONAL SERVICES ==============
  {
    route: '/solutions/professional-services',
  },
  {
    route: '/solutions/professional-services/legal',
    images: [
      '/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms.png',
      '/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/Matter-Centric%20Management.png',
      '/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/Contract%20Automation.png',
      '/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/e-Discovery%20%26%20Search.png',
      '/images/solutions/The%20Digital%20Backbone%20for%20Modern%20Law%20Firms/Secure%20Client%20Portal.png',
    ],
  },
  {
    route: '/solutions/professional-services/audit-firms',
    images: [
      '/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Digital%20Working%20Papers.png',
      '/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Evidence%20Management.png',
      '/images/solutions/Quality%20Audits%20start%20with%20Quality%20Documentation/Review%20%26%20Sign-off.png',
    ],
  },

  // ============== AI SOLUTIONS ==============
  {
    route: '/ai-solutions',
    images: ['/og-image.jpg'],
  },
  {
    route: '/ai-solutions/healthcare',
  },
  {
    route: '/ai-solutions/pharmaceutical',
  },
  {
    route: '/ai-solutions/insurance',
  },
  {
    route: '/ai-solutions/nbfc',
  },
  {
    route: '/ai-solutions/manufacturing',
  },
  {
    route: '/ai-solutions/textile',
  },
  {
    route: '/ai-solutions/ecommerce',
  },
  {
    route: '/ai-solutions/real-estate',
  },
  {
    route: '/ai-solutions/marketing',
  },
  {
    route: '/ai-solutions/professional-services',
  },
  {
    route: '/ai-solutions/legal',
  },
  {
    route: '/ai-solutions/retail',
  },
  {
    route: '/ai-solutions/supply-chain',
  },

  // ============== ABOUT ==============
  {
    route: '/about',
    images: [
      '/images/about/Bhaskaran-Gopalakrishnan-Director.png',
      '/images/about/Christopher-Director.png',
      '/images/about/Parthiban-Director.png',
      '/images/about/Udayakumar-Murugan-Director.png',
      '/images/about/Maheshkumar-Director.png',
      '/images/awards/Promising-DMS-award.png',
      '/images/awards/Emerging-company-award-2020.png',
      '/certifications/iso-9001-2015.png',
      '/certifications/iso-15489-2016.png',
      '/certifications/iso-22716-2007.png',
      '/certifications/fda-21-cfr-part-11.jpg',
    ],
  },

  // ============== CONTACT ==============
  {
    route: '/contact',
    images: [
      '/certifications/fda-21-cfr-part-11.jpg',
      '/certifications/iso-9001-2015.png',
      '/certifications/iso-15489-2016.png',
      '/certifications/iso-22716-2007.png',
    ],
  },

  // ============== BLOG ==============
  {
    route: '/blog',
  },

  // ============== LEGAL PAGES (LAST) ==============
  {
    route: '/privacy-policy',
  },
  {
    route: '/terms',
  },
]

/**
 * Generate sitemap following Google's specifications
 * lastmod reflects actual file modification time, not build time
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = PAGES_WITH_IMAGES.map(({ route, images }) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${BASE_URL}${route}`,
      lastModified: getPageLastModified(route),
    }

    // Add images if available
    if (images && images.length > 0) {
      entry.images = images.map(img => `${BASE_URL}${img}`)
    }

    return entry
  })

  // Add blog posts dynamically with images
  const blogPosts = getAllPosts().map(post => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
    }

    // Collect all images from the blog post
    const postImages: string[] = []

    // Add cover image
    if (post.coverImage) {
      postImages.push(`${BASE_URL}${post.coverImage}`)
    }

    // Add section-specific images based on section IDs
    // These are the images shown after specific sections
    if (post.slug === 'digital-transformation-documentation') {
      postImages.push(
        `${BASE_URL}/images/Blogs/digital-transformation-documentation/documentation-powers-automation.png`,
        `${BASE_URL}/images/Blogs/digital-transformation-documentation/documentation-improves-collaboration.png`
      )
    }

    // Add author image
    if (post.author.image) {
      postImages.push(`${BASE_URL}${post.author.image}`)
    }

    // Add images to sitemap entry
    if (postImages.length > 0) {
      entry.images = postImages
    }

    return entry
  })

  return [...staticPages, ...blogPosts]
}
