import Link from "next/link";
import {
    AutoAwesome,
    Email,
    Mic,
    Visibility,
    TrendingUp,
    Palette,
    ColorLens,
    Description,
} from "@mui/icons-material";

export const textileContent = {
    hero: {
        title: "Gen AI for Textile & Apparel Industry",
        subtitle: "Design Faster, Produce Smarter, Deliver Better",
        description: (
            <>
                Speed up your design-to-production cycle by letting AI handle the grueling prep work, from tedious merchandising data entry to catching subtle fabric flaws directly on the line.
            </>
        ),
    },
    useCases: [
        {
            id: "merchandising-workflow",
            title: "Merchandising Workflow Automation",
            icon: AutoAwesome,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/automated-merchandising-bulk-orders.png",
            imageAlt: "automated-merchandising-bulk-orders",
            problem: "Merchandisers spend hours staring at mismatched tech packs, messy BOMs, and scattered buyer emails, trying to copy-paste it all into the ERP. It’s a mind-numbing bottleneck before production even starts.",
            solution: (
                <>
                    Strips the manual data entry out of the process. The system reads your messy tech packs, instantly typing out the exact fabric type, GSM, and trims straight into your ERP fields. All digitized tech packs and buyer approvals are then securely archived into our <Link href="/product/enterprise-content-management" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-200 font-semibold">CannyECM (Enterprise Content Management)</Link> platform for instant, central retrieval across your entire supply chain.
                </>
            ),
            capabilities: [
                "Tech pack data extraction",
                "BOM auto-population",
                "Style sheet parsing",
                "Buyer email analysis",
                "ERP/PLM field mapping"
            ],
            benefits: {
                cost: "50% faster style onboarding",
                quality: "Fewer manual data entry errors and quicker buyer response"
            }
        },
        {
            id: "buyer-communication",
            title: "Buyer Communication Assistant",
            icon: Email,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/communication-assistant.png",
            imageAlt: "communication-assistant",
            problem: "Buyers ask for sampling updates constantly, and if you respond with the wrong tone—or misquote a compliance rule—you risk the relationship. Keeping 50 different buyers happy at high volume is exhausting.",
            solution: "Write back instantly in the exact tone each specific buyer expects. It checks your internal systems (e.g., 'Sampling finishes in exactly 10 days') and drafts a perfectly structured reply so you just hit send.",
            capabilities: [
                "Tone-matched response drafting",
                "Historical interaction analysis",
                "Real-time status integration",
                "Compliance rule checking",
                "Multi-buyer style adaptation"
            ],
            benefits: {
                cost: "70% faster response time",
                quality: "Improved buyer satisfaction with consistent communication"
            }
        },
        {
            id: "voice-qc-assistant",
            title: "Voice-based QC Assistant",
            icon: Mic,
            image: "",
            imageAlt: "",
            problem: "QC workers on the floor have to put down the fabric, take off their gloves, and manually type every defect into a tablet. It breaks their concentration and slows the entire line down to a crawl.",
            solution: "Let your inspectors keep their eyes on the fabric. They just speak out loud: 'Three-inch oil stain on the weft, zone B', and the system logs it straight into the ERP with the correct severity score.",
            capabilities: [
                "Voice-to-text transcription",
                "Defect type classification",
                "Location and zone mapping",
                "Severity auto-scoring",
                "Real-time ERP integration"
            ],
            benefits: {
                cost: "80% reduction in manual data entry",
                quality: "Faster inspection cycles with higher data accuracy"
            }
        },
        {
            id: "fabric-defect-detection",
            title: "Fabric Defect Detection (4-Point System)",
            icon: Visibility,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/automated-defect-detection.png",
            imageAlt: "automated-defect-detection",
            problem: "Staring at miles of fabric rolling by guarantees human error. Inspectors get tired, miss a tiny shade variation, and suddenly a whole batch gets rejected downstream, throwing thousands of dollars in the trash.",
            solution: (
                <>
                    Camera systems watch the fabric roll in real time, catching holes, shade drops, and broken yarns the moment they happen. It even scores the roll automatically using exact 4-Point System rules. For legacy handwritten inspection logs, our <Link href="/product/scanning-solution" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-200 font-semibold">Document Scanning Solutions</Link> securely digitize years of paper-based QA data to immediately deploy and train these predictive models.
                </>
            ),
            capabilities: [
                "Real-time fabric scanning",
                "Hole and tear detection",
                "Shade variation analysis",
                "Broken yarn identification",
                "4-Point System auto-scoring"
            ],
            benefits: {
                cost: "40% reduction in defect-related waste",
                quality: "Early defect detection minimizing material loss"
            }
        },
        {
            id: "trend-color-intelligence",
            title: "Trend & Color Intelligence",
            icon: TrendingUp,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/trend-intelligence.png",
            imageAlt: "trend-intelligence",
            problem: "Designers get stuck scrolling through competitor social feeds and pulling last year’s order spreadsheets just to guess what colors will hit next season. It’s slow, tedious, and relies entirely on gut feeling.",
            solution: "Pull hard data on exactly what colors and patterns are winning right now. It cross-references buyer briefs with social market data so your design choices are backed by actual evidence, not just a hunch.",
            capabilities: [
                "Social media trend analysis",
                "Competitor collection monitoring",
                "Historical order performance",
                "Color palette recommendations",
                "Pattern trend forecasting"
            ],
            benefits: {
                cost: "Higher order win rate for new collections",
                quality: "Better design relevance aligned with consumer demand"
            }
        },
        {
            id: "design-inspiration",
            title: "Design Inspiration Engine",
            icon: Palette,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/design-inspiration-generator.png",
            imageAlt: "design-inspiration-generator",
            problem: "Every designer hits a wall. But when a major buyer needs 15 fresh mood board concepts by Tuesday morning, 'creative block' isn't an acceptable excuse.",
            solution: "Feed it your past collections and the buyer's mood board, and it instantly spits out novel concepts, whether prints, silhouettes, or knitwear styles, that actually match your brand's core DNA.",
            capabilities: [
                "Mood board analysis",
                "Text-to-image generation",
                "Sketch-to-design conversion",
                "Brand DNA alignment",
                "Novel concept creation"
            ],
            benefits: {
                cost: "50% faster ideation cycle",
                quality: "Increased hit rate with data-backed trend inspiration"
            }
        },
        {
            id: "design-iterations",
            title: "AI-assisted Design Iterations",
            icon: ColorLens,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/design-inspiration-generator-2.png",
            imageAlt: "design-inspiration-generator-2",
            problem: "You nailed the hero design. Now the buyer wants to see it in 20 different colorways and 10 pattern variations. Your team just lost three days to mindless recoloring work.",
            solution: "Take your single base file and instantly spin out dozens of realistic colorways, fabric texture swaps, and pattern variations. Export the whole batch in seconds to present to the buyer.",
            capabilities: [
                "Automated colorway generation",
                "Pattern variation creation",
                "Fabric option rendering",
                "Realistic presentation views",
                "Bulk variation export"
            ],
            benefits: {
                cost: "70% reduction in redesign effort",
                quality: "Wider customized range accelerating buyer selection"
            }
        },
        {
            id: "ai-production-planning",
            title: "AI Production Planning",
            icon: AutoAwesome,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/ai-production-planning.png",
            imageAlt: "ai-production-planning",
            problem: "Planning the factory floor usually involves a massive, fragile Excel sheet. One delayed shipment or broken machine, and the entire week's schedule goes up in smoke.",
            solution: "Takes the guesswork out of the floor schedule. It looks at your machine availability and order load to dynamically shuffle priorities the second a bottleneck or material shortage pops up.",
            capabilities: [
                "Automated schedule generation",
                "Machine utilization tracking",
                "Material shortage prediction",
                "Dynamic reallocation",
                "Order priority management"
            ],
            benefits: {
                cost: "30% greater machine utilization",
                quality: "Timely delivery and reduced bottlenecking"
            }
        },
        {
            id: "predictive-maintenance",
            title: "Predictive Maintenance",
            icon: AutoAwesome,
            image: "/images/ai-Solution/gen-ai-for-textile-apparel-industry/predictive-maintenance.png",
            imageAlt: "predictive-maintenance",
            problem: "There is nothing worse than a knitting machine aggressively jamming in the middle of a rush order. You eat the downtime, pay rush shipping fees, and throw off the whole floor.",
            solution: "Listen to the vibration and heat of the machines before they physically break. Sensors flag a failing part weeks in advance so you can swap it out quietly during a Sunday night shift.",
            capabilities: [
                "IoT sensor data analysis",
                "Vibration & temperature monitoring",
                "Failure prediction models",
                "Automated maintenance alerts",
                "Spare parts inventory tracking"
            ],
            benefits: {
                cost: "50% reduction in unplanned downtime",
                quality: "Consistent product quality due to optimal machine health"
            }
        },
        {
            id: "buyer-brief-interpreter",
            title: "Buyer Brief Interpreter",
            icon: Description,
            image: "",
            imageAlt: "",
            problem: "A buyer drops a 40-page PDF, two Word docs, and a long email chain. Or worse, they mail physical fabric swatch books and signed lab dips that get lost in filing cabinets. Your technical team has to track every single piece of data just to pull out the actual design specs.",
            solution: (
                <>
                    Drop the massive PDFs directly into the system, and log all physical swatches into our <Link href="/product/physical-records-management" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 decoration-blue-200 font-semibold">CannyRMS (Physical Records Management)</Link> module. The AI reads the entire digital mess and cross-references your indexed physical cartons to spit out a clean, structured checklist of design requirements straight into your PLM.
                </>
            ),
            capabilities: [
                "Multi-format document parsing",
                "Requirement extraction",
                "Design spec checklist generation",
                "PLM system integration",
                "Ambiguity flagging"
            ],
            benefits: {
                cost: "60% faster brief processing",
                quality: "Fewer reworks in initial sampling and production stages"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "OEKO-TEX Standard 100",
            expectation: "Testing for harmful substances ensuring textile products are safe for human use.",
            alignment: "AI-powered quality control with automated defect detection and compliance tracking."
        },
        {
            regulation: "GOTS (Global Organic Textile Standard)",
            expectation: "Organic fiber content, environmental criteria, and social compliance throughout supply chain.",
            alignment: "Supply chain traceability, automated documentation, and compliance verification."
        },
        {
            regulation: "ISO 9001 Quality Management",
            expectation: "Consistent quality, documented processes, and continual improvement.",
            alignment: "Automated QC documentation, defect tracking, and process optimization insights."
        },
        {
            regulation: "WRAP (Worldwide Responsible Accredited Production)",
            expectation: "Lawful, humane, and ethical manufacturing practices.",
            alignment: "Audit documentation automation and compliance monitoring across facilities."
        }
    ],
    caseStudies: [
        {
            title: "Merchandising Transformation",
            scenario: "Large apparel exporter processing 500+ styles per season with 7-day average onboarding time.",
            solution: "AI-powered tech pack parsing and ERP auto-population with buyer email integration.",
            outcome: "Style onboarding reduced to 3 days, 80% reduction in data entry errors, faster buyer response."
        },
        {
            title: "Zero-Defect Fabric Production",
            scenario: "Textile mill losing 15% of production value to fabric defects and late-stage rejections.",
            solution: "Computer vision fabric inspection with 4-Point System auto-scoring at production line.",
            outcome: "Defect-related waste reduced by 40%, early detection preventing downstream issues."
        },
        {
            title: "Design Studio Acceleration",
            scenario: "Fashion brand struggling with 3-week design iteration cycles affecting time-to-market.",
            solution: "AI-assisted design variations with trend intelligence and automated colorway generation.",
            outcome: "Design iteration cycle reduced to 1 week, 50% more design options presented to buyers."
        }
    ],
    trustSignals: {
        lastUpdated: "March 19, 2026",
        author: "Written by CannyMinds AI Implementation Team",
        reviewer: "Reviewed by Textile Compliance Experts",
        trustedByText: "Trusted by 50+ Global Apparel Exporters",
        certifications: ["ISO 27001 Certified", "ISO 9001 Certified"]
    },
    testimonials: [
        {
            quote: "CannyMinds reduced our style onboarding from 7 days to 3 days, cutting data entry errors by 80%. It completely eliminated our pre-production bottleneck.",
            author: "Operations Director",
            company: "Top Tier Apparel Exporter"
        }
    ],
    expertiseContext: "6+ years combined experience in textile supply chain optimization and AI infrastructure."
};
