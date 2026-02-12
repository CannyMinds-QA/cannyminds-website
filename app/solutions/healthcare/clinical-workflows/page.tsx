import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import {
    ArrowForward,
    CheckCircle,
    LocalHospital,
    Home,
    ChevronRight,
    AccountTree,
    Schedule,
    Visibility,
    NotificationsActive,
    PhoneAndroid,
    Cancel,
    Speed,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Clinical Workflow Automation | Hospital Approval System",
    description:
        "Automate treatment plan approvals, discharge summaries, and referral routing in hospitals. Build clinical workflows without IT help. CannyECM workflow engine.",
    keywords: [
        "clinical workflow automation",
        "hospital approval workflow",
        "healthcare document routing",
        "clinical document workflow",
        "hospital discharge workflow",
        "treatment plan approval system",
        "medical document routing",
        "healthcare BPM",
        "clinical approval chain",
        "hospital workflow software",
    ],
    alternates: {
        canonical: "/solutions/healthcare/clinical-workflows",
    },
    openGraph: {
        title: "Clinical Workflow Automation | CannyMinds",
        description:
            "Stop chasing signatures. Route treatment plans, discharge summaries, and referrals automatically to the right people.",
        images: [
            {
                url: "/images/healthcare-clinical-workflows-og.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
};

const lastUpdated: string = new Date().toISOString().split("T")[0]!;

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            name: "Clinical Workflow Automation | CannyMinds",
            description:
                "Automate clinical document approvals, routing, and escalation in hospitals with CannyECM's visual workflow engine.",
            publisher: {
                "@type": "Organization",
                name: "CannyMinds Technology Solutions",
                logo: {
                    "@type": "ImageObject",
                    url: `${baseUrl}/logo.png`,
                },
            },
            author: {
                "@type": "Organization",
                name: "CannyMinds Technology Solutions",
            },
            datePublished: lastUpdated,
            dateModified: lastUpdated,
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${baseUrl}/`,
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Healthcare Solutions",
                    item: `${baseUrl}/solutions/healthcare`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Clinical Workflow Automation",
                },
            ],
        },
    ],
};

export default function ClinicalWorkflowsPage() {
    const breakdowns = [
        {
            problem: "Treatment plans sit unsigned for hours",
            reason:
                "The approving doctor is in surgery or rounds. Nobody can find out who's next in line. The plan sits in a physical tray on someone's desk.",
        },
        {
            problem: "Discharge summaries delay patient release",
            reason:
                "The nurse writes the summary, then physically walks it to the attending doctor for sign-off. If the doctor is busy, the patient waits, sometimes an extra day.",
        },
        {
            problem: "Referral letters get lost between departments",
            reason:
                "A cardiologist refers a patient to pulmonology. The referral letter goes in an internal mail system or gets hand-delivered. It sometimes never arrives.",
        },
        {
            problem: "No visibility into document status",
            reason:
                "When administration asks 'where is this document?', nobody has a clear answer. There's no way to track which step a document is on.",
        },
    ];

    const features = [
        {
            title: "Visual Workflow Designer",
            description:
                "Build approval chains by dragging and dropping. No coding. No IT tickets. A department head can design a workflow in 15 minutes: define who approves what, in what order, and what happens if they don't respond in time.",
            icon: AccountTree,
        },
        {
            title: "Auto-Routing by Document Type and Department",
            description:
                "The system knows that a discharge summary from Cardiology goes to Dr. Shah for review. A lab report flagged as critical goes to the HOD immediately. You set these rules once, and every matching document follows the path automatically.",
            icon: Speed,
        },
        {
            title: "Escalation Rules and Deadlines",
            description:
                "If Dr. Mehta doesn't approve a treatment plan within 2 hours, it automatically escalates to Dr. Rao. If nobody acts within 4 hours, the department head gets an alert. You define the rules; the system enforces them.",
            icon: NotificationsActive,
        },
    ];

    const workflows = [
        {
            name: "Treatment Plan Approval",
            flow: [
                "Treating Doctor creates plan",
                "Department Head reviews within 2 hours",
                "Medical Director gives final approval",
                "Patient record updated automatically",
            ],
            timeReduction: "From 2 days to 3 hours average",
        },
        {
            name: "Discharge Summary Flow",
            flow: [
                "Nurse drafts discharge summary",
                "Attending Doctor reviews and signs off",
                "Billing department receives for final processing",
                "Patient gets discharge documents",
            ],
            timeReduction: "From 8 hours to 45 minutes average",
        },
        {
            name: "Consent Form Capture",
            flow: [
                "Reception captures signed consent form",
                "Scanned and uploaded to system",
                "Auto-linked to patient folder",
                "Available to doctor within seconds",
            ],
            timeReduction: "Instant availability vs. hours of filing",
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


            <main className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-600">
                            <Link
                                href="/"
                                className="hover:text-primary flex items-center gap-1"
                            >
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight
                                sx={{ fontSize: 16 }}
                                className="text-gray-400"
                            />
                            <Link
                                href="/solutions/healthcare"
                                className="hover:text-primary"
                            >
                                Healthcare
                            </Link>
                            <ChevronRight
                                sx={{ fontSize: 16 }}
                                className="text-gray-400"
                            />
                            <span className="text-gray-900 font-medium">
                                Clinical Workflow Automation
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-teal-50 via-emerald-50 to-white py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-medium text-sm mb-6">
                                    <LocalHospital sx={{ fontSize: 18 }} />
                                    Healthcare Solutions
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Automate Clinical Approvals: Stop Chasing Signatures
                                </h1>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    In most hospitals, getting a document approved means
                                    physically finding the right person, putting a file on their
                                    desk, and hoping they sign it before they go into surgery.
                                    That&apos;s not a workflow; that&apos;s a relay race.
                                </div>

                                <p className="text-lg text-gray-700 mb-8">
                                    <Link
                                        href="/product/document-management"
                                        className="text-primary hover:underline font-medium"
                                    >
                                        CannyECM
                                    </Link>
                                    &apos;s workflow engine routes clinical documents
                                    automatically: to the right person, in the right order,
                                    with built-in deadlines and escalation.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        See Workflow Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <ImagePlaceholder
                                    className="aspect-[4/3] rounded-2xl"
                                    text="Clinical Workflow Dashboard"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Workflows Break Down */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            Why Clinical Workflows Break Down
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            These are the situations we hear about in every hospital. The
                            common thread? Documents moving through people, not through a
                            system.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {breakdowns.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-red-50 border border-red-100 rounded-xl p-6"
                                >
                                    <div className="flex items-start gap-3">
                                        <Cancel
                                            className="text-red-400 flex-shrink-0 mt-1"
                                            sx={{ fontSize: 20 }}
                                        />
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-2">
                                                {item.problem}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.reason}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How CannyECM Automates */}
                <section className="py-16 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                            How CannyECM Automates Clinical Document Flow
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            You don&apos;t need IT to set up a workflow. A department head can
                            do it, and change it whenever processes change.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-start"
                                >
                                    <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                                        <feature.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-8 text-gray-500 text-sm">
                            Similar workflow patterns are used in our{" "}
                            <Link
                                href="/solutions/manufacturing/shop-floor-automation"
                                className="text-primary hover:underline"
                            >
                                manufacturing shop floor automation
                            </Link>{" "}
                            — the engine is the same. The rules are industry-specific.
                        </p>
                    </div>
                </section>

                {/* Real Workflow Examples */}
                <section className="py-16 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            Real Workflow Examples
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {workflows.map((wf, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-300 transition-all"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        {wf.name}
                                    </h3>

                                    <ol className="space-y-3 mb-6">
                                        {wf.flow.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-3">
                                                <span className="w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                    {sIdx + 1}
                                                </span>
                                                <span className="text-gray-700 text-sm">
                                                    {step}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>

                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                                        <Schedule
                                            sx={{ fontSize: 18 }}
                                            className="text-green-600"
                                        />
                                        <span className="text-green-700 text-sm font-medium">
                                            {wf.timeReduction}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Changes for Staff */}
                <section className="py-16 px-6 lg:px-12 bg-teal-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                            What Changes for Your Hospital Staff
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white border border-teal-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
                                    <PhoneAndroid sx={{ fontSize: 28 }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    Doctors
                                </h3>
                                <p className="text-teal-600 font-medium text-sm mb-3">
                                    Approve from any device, anywhere
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A doctor in OT can approve a discharge summary from their
                                    phone. No need to go back to their desk. One tap to approve,
                                    comment, or reject.
                                </p>
                            </div>

                            <div className="bg-white border border-teal-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 mb-4">
                                    <Visibility sx={{ fontSize: 28 }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    Admins
                                </h3>
                                <p className="text-cyan-600 font-medium text-sm mb-3">
                                    See all pending workflows in one dashboard
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    How many documents are pending? Which ones are overdue? Who
                                    hasn&apos;t acted? The admin dashboard answers these
                                    questions in real time; no phone calls needed.
                                </p>
                            </div>

                            <div className="bg-white border border-teal-200 rounded-xl p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                    <Schedule sx={{ fontSize: 28 }} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    Management
                                </h3>
                                <p className="text-blue-600 font-medium text-sm mb-3">
                                    Track turnaround times and bottlenecks
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Management can see which departments have the longest
                                    approval cycles, which document types take the most time,
                                    and where the system needs improvement.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Solutions */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                            Related Healthcare Solutions
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/solutions/healthcare/patient-records"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Patient Records & EHR →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Centralize every document in one patient folder.
                                </p>
                            </Link>
                            <Link
                                href="/solutions/healthcare/compliance-audit"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Compliance & Audit Readiness →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    All workflow actions are logged for audit compliance.
                                </p>
                            </Link>
                            <Link
                                href="/solutions/healthcare/document-digitization"
                                className="bg-white border border-gray-200 rounded-lg p-4 hover:border-teal-300 transition-all group"
                            >
                                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600">
                                    Medical Document Digitization →
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Digitize paper forms before routing them through workflows.
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Last Updated */}
                <div className="bg-slate-50 py-8 text-center text-sm text-gray-500">
                    <div className="container mx-auto">
                        <span>
                            Last Updated:{" "}
                            <time dateTime={lastUpdated}>
                                {new Date(
                                    lastUpdated
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <section className="py-16 px-6 lg:px-12 bg-teal-700">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Want to Automate Your Clinical Approvals?
                        </h2>
                        <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
                            We&apos;ll set up a sample workflow using your hospital&apos;s
                            actual approval chain: treatment plan, discharge, or any
                            document type you choose.
                        </p>
                        <Link
                            href="/contact"
                            className="px-10 py-4 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-lg inline-flex items-center gap-2"
                        >
                            Schedule Workflow Demo
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
