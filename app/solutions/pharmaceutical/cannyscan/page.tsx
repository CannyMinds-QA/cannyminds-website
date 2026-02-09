import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import {
    Scanner,
    CheckCircle,
    ArrowForward,
    AutoFixHigh,
    QrCode,
    FactCheck,
    Assessment,
    Image as ImageIcon,
    Compress,
    TextFields,
} from '@mui/icons-material';

export const metadata: Metadata = {
    title: 'CannyScan - Pharmaceutical Document Digitization | CannyMinds',
    description: 'CannyScan digitization solution for pharmaceutical manufacturing. Image cleansing, OCR extraction, barcode extraction, data validation, quality check, and reporting.',
    keywords: [
        'pharmaceutical document scanning',
        'pharma digitization',
        'batch record scanning',
        'OCR pharmaceutical',
        'document imaging pharma',
        'GMP document digitization',
        'FDA compliant scanning',
    ],
    openGraph: {
        title: 'CannyScan - Pharmaceutical Document Digitization',
        description: 'Complete digitization solution for pharmaceutical batch records, SOPs, and quality documents.',
        images: [{ url: '/images/cannyscan-pharma-og.jpg', width: 1200, height: 630 }],
    },
};

export default function CannyScanPage() {
    const enhanceFeatures = [
        {
            title: "Image Cleansing",
            description: "Auto Crop, Punch Hole Removal & Edge Deduction for clean, professional scans.",
            icon: AutoFixHigh,
        },
        {
            title: "Document Separation",
            description: "Automatic document separation with Blank Page Detection & Auto File Name Creation.",
            icon: ImageIcon,
        },
        {
            title: "Image Compression",
            description: "Optimized file sizes without compromising image quality for efficient storage.",
            icon: Compress,
        },
    ];

    const extractFeatures = [
        {
            title: "Barcode Extraction",
            description: "Automatic barcode reading for batch identification and document linking.",
            icon: QrCode,
        },
        {
            title: "OCR Extraction",
            description: "Optical Character Recognition for text extraction from scanned documents.",
            icon: TextFields,
        },
        {
            title: "Data Validation",
            description: "Automated validation of extracted data against business rules.",
            icon: FactCheck,
        },
    ];

    const qualityCheckFeatures = [
        "Manual / Automatic verification of information & documents",
        "Review and Comments workflow",
        "Approve – Reject decision workflow",
    ];

    const reportingFeatures = [
        "Total records scanned tracking",
        "Records Exported / Not Exported status",
        "Audit Reports for compliance",
    ];

    const pharmaApplications = [
        "Batch Manufacturing Records (BMR)",
        "Quality Control test sheets",
        "Equipment logbooks",
        "Training records",
        "Deviation reports",
        "Change control forms",
    ];

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-white pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-cyan-50 to-white py-16 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 text-cyan-600 font-semibold mb-4">
                                <Scanner sx={{ fontSize: 20 }} />
                                <span>CannyScan for Pharmaceutical</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                CannyScan - Document Digitization
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                CannyScan is our comprehensive digitization solution for pharmaceutical manufacturing.
                                From image enhancement to OCR extraction to quality checks—convert your paper-based
                                batch records, SOPs, and quality documents into searchable digital assets.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all inline-flex items-center gap-2"
                                >
                                    Request Demo
                                    <ArrowForward sx={{ fontSize: 18 }} />
                                </Link>
                                <Link
                                    href="/solutions/pharmaceutical"
                                    className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-cyan-600 hover:text-cyan-600 transition-all"
                                >
                                    View All Pharma Solutions
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workflow Overview */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            CannyScan Workflow
                        </h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "1", title: "Enhance", color: "bg-cyan-500" },
                                { step: "2", title: "Extract", color: "bg-blue-500" },
                                { step: "3", title: "Quality Check", color: "bg-green-500" },
                                { step: "4", title: "Reporting", color: "bg-purple-500" },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center">
                                    <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enhance Section */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            1. Enhance
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl">
                            Image enhancement for professional quality scans.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {enhanceFeatures.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Extract Section */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            2. Extract
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl">
                            Data extraction from scanned documents.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {extractFeatures.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <item.icon sx={{ fontSize: 24 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quality Check & Reporting */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    3. Quality Check
                                </h2>
                                <ul className="space-y-4">
                                    {qualityCheckFeatures.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    4. Reporting
                                </h2>
                                <ul className="space-y-4">
                                    {reportingFeatures.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Assessment className="text-purple-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pharma Applications */}
                <section className="py-16 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Pharma Applications
                        </h2>
                        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                            Common pharmaceutical documents digitized with CannyScan.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {pharmaApplications.map((app, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                                    <CheckCircle className="text-cyan-600 flex-shrink-0" sx={{ fontSize: 20 }} />
                                    <span className="text-gray-700">{app}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 px-4 md:px-8 bg-cyan-600">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Digitize Your Pharmaceutical Documents
                        </h2>
                        <p className="text-cyan-100 mb-8">
                            See how CannyScan can help you convert paper-based records into searchable digital assets.
                        </p>
                        <Link
                            href="/contact"
                            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                        >
                            Schedule a Demo
                            <ArrowForward sx={{ fontSize: 18 }} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
