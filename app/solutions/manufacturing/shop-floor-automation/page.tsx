import { Metadata } from "next";
import Link from "next/link";
import SecureImage from "@/components/ui/SecureImage";
import {
    ArrowForward,
    CheckCircle,
    Factory,
    Settings,
    Speed,
    TrendingUp,
    Security,
    Home,
    ChevronRight,
    Warning,
    Person,
    Groups,
    SupervisorAccount,
    AdminPanelSettings,
    Assignment,
    PlayArrow,
    Edit,
    Visibility,
    Approval,
    Description,
    Storage,
    Dashboard,
    ManageAccounts,
    Article,
    VerifiedUser,
    AccessTime,
    Cancel,
    Done,
} from "@mui/icons-material";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { baseUrl } from "@/lib/enhanced-seo";

export const metadata: Metadata = {
    title: "Shop Floor Automation | Manufacturing Production Recording",
    description: "Transform manual paper-based hourly production recording into automated digital workflows. Eliminate paper handling, enable accurate tracking, faster approvals, and audit-ready reports.",
    keywords: [
        "shop floor automation",
        "manufacturing production recording",
        "digital production reports",
        "hourly production tracking",
        "manufacturing workflow automation",
        "paperless manufacturing",
        "production line digitization",
        "shift management system",
        "manufacturing audit trail",
        "production approval workflow",
    ],
    alternates: {
        canonical: "https://www.cannymindstech.com/solutions/manufacturing/shop-floor-automation",
    },
    openGraph: {
        title: "Shop Floor Automation",
        description: "From manual paper entry to automated digital production reports. Transform your manufacturing floor operations.",
        type: 'website',
        siteName: 'CannyMinds',
        locale: 'en_US',
        images: [
            {
                url: "https://www.cannymindstech.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Shop Floor Automation Solutions"
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Shop Floor Automation",
        description: "From manual paper entry to automated digital production reports. Transform your manufacturing floor operations.",
        images: ['https://www.cannymindstech.com/og-image.jpg'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Shop Floor Automation | CannyMinds",
    "description": "Transform manual paper-based hourly production recording into automated digital workflows with complete audit traceability.",
    "publisher": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions",
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
        }
    },
    "author": {
        "@type": "Organization",
        "name": "CannyMinds Technology Solutions"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
};

export default function ShopFloorAutomationPage() {
    const roles = [
        { role: "Operator", responsibility: "Starts the production record", icon: Person },
        { role: "Shift Person", responsibility: "Enters hourly production details", icon: Edit },
        { role: "Supervisor", responsibility: "Reviews and validates data", icon: SupervisorAccount },
        { role: "Manager", responsibility: "Final approval", icon: Approval },
        { role: "Admin", responsibility: "User and system setup", icon: AdminPanelSettings },
    ];

    const manualProcessItems = [
        "Hour-wise time slots",
        "Production quantity per hour",
        "Rejection quantity",
        "Reasons for loss time or defects",
        "Supervisor checks and signatures",
    ];

    const manualProcessProblems = [
        "Filled by hand",
        "Reviewed manually",
        "Stored physically",
        "Difficult to track, consolidate, or audit",
    ];

    const objectives = [
        "Replace manual paper entry with digital hourly entry",
        "Capture the same information, but in a structured system",
        "Automatically generate a digital production report",
        "Ensure traceability, approvals, and audit readiness",
    ];

    const benefits = [
        { benefit: "No paper handling", description: <span>Eliminate physical forms and manual data entry with digital <Link href="/product/document-management" className="text-orange-600 hover:underline">document management</Link></span> },
        { benefit: "No missing or damaged records", description: "All data stored securely in the system" },
        { benefit: "Accurate hourly tracking", description: "Real-time production data capture" },
        { benefit: "Faster approvals", description: "Streamlined digital approval workflow" },
        { benefit: "Easy audits", description: "Complete audit trail with timestamps" },
        { benefit: "One-click reports", description: "Automated report generation on demand" },
    ];

    return (
        <>
            <main className="min-h-screen bg-white">
                {/* JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                {/* Breadcrumb */}
                <div className="bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-primary flex items-center gap-1">
                                <Home sx={{ fontSize: 16 }} />
                                Home
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <Link href="/solutions/manufacturing" className="hover:text-primary">
                                Manufacturing
                            </Link>
                            <ChevronRight sx={{ fontSize: 16 }} className="text-gray-400" />
                            <span className="text-gray-900 font-medium">Shop Floor Automation</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                                    <Factory sx={{ fontSize: 18 }} />
                                    Manufacturing AI
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Manufacturing Shop Floor Automation
                                </h1>

                                <p className="text-xl font-semibold text-orange-600 mb-4">
                                    Hourly Production Recording Process
                                </p>

                                <div className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                                    From Manual Paper Entry to Automated Digital Report. Transform your <Link href="/solutions/manufacturing" className="text-orange-600 hover:underline">manufacturing</Link> floor operations with intelligent workflow automation that eliminates paper handling, enables accurate hourly tracking, and delivers audit-ready production reports.
                                </div>


                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2 shadow-lg"
                                    >
                                        Request Demo
                                        <ArrowForward sx={{ fontSize: 20 }} />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <SecureImage
                                    src="/images/solutions/manfactureing/shop floor automation/Manufacturing-Shop-Floor-Automation-v2.png"
                                    alt="Manufacturing shop floor automation overview showing digital workflows and real-time monitoring"
                                    width={600}
                                    height={450}
                                    className="rounded-2xl w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Background Section - Manual Process */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Background – How Production Is Recorded Today (Manual Process)
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Today, hourly production details are recorded manually on paper sheets on the shop floor.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Assignment className="text-orange-500" />
                                    Paper Sheets Typically Include:
                                </h3>
                                <ul className="space-y-3 mb-8">
                                    {manualProcessItems.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Warning className="text-red-500" />
                                    Challenges with Paper Sheets:
                                </h3>
                                <ul className="space-y-3">
                                    {manualProcessProblems.map((problem, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Cancel className="text-red-500 flex-shrink-0 mt-0.5" sx={{ fontSize: 20 }} />
                                            <span className="text-gray-700">{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <SecureImage
                                    src="/images/solutions/manfactureing/shop floor automation/manual-paper-entery.png"
                                    alt="Manual production recording process on shop floor with paper-based logs and registers"
                                    width={600}
                                    height={450}
                                    className="rounded-xl w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Objective Section */}
                <section className="py-12 px-6 lg:px-12 bg-orange-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <SecureImage
                                    src="/images/solutions/manfactureing/shop floor automation/manufacturing-automation-workflow-v3.png"
                                    alt="Digital production automation workflow diagram illustrating process flow"
                                    width={600}
                                    height={450}
                                    className="rounded-xl w-full h-auto object-cover"
                                />
                            </div>

                            <div className="order-1 lg:order-2">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    Objective – What We Are Automating
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    The goal of this workflow is to transform manual paper-based processes into a fully digital, traceable, and audit-ready system.
                                </p>

                                <ul className="space-y-4">
                                    {objectives.map((objective, index) => (
                                        <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-orange-200">
                                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-700 font-medium">{objective}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* People Involved Section */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                People Involved in the Automated Process
                            </h2>
                            <p className="text-lg text-gray-600">
                                Clear role-based responsibilities ensure smooth workflow execution.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {roles.map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                                        <item.icon sx={{ fontSize: 28 }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.role}</h3>
                                    <p className="text-sm text-gray-600">{item.responsibility}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Flow Section */}
                <section className="py-12 px-6 lg:px-12 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                End-to-End Process Flow (Real Shop-Floor Story)
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                A step-by-step journey from production start to automated report generation.
                            </p>
                        </div>

                        {/* Step 1 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Operator Starts the Digital Production Record</h3>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 items-start ml-16">
                                <div>
                                    <p className="text-gray-600 mb-6">
                                        At the start of the shift, the operator opens the system and creates a new production record. The operator enters:
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {["Date", "Production line / activity (e.g., Cell Sorting)", "Shift (A / B / C)", "Assigned Shift Person"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">
                                            <strong>This step replaces</strong> the first heading section of the manual paper sheet. Once submitted, the record is opened for hourly updates.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <SecureImage
                                        src="/images/solutions/manfactureing/shop floor automation/Starts-Digital-Production-Record.png"
                                        alt="Operator starting a digital production record on tablet interface within shop floor automation system"
                                        width={600}
                                        height={450}
                                        className="rounded-xl w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Shift Person Records Hourly Production (Core Activity)</h3>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 items-start ml-16">
                                <div className="order-2 lg:order-1">
                                    <SecureImage
                                        src="/images/solutions/manfactureing/shop floor automation/Shift-Person-Records-Hourly-Production.png"
                                        alt="Shift personnel entering hourly production data into automated system"
                                        width={600}
                                        height={450}
                                        className="rounded-xl w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <p className="text-gray-600 mb-6">
                                        The Shift Person is responsible for recording production for each hour of the shift, just like the manual sheet. For every hourly slot:
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {["Start time and end time", "Production quantity", "Rejection quantity (numbers only)", "Loss time / rejection remarks (if any)"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">
                                            <strong>This step directly replaces</strong> the handwritten hourly rows in the paper sheet. The Shift Person continues entering data hour by hour until the shift ends. Once complete, the record is submitted to the Supervisor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Supervisor Reviews the Digital Entry</h3>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 items-start ml-16">
                                <div>
                                    <p className="text-gray-600 mb-6">
                                        The Supervisor receives the completed shift record for review. The Supervisor checks:
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {["Hour-wise production values", "Rejection quantities", "Remarks and loss reasons"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <Visibility className="text-blue-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-600 mb-4">The Supervisor can:</p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                                            <Done className="text-green-600" />
                                            <span className="text-gray-700">Forward the record to the Manager (and <Link href="/solutions/pharmaceutical/quality-inspection-capa" className="text-blue-600 hover:underline">Quality</Link> if needed)</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                                            <Settings className="text-amber-600" />
                                            <span className="text-gray-700">Send it back to the Shift Person for correction</span>
                                        </div>
                                    </div>
                                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">
                                            <strong>This replaces</strong> manual supervisor checking and signatures on paper.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <SecureImage
                                        src="/images/solutions/manfactureing/shop floor automation/Supervisor-Reviews-Digital-Entry.png"
                                        alt="Supervisor reviewing digital production entry on desktop interface showing approval options"
                                        width={600}
                                        height={450}
                                        className="rounded-xl w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Manager Gives Final Approval</h3>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 items-start ml-16">
                                <div className="order-2 lg:order-1">
                                    <SecureImage
                                        src="/images/solutions/manfactureing/shop floor automation/Manager-Gives-Final-Approval.png"
                                        alt="Manager approving digital production record on desktop dashboard"
                                        width={600}
                                        height={450}
                                        className="rounded-xl w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <p className="text-gray-600 mb-6">
                                        The Manager performs the final review, similar to signing off the paper report. The Manager can:
                                    </p>
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                                            <Done className="text-green-600" />
                                            <span className="text-gray-700">Approve and close the record</span>
                                        </div>
                                        <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-lg">
                                            <Settings className="text-amber-600" />
                                            <span className="text-gray-700">Send it back for corrections</span>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">
                                            <strong>All approvals and rejections are logged automatically.</strong> This replaces manual manager sign-off.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Automated Digital Report Is Generated</h3>
                            </div>

                            <div className=" gap-8 items-start ml-16">
                                <div>
                                    <p className="text-gray-600 mb-6">Once approved:</p>
                                    <ul className="space-y-3 mb-6">
                                        {["The workflow is closed", "A digital production report is automatically generated", "A unique reference number is assigned"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mb-8">
                                        <SecureImage
                                            src="/images/solutions/manfactureing/shop floor automation/Automated-Digital-Report-Generated-v2.png"
                                            alt="Automated digital production report generated by the system"
                                            width={600}
                                            height={450}
                                            className="rounded-xl w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">
                                            The output is a <strong>structured, searchable production report</strong> based on the same data that was earlier written manually. This is the automated version of the paper report.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">6</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Secure Storage and Easy Access</h3>
                            </div>
                            <div className="ml-16">
                                <p className="text-gray-600 mb-6">Approved records are:</p>
                                <div className="grid md:grid-cols-3 gap-6 mb-6">
                                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                                        <Storage className="text-orange-500 mb-3" sx={{ fontSize: 40 }} />
                                        <h4 className="font-bold text-gray-900 mb-2">Stored Securely</h4>
                                        <p className="text-sm text-gray-600">Protected in our <Link href="/product/rms" className="text-orange-600 hover:underline">RMS</Link> with encryption</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                                        <VerifiedUser className="text-green-500 mb-3" sx={{ fontSize: 40 }} />
                                        <h4 className="font-bold text-gray-900 mb-2">Version-Controlled</h4>
                                        <p className="text-sm text-gray-600">Complete history of all changes</p>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                                        <AccessTime className="text-blue-500 mb-3" sx={{ fontSize: 40 }} />
                                        <h4 className="font-bold text-gray-900 mb-2">Available Anytime</h4>
                                        <p className="text-sm text-gray-600">Ready for audits, reviews, or analysis</p>
                                    </div>
                                </div>
                                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                    <p className="text-gray-700 font-medium">
                                        No physical files. No missing sheets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">7</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Monitoring and Visibility (For Management)</h3>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-8 items-start ml-16">
                                <div className="order-2 lg:order-1">
                                    <SecureImage
                                        src="/images/solutions/manfactureing/shop floor automation/Monitoring-and-Visibility-history.png"
                                        alt="Management dashboard showing real-time production visibility and history"
                                        width={600}
                                        height={450}
                                        className="rounded-xl w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <p className="text-gray-600 mb-6">Managers and Supervisors can see:</p>
                                    <ul className="space-y-3 mb-6">
                                        {["Ongoing shifts", "Pending approvals", "Completed production reports"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <Dashboard className="text-blue-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700 font-medium">
                                            This visibility is not possible with manual registers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 8 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">8</div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">System Support (Happens in the Background)</h3>
                            </div>
                            <div className="ml-16 space-y-8">
                                {/* User Accounts */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <ManageAccounts className="text-orange-500" sx={{ fontSize: 32 }} />
                                        <h4 className="text-lg font-bold text-gray-900">User Accounts and Role-Based Access</h4>
                                    </div>
                                    <p className="text-gray-600 mb-4">Users are created with defined roles:</p>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {["Operator", "Shift Person", "Supervisor", "Manager"].map((role, i) => (
                                            <span key={i} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 font-medium">Each role has limited and controlled access.</p>
                                </div>

                                {/* Standardized Template */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Article className="text-blue-500" sx={{ fontSize: 32 }} />
                                        <h4 className="text-lg font-bold text-gray-900">Standardized Digital Template</h4>
                                    </div>
                                    <p className="text-gray-600 mb-4">The system uses a predefined template that:</p>
                                    <ul className="space-y-2 mb-6">
                                        {["Matches the manual sheet structure", "Enforces mandatory fields", "Prevents incorrect data formats"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4">
                                        <SecureImage
                                            src="/images/solutions/manfactureing/shop floor automation/Standardized-Digital-Template.png"
                                            alt="Standardized digital template interface for consistent data entry"
                                            width={500}
                                            height={300}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Audit Trail */}
                                <div className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Security className="text-green-500" sx={{ fontSize: 32 }} />
                                        <h4 className="text-lg font-bold text-gray-900">Audit Trail and Compliance</h4>
                                    </div>
                                    <p className="text-gray-600 mb-4">Every action is recorded:</p>
                                    <ul className="space-y-2 mb-4">
                                        {["Who entered hourly data", "Who reviewed and approved", "Date and time of each action"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <CheckCircle className="text-green-500" sx={{ fontSize: 20 }} />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700 font-medium">
                                            This provides full audit traceability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Business Benefits */}
                <section className="py-12 px-6 lg:px-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Key Business Benefits
                            </h2>
                            <p className="text-lg text-gray-600">
                                Transform your manufacturing operations with measurable improvements.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle className="text-green-500" sx={{ fontSize: 28 }} />
                                        <h3 className="text-lg font-bold text-gray-900">{item.benefit}</h3>
                                    </div>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Last Updated */}
                <div className="bg-slate-50 py-8 text-center text-sm text-gray-500">
                    <div className="container mx-auto">
                        {jsonLd.dateModified && jsonLd.dateModified !== jsonLd.datePublished ? (
                            <span>Last Updated: <time dateTime={jsonLd.dateModified}>{new Date(jsonLd.dateModified).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                        ) : (
                            <span>Published: <time dateTime={jsonLd.datePublished}>{new Date(jsonLd.datePublished).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                        )}
                    </div>
                </div>

                {/* CTA Section */}
                <section className="py-12 px-6 lg:px-12 bg-orange-600">
                    <div className="container mx-auto text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Automate Your Shop Floor?
                        </h2>
                        <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                            Transform your manual paper-based production recording into a streamlined digital workflow. Contact us to schedule a demo and see how our shop floor automation solution can benefit your manufacturing operations.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                        >
                            Schedule Consultation
                            <ArrowForward sx={{ fontSize: 20 }} />
                        </Link>
                    </div>
                </section>
            </main >
        </>
    );
}
