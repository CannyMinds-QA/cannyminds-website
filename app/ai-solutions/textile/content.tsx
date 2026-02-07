
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
                Transform your textile operations with <Link href="/solutions/product/tracking-system" className="text-blue-600 hover:underline">AI-powered merchandising automation</Link>, intelligent quality control, trend-driven design intelligence, and seamless buyer communication that accelerates your design-to-production cycle.
            </>
        ),
    },
    useCases: [
        {
            id: "merchandising-workflow",
            title: "Merchandising Workflow Automation",
            icon: AutoAwesome,
            problem: "Merchandising involves processing vast amounts of unstructured data—tech packs, Bills of Materials (BOMs), style sheets, and buyer emails—and manually converting this into structured fields within the ERP/PLM systems. This is slow, error-prone, and causes delays in production start.",
            solution: "Converts tech packs, style sheets, BOMs, and buyer emails into structured ERP fields like fabric type, GSM, trims, measurements, and delivery dates. The AI acts as an intelligent data capture and parsing engine.",
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
            problem: "Buyer communication is frequent and sensitive, requiring timely, professional responses for clarifications, sampling updates, and negotiation. Maintaining consistency in tone and ensuring compliance with buyer rules is challenging at high volumes.",
            solution: "Drafts buyer responses, clarifications, and sampling updates using historical buyer interaction data to match the buyer's preferred tone and compliance rules. It pulls real-time data from internal systems (e.g., 'Sampling completion date is 10 days away').",
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
            problem: "Quality Control (QC) staff must stop inspecting fabric or garments to manually write down or type defect types, locations, and severities into a spreadsheet or tablet, disrupting their flow and increasing data lag.",
            solution: "QC staff verbally report defects during inspection, and the AI converts the speech to structured QC entries (e.g., 'three-inch oil stain on weft, zone B') automatically mapped to the ERP or QC management system fields.",
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
            problem: "Manual fabric inspection for defects (holes, shade variation, slubs) is subjective, fatiguing, and often misses small errors, leading to downstream fabric rejection and significant material waste.",
            solution: "Vision models analyze fabric in real-time during the production process to detect holes, shade variations, stains, broken yarns, and other defects, and auto-score defects instantly using industry standards like the 4-Point System.",
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
            problem: "Designers spend significant time manually researching market trends, competitor collections, and analyzing past order performance to inform the new season's design concepts. This process is slow and often based on lagging indicators.",
            solution: "Analyzes buyer briefs, social media, market data, and past order success rates to suggest timely colors, patterns, and fabric trends. It provides data-driven evidence for design choices.",
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
            problem: "Designers occasionally face creative blocks and need rapid, novel concepts that still align with the brand DNA and the current buyer's mood board.",
            solution: "Analyzes past collections, buyer mood boards, trend data, and market inputs to generate novel design concepts (e.g., sketch-to-image or text-to-image concepts for prints, silhouettes, or knitwear structures).",
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
            problem: "Once a base design is created, the process of manually generating multiple variations (e.g., 20 colorways, 10 different patterns) for buyer selection is time-consuming for the design team.",
            solution: "Generates multiple colorways, pattern variations, and fabric options from a single base design file in seconds. It can render these variations realistically for presentation.",
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
            id: "buyer-brief-interpreter",
            title: "Buyer Brief Interpreter",
            icon: Description,
            problem: "Buyer briefs arrive in various unstructured formats (PDFs, word documents, long emails) and require careful manual reading and interpretation to distill into a structured list of design requirements for the technical team.",
            solution: "Converts unstructured buyer briefs, PDFs, and emails into structured design requirements (e.g., a formal design specification checklist) for the PLM system.",
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
    ]
};
