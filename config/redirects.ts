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
            source: '/CannyHr',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/CannyScan',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/CannyTrack',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/CannyEdu',
            destination: '/solutions',
            permanent: true,
        },
        {
            source: '/Document_Management_Software',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/Scanning_Services',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/HR_Payroll_Management_Software',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/Productivity_Monitoring_Software',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/Career',
            destination: '/about',
            permanent: true,
        },
        {
            source: '/Blog',
            destination: '/',
            permanent: true,
        },
        {
            source: '/index.html',
            destination: '/',
            permanent: true,
        },
        {
            source: '/digital-marketing',
            destination: '/ai-solutions/marketing',
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
            source: '/CannyDocs_A_Smart_Document',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/streamlines-workflow-efficiency',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/Streamlines_workflow_Efficiency',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/importance-of-cannydocs',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/Importance_of_CannyDocs',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/IMPORTANCE_OF_DOCUMENT%20_MANAGEMENT',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/digital-transformation',
            destination: '/solutions/professional-services',
            permanent: true,
        },
        {
            source: '/Digital_Transformation',
            destination: '/solutions/professional-services',
            permanent: true,
        },
        {
            source: '/benefits-of-implementing-cannytrack',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/Benefits_of_Implementing_CannyTrack',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/streamline-your-workflow-with-document',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/Streamline_Your_Workflow_with_Document',
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
            source: '/Benefits_of_Document_Scanning_for_Businesses',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/Files_Maximizing_Efficiency_Document_Scanning',
            destination: '/product/scanning-solution',
            permanent: true,
        },
        {
            source: '/ways-to-track-and-manage-your-employee-time-off',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/Ways_to_Track_and_Manage_Your_Employee_Time_Off',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/why-is-physical-records-management-important-today',
            destination: '/product/rms',
            permanent: true,
        },
        {
            source: '/Why_Is_Physical_Records_Management_Important_Today',
            destination: '/product/rms',
            permanent: true,
        },
        {
            source: '/benefits-of-aI',
            destination: '/ai-solutions',
            permanent: true,
        },
        {
            source: '/Benefits_of_AI',
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
            source: '/Streamlined_HR_Processes_with_Software',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/Maximizing_Efficiency_Integrating_CannyHR',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/Unleashing_CannyHR%20_Management_Software\'s',
            destination: '/product/hr-management',
            permanent: true,
        },
        {
            source: '/Businesses_utilize_payroll_software',
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
            source: '/Security_features_document_management_software',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/Document_manangement_software_in_India',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/Document_Management_System_Software_Can_Enhance_Data_Security_and_Compliance',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/_Document_Management_System_Software_Can_Drive_Cost_Savings_and_ROI_for_Businesses',
            destination: '/product/document-management',
            permanent: true,
        },
        {
            source: '/CHOOSING_THE%20_RIGHT_DOCUMENT_MANAGEMENT_SOFTWARE',
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
            source: '/Why_Business_Process_Automation_is_a_Must_for_Every_Company',
            destination: '/bpm',
            permanent: true,
        },
        {
            source: '/Guide_Implementing_Workflow_Automation',
            destination: '/bpm',
            permanent: true,
        },
        {
            source: '/navigating-ethics-employee-productivity-monitoring',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/Navigating_Ethics_Employee_Productivity_Monitoring',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/understanding-the-importance-data-security-in-the-workpalce',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/Understanding_the_importance_data_security_in_the_workpalce',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/What_is_Employee_Productivity',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/Strategic_Role_of_Workforce_Tracking_HR',
            destination: '/product/tracking-system',
            permanent: true,
        },
        {
            source: '/implement-innovative-document-management-solutions-improve-financial-services',
            destination: '/solutions/finance',
            permanent: true,
        },
        {
            source: '/Implement_Innovative_Document_Management_Solutions_Improve_Financial_Services',
            destination: '/solutions/finance',
            permanent: true,
        },
        {
            source: '/Canny-Ckyc-and-Cersai',
            destination: '/solutions/finance',
            permanent: true,
        },
        {
            source: '/improving-compliance-in-healthcare',
            destination: '/solutions/healthcare',
            permanent: true,
        },
        {
            source: '/Improving_Compliance_in_healthcare',
            destination: '/solutions/healthcare',
            permanent: true,
        },
        {
            source: '/improving-access-healthcare',
            destination: '/solutions/healthcare',
            permanent: true,
        },
        {
            source: '/Improving_Access_healthcare',
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
