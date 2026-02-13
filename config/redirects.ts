import { NextConfig } from 'next';

export const redirects: NextConfig['redirects'] = async () => {
    const baseRedirects = [
        // Core Pages
        {
            source: '/index',
            destination: '/',
            permanent: true,
        },
        {
            source: '/demo',
            destination: '/contact',
            permanent: true,
        },
        {
            source: '/about',
            destination: '/about',
            permanent: true,
        },
        {
            source: '/why-canny',
            destination: '/about',
            permanent: true,
        },
        {
            source: '/career',
            destination: '/about', // Fallback as no career page exists yet
            permanent: true,
        },
        {
            source: '/contact',
            destination: '/contact',
            permanent: true,
        },
        {
            source: '/resume',
            destination: '/about',
            permanent: true,
        },

        // Products
        {
            source: '/hr-payroll-management-software',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/document-management-software',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/scanning-services',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/productivity-monitoring-software',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/digitization-services',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/physical-record-management-services',
            destination: '/product/rms',
            permanent: true,
        },
        {
            source: '/record-management',
            destination: '/product/rms',
            permanent: true,
        },
        {
            source: '/CannyDocs',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/product/invoice-management',
            destination: '/ai-solutions/professional-services',
            permanent: true,
        },
        {
            source: '/product/ai-solutions',
            destination: '/ai-solutions',
            permanent: true,
        },

        // Solutions & Services
        {
            source: '/education-management-Software',
            destination: '/solutions', // Fallback
            permanent: true,
        },
        {
            source: '/canny-ckyc-and-cersai',
            destination: '/solutions/finance',
            permanent: true,
        },
        {
            source: '/digital-marketing-services',
            destination: '/ai-solutions/marketing',
            permanent: true,
        },
        {
            source: '/software-development',
            destination: '/ai-solutions/professional-services',
            permanent: true,
        },
        {
            source: '/businessprocess',
            destination: '/bpm',
            permanent: true,
        },
        {
            source: '/pharmacuetical',
            destination: '/solutions/pharmaceutical',
            permanent: true,
        },

        // Blog / Articles -> Product Pages (Best Match)
        {
            source: '/cannydocs-a-smart-document',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/streamlines-workflow-efficiency',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/importance-of-cannydocs',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/digital-transformation',
            destination: '/solutions/professional-services',
            permanent: true,
        },
        {
            source: '/benefits-of-implementing-cannytrack',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/streamline-your-workflow-with-document',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/what-is-employee-productivity',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/benefits-of-document-scanning-for-businesses',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/ways-to-track-and-manage-your-employee-time-off',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/why-is-physical-records-management-important-today',
            destination: '/product/rms',
            permanent: true,
        },
        {
            source: '/benefits-of-aI',
            destination: '/ai-solutions',
            permanent: true,
        },
        {
            source: '/benefits-payroll-software-businesses-india',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/streamlined-hr-processes-with-software',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/document-scanning-technology-hr-payroll-software',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/strategic-role-of-workforce-tracking-hr',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/security-features-document-management-software',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/digitization-of-physical-records',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/why-business-process-automation-is-a-must-for-every-company',
            destination: '/bpm',
            permanent: true,
        },
        {
            source: '/navigating-ethics-employee-productivity-monitoring',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/understanding-the-importance-data-security-in-the-workpalce',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/implement-innovative-document-management-solutions-improve-financial-services',
            destination: '/solutions/finance',
            permanent: true,
        },
        {
            source: '/improving-compliance-in-healthcare',
            destination: '/solutions/healthcare',
            permanent: true,
        },
        {
            source: '/improving-access-healthcare',
            destination: '/solutions/healthcare',
            permanent: true,
        },
        {
            source: '/businesses-utilize-payroll-software',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/files-maximizing-efficiency-document-scanning',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/document-manangement-software-in-india',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/guide-implementing-workflow-automation',
            destination: '/bpm',
            permanent: true,
        },
        {
            source: '/anticipating-future-document-management',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/choosing-the-right-document-management-software',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/maximizing-efficiency-integrating-cannyhr',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/importance-of-document-management',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/unleashing-cannyhr-management-software\'s',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/document-management-system-software-can-drive-cost-savings-and-roi-for-businesses',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/document-management-system-software-can-enhance-data-security-and-compliance',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/blog',
            destination: '/',
            permanent: true,
        },
        {
            source: '/CannyDocs/:path*',
            destination: '/product/document-management',
            permanent: true,
        },
    ];

    // Automatically generate .html redirects for all static paths
    const htmlRedirects = baseRedirects
        .filter(redirect => !redirect.source.includes(':') && !redirect.source.includes('*'))
        .map(redirect => ({
            source: `${redirect.source}.html`,
            destination: redirect.destination,
            permanent: redirect.permanent,
        }));

    // Combine and filter out self-redirects to prevent infinite loops
    return [...baseRedirects, ...htmlRedirects].filter(redirect => redirect.source !== redirect.destination);
};
