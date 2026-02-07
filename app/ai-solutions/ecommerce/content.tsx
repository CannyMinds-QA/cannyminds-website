
import Link from "next/link";
import {
    Description,
    Category,
    AutoFixHigh,
    ListAlt,
    CameraAlt,
    Image,
    VideoLibrary,
    Search,
    PhotoCamera,
    Recommend,
    Inventory,
    RecordVoiceOver,
    TrendingUp,
    Create,
    Campaign,
    PersonalVideo,
    SupportAgent,
    SmartToy,
    Reviews,
    ViewInAr,
    PriceChange,
    Analytics,
    LocalShipping,
    Security,
    Lightbulb,
} from "@mui/icons-material";

export const ecommerceContent = {
    hero: {
        title: "Gen AI for E-Commerce & Retail",
        subtitle: "Sell Smarter, Personalize Better, Scale Faster",
        description: (
            <>
                Transform your e-commerce operations with <Link href="/ai-solutions/marketing" className="text-cyan-600 hover:underline">AI-powered product content generation</Link>, intelligent search and discovery, <Link href="/ai-solutions/marketing" className="text-cyan-600 hover:underline">personalized marketing</Link>, and automated customer support that delivers higher conversions and customer lifetime value.
            </>
        ),
    },
    useCases: [
        // I. Product Data Management
        {
            id: "automated-descriptions",
            title: "Automated Product Descriptions",
            icon: Description,
            problem: "Manually writing descriptions for thousands of SKUs is slow, costly, inconsistent, and often lacks SEO optimization, hindering organic discoverability and conversion.",
            solution: "Generates SEO-optimized, engaging, and brand-consistent product descriptions at scale in multiple languages. It uses product attributes and brand style guides as input to create unique descriptions, titles, and marketing copy for various channels in seconds.",
            capabilities: [
                "SEO-optimized content generation",
                "Multi-language support",
                "Brand voice consistency",
                "Bulk description creation",
                "Channel-specific formatting"
            ],
            benefits: {
                cost: "80% reduction in content creation time",
                quality: "Higher search rankings and increased organic traffic"
            }
        },
        {
            id: "taxonomy-classification",
            title: "Product Taxonomy Classification",
            icon: Category,
            problem: "Products often enter the system with inconsistent or vague initial classifications, leading to poor customer findability, incorrect inventory allocation, and difficult cross-listing on marketplaces.",
            solution: "Automatically classifies products into a structured, multi-level hierarchy (categories, subcategories) by analyzing the product title, image, description, and raw attributes.",
            capabilities: [
                "Multi-level category assignment",
                "Image-based classification",
                "Cross-marketplace mapping",
                "Attribute extraction",
                "Consistency validation"
            ],
            benefits: {
                cost: "70% reduction in manual cataloging",
                quality: "Enhanced customer search accuracy and lower bounce rate"
            }
        },
        {
            id: "attribute-enrichment",
            title: "Product Attribute Enrichment",
            icon: AutoFixHigh,
            problem: "Many products lack complete or standardized attributes (e.g., size, material, care instructions), requiring tedious manual research. This gap reduces search fidelity and increases customer returns.",
            solution: "Fills in missing specs (like size, material, dimensions, or compliance info) by reasoning from the available sparse data, product images, and learned knowledge across the entire catalog and external sources.",
            capabilities: [
                "Missing spec auto-fill",
                "Image-based attribute extraction",
                "Cross-catalog learning",
                "Compliance info detection",
                "Standardization automation"
            ],
            benefits: {
                cost: "60% reduction in manual data entry",
                quality: "Lower return rates with complete, accurate information"
            }
        },
        {
            id: "listing-autofill",
            title: "Listing Auto-Fill",
            icon: ListAlt,
            problem: "The process of creating an entire product listing (Title, Bullet Points, Tags, Attributes, SEO fields) from a basic product spec sheet is time-consuming and prone to human error or inconsistency.",
            solution: "Creates a complete, ready-to-publish product listing (titles, bullet points, tags, attributes) from minimal raw input data (e.g., a short vendor description and a few key specs).",
            capabilities: [
                "One-click listing generation",
                "SEO field automation",
                "Tag and keyword extraction",
                "Multi-platform formatting",
                "Brand guideline compliance"
            ],
            benefits: {
                cost: "75% faster time-to-market",
                quality: "Consistent brand voice across all listings"
            }
        },
        {
            id: "product-photography",
            title: "Product Photography (Image Generation)",
            icon: CameraAlt,
            problem: "Traditional photoshoots are expensive, time-consuming, and require significant logistics. Creating variations for different backgrounds or seasonal campaigns is costly.",
            solution: "Generates high-quality product images in bulk, including product-only shots, images with specific, clean backgrounds, or images showcasing the product's details and textures.",
            capabilities: [
                "Bulk image generation",
                "Background customization",
                "Detail and texture rendering",
                "Seasonal campaign variations",
                "Multi-angle generation"
            ],
            benefits: {
                cost: "90% cost reduction vs traditional shoots",
                quality: "Images generated in minutes instead of weeks"
            }
        },
        {
            id: "photorealistic-images",
            title: "Creation of Photo-Realistic Images",
            icon: Image,
            problem: "To drive engagement and visualize use, products need to be shown in various contexts (lifestyle, context, stylized scenes), which is impossible to do physically at scale.",
            solution: "Creates dynamic, photo-realistic lifestyle and contextual images by placing the product in a scene as described by a prompt (e.g., 'a stainless steel mug on a snowy mountain campsite').",
            capabilities: [
                "Lifestyle scene generation",
                "Context-aware placement",
                "Prompt-based customization",
                "Seasonal scene creation",
                "Brand aesthetic matching"
            ],
            benefits: {
                cost: "Higher CTR from contextualized visuals",
                quality: "Increased customer engagement and reduced purchase uncertainty"
            }
        },
        {
            id: "ugc-video-creation",
            title: "Product UGC Videos & Video Creation",
            icon: VideoLibrary,
            problem: "User-Generated Content (UGC) videos are highly effective but difficult and slow to source. Professional videos are costly to produce and difficult to scale.",
            solution: "AI-generated videos in a UGC style (demonstrating products, unboxing) and professional product videos can be created from text scripts, images, and audio narration.",
            capabilities: [
                "UGC-style video generation",
                "Script-to-video automation",
                "Multi-language localization",
                "Unboxing and demo videos",
                "Social platform optimization"
            ],
            benefits: {
                cost: "Significant increase in ROAS on video ads",
                quality: "Rapid, on-demand video content at scale"
            }
        },
        // II. Search, Discovery & Personalization
        {
            id: "natural-language-search",
            title: "Natural-Language Search",
            icon: Search,
            problem: "Traditional search relies on exact keyword matching, leading to poor results for conversational or vague queries (e.g., 'comfortable running shoes for winter').",
            solution: "Allows conversational queries that understand user intent, context, and implied attributes. The search engine acts like a knowledgeable store assistant, interpreting complex, long-tail searches and delivering highly relevant product sets.",
            capabilities: [
                "Intent understanding",
                "Conversational query processing",
                "Context-aware results",
                "Long-tail search optimization",
                "Synonym and attribute inference"
            ],
            benefits: {
                cost: "Higher search conversion rates",
                quality: "Reduced 'no results found' rate and improved experience"
            }
        },
        {
            id: "visual-search",
            title: "Visual Search",
            icon: PhotoCamera,
            problem: "Shoppers often see a product in the real world or on social media and cannot find it in an online store because they lack the exact descriptive words.",
            solution: "Finds products by uploading or snapping pictures. Customers can provide an image, and the AI will return visually similar products from the catalog.",
            capabilities: [
                "Image upload search",
                "Camera snap-to-search",
                "Visual similarity matching",
                "Style-based recommendations",
                "Color and pattern recognition"
            ],
            benefits: {
                cost: "Increased product discovery",
                quality: "Bridging real-world inspiration to online purchase"
            }
        },
        {
            id: "product-recommendations",
            title: "Product Recommendations",
            icon: Recommend,
            problem: "Traditional recommendations are often basic ('Customers who bought this also bought...') and lack depth or thematic relevance.",
            solution: "Generates highly personalized and context-aware suggestions (products, offers, or bundles) based on real-time browsing behavior, purchase history, and even external trends.",
            capabilities: [
                "Real-time personalization",
                "Behavioral analysis",
                "Purchase history integration",
                "Trend-based suggestions",
                "Cross-category discovery"
            ],
            benefits: {
                cost: "Increased AOV and CLTV",
                quality: "Higher click-through and conversion on recommendations"
            }
        },
        {
            id: "intelligent-bundling",
            title: "Intelligent Bundling & Upselling",
            icon: Inventory,
            problem: "Manual creation of product bundles is static and often misses real-time opportunities to increase order value based on a user's current cart and intent.",
            solution: "Dynamically curates optimal product bundles and upsell offers in real-time based on the user's cart, inventory levels, and predicted purchase probability.",
            capabilities: [
                "Dynamic bundle creation",
                "Cart-based upselling",
                "Inventory-aware bundling",
                "Purchase probability prediction",
                "Slow-mover optimization"
            ],
            benefits: {
                cost: "Maximized Average Order Value (AOV)",
                quality: "Optimized inventory sell-through"
            }
        },
        {
            id: "conversational-commerce",
            title: "Conversational Commerce & Voice Shopping",
            icon: RecordVoiceOver,
            problem: "The shopping journey is siloed—search, discovery, and checkout happen in separate interfaces. Customers want a seamless, natural interaction across text and voice.",
            solution: "AI guides customers through discovery and checkout via chat or voice, acting as a 24/7 personal shopping assistant. This includes answering product questions, checking inventory, processing orders, and offering personalized recommendations within a single conversation thread.",
            capabilities: [
                "Chat-based shopping",
                "Voice commerce integration",
                "Inventory checking",
                "Order processing",
                "In-conversation recommendations"
            ],
            benefits: {
                cost: "Reduced cart abandonment",
                quality: "24/7 personalized support and faster path to purchase"
            }
        },
        // III. Marketing
        {
            id: "seo-optimization",
            title: "SEO Optimization",
            icon: TrendingUp,
            problem: "Manually performing keyword research, writing meta descriptions, and applying complex schema markup is a tedious, technical, and often inconsistent process, leading to missed organic search opportunities.",
            solution: "AI-powered tools automate keyword research, generate compelling meta descriptions, and produce structured data (schema markup). This ensures all product pages and content are technically optimized for search engines at scale.",
            capabilities: [
                "Automated keyword research",
                "Meta description generation",
                "Schema markup automation",
                "Technical SEO optimization",
                "Competitor keyword analysis"
            ],
            benefits: {
                cost: "Significant reduction in SEO team workload",
                quality: "Improved organic rankings and higher CTR"
            }
        },
        {
            id: "content-generator",
            title: "Blog & Social Content Generator",
            icon: Create,
            problem: "Maintaining a consistent flow of fresh, engaging, and relevant content for blogs and social channels is resource-intensive and often struggles to keep up with current trends.",
            solution: "Creates articles, posts, and updates to drive traffic by generating content based on target topics, trending keywords, and specific platform formats.",
            capabilities: [
                "Blog article generation",
                "Social post creation",
                "Trend-based content",
                "Platform-specific formatting",
                "Content calendar automation"
            ],
            benefits: {
                cost: "Lower content creation costs",
                quality: "Higher social engagement and site traffic"
            }
        },
        {
            id: "ad-creative-optimization",
            title: "Creative Assets & Ad Optimization",
            icon: Campaign,
            problem: "Designing high-performing visual assets (banners, display ads, social creatives) and constantly testing copy variations is a bottleneck, slowing down marketing campaigns and leading to suboptimal ad spend.",
            solution: "Generates banners, ads, and other visual marketing materials instantly. It also auto-generates and tests ad copy, images, creative variants, and targeting in real-time to find the highest converting combinations.",
            capabilities: [
                "Banner and ad generation",
                "A/B test automation",
                "Creative variant testing",
                "Performance optimization",
                "Real-time targeting adjustment"
            ],
            benefits: {
                cost: "Lower customer acquisition cost (CAC)",
                quality: "Higher ROAS with optimal creative combinations"
            }
        },
        {
            id: "personalized-campaigns",
            title: "Personalized Marketing Campaigns",
            icon: PersonalVideo,
            problem: "Generic marketing campaigns waste budget and alienate customers. Manually designing tailored offers and promotions for thousands of segments or individuals is impossible.",
            solution: "Designs tailored offers and promotions per segment or individual by synthesizing customer data, browsing history, predicted lifetime value, and current inventory.",
            capabilities: [
                "Segment-specific offers",
                "Individual personalization",
                "CLTV-based targeting",
                "Inventory-aware promotions",
                "Dynamic offer generation"
            ],
            benefits: {
                cost: "Increased engagement and conversion",
                quality: "Higher customer retention and lifetime value"
            }
        },
        // IV. Customer Experience & Support
        {
            id: "support-bots",
            title: "Conversational & Telephony Support Bots",
            icon: SupportAgent,
            problem: "Support teams are overwhelmed by high-volume, repetitive queries. Customers expect instant, 24/7 service across multiple channels, including voice.",
            solution: "Provides 24/7 automated assistance via Conversational Chatbots (website, WhatsApp) and Telephone Support Bots (IVR). The AI resolves order queries, handles returns, and guides customers through self-service processes.",
            capabilities: [
                "Multi-channel support (chat, voice)",
                "Order query resolution",
                "Returns processing",
                "Self-service guidance",
                "Escalation management"
            ],
            benefits: {
                cost: "Reduced operational support costs",
                quality: "Higher CSAT from instant, accurate resolution"
            }
        },
        {
            id: "digital-avatar",
            title: "Digital AI Avatar & Product Q&A",
            icon: SmartToy,
            problem: "Customers often struggle to visualize a product or get immediate, detailed answers about specifications while shopping, leading to high abandonment rates and returns.",
            solution: "Customers can chat with a digital avatar or a dedicated Product Q&A Assistant to ask specific, real-time questions about a product, order status, or policy.",
            capabilities: [
                "Interactive digital avatar",
                "Real-time product Q&A",
                "Specification lookup",
                "Policy and FAQ handling",
                "Visual product guidance"
            ],
            benefits: {
                cost: "Lower cart abandonment rates",
                quality: "Increased confidence in purchase decisions"
            }
        },
        {
            id: "reviews-summarization",
            title: "Reviews Summarization",
            icon: Reviews,
            problem: "Customers rarely read hundreds of product reviews, and merchants struggle to distill actionable feedback from a massive volume of text across different platforms.",
            solution: "Summarizes customer feedback into clear pros/cons and sentiment analysis. This provides both shoppers and product teams with a quick, digestible overview of product performance.",
            capabilities: [
                "Pros/cons extraction",
                "Sentiment analysis",
                "Key theme identification",
                "Multi-platform aggregation",
                "Trend detection in feedback"
            ],
            benefits: {
                cost: "Accelerated product improvement cycles",
                quality: "Higher conversion with trusted review summaries"
            }
        },
        {
            id: "virtual-tryon",
            title: "Virtual Try-On",
            icon: ViewInAr,
            problem: "Customers hesitate to buy items like clothing or furniture online due to uncertainty about how the product will look on them or fit in their space, leading to high return rates.",
            solution: "Allows customers to visualize products (e.g., try on clothes on a photo of themselves, place a piece of furniture in their room) using Augmented Reality (AR) driven by Gen AI.",
            capabilities: [
                "Clothing virtual try-on",
                "Furniture room placement",
                "AR visualization",
                "Size and fit prediction",
                "Color and style preview"
            ],
            benefits: {
                cost: "Significantly reduced return rates",
                quality: "Increased conversion for visual categories"
            }
        },
        // V. Operations, Analytics & R&D
        {
            id: "dynamic-pricing",
            title: "Dynamic Pricing",
            icon: PriceChange,
            problem: "Manually adjusting prices across a large catalog is slow, often reactionary, and fails to optimize revenue against real-time variables like competitor pricing, inventory levels, and demand.",
            solution: "Adjusts prices dynamically based on predictive models that factor in demand, competitor pricing, inventory levels, time of day, and personalized customer elasticity.",
            capabilities: [
                "Real-time price adjustment",
                "Competitor price monitoring",
                "Demand-based pricing",
                "Inventory optimization",
                "Customer elasticity modeling"
            ],
            benefits: {
                cost: "Maximized profit margins",
                quality: "Optimized inventory sell-through"
            }
        },
        {
            id: "business-analytics",
            title: "Business Analytics & Sales Chat Engine",
            icon: Analytics,
            problem: "Business users require custom reports and actionable insights, but generating these manually through static dashboards or SQL queries is slow and requires technical expertise.",
            solution: "Surfaces insights and optimizes experiments automatically. Crucially, users can simply ask questions about their sales data (e.g., 'Why did shoe sales drop in California last month?') and receive dynamic reports and insights in natural language.",
            capabilities: [
                "Natural language queries",
                "Dynamic report generation",
                "Trend identification",
                "Root cause analysis",
                "Predictive insights"
            ],
            benefits: {
                cost: "Democratized data access",
                quality: "Faster identification of performance drivers"
            }
        },
        {
            id: "inventory-optimization",
            title: "Inventory & Supply Chain Optimization",
            icon: LocalShipping,
            problem: "Inaccurate inventory forecasts lead to costly stock-outs (lost sales) or overstocking (carrying costs). Supply chain planning is often rigid and slow to react to real-world disruptions.",
            solution: "Forecasts demand, manages inventory, and optimizes supply chain logistics. It predicts sales patterns and seasonality and plans the most efficient logistics routes, sourcing, and fulfillment strategies.",
            capabilities: [
                "Demand forecasting",
                "Stock-out prevention",
                "Carrying cost optimization",
                "Route optimization",
                "Seasonality prediction"
            ],
            benefits: {
                cost: "Lower inventory carrying costs",
                quality: "Reduced stock-outs and higher fulfillment rate"
            }
        },
        {
            id: "fraud-detection",
            title: "Fraud Detection & Compliance",
            icon: Security,
            problem: "E-commerce businesses are constantly targeted by fraudulent transactions, fake reviews, and sophisticated bot attacks, alongside a growing need for automated financial compliance.",
            solution: "Identifies suspicious transactions, fake reviews, and anomalies in real-time. It also automates reconciliation, contract analysis, and regulatory checks (Finance & Compliance).",
            capabilities: [
                "Transaction fraud detection",
                "Fake review identification",
                "Bot attack prevention",
                "Automated reconciliation",
                "Regulatory compliance checks"
            ],
            benefits: {
                cost: "Lowered financial loss from chargebacks",
                quality: "Reduced manual compliance effort"
            }
        },
        {
            id: "product-design-rd",
            title: "Product Design & R&D",
            icon: Lightbulb,
            problem: "Product development is a high-risk, slow process that relies heavily on manual trend analysis and designer brainstorming, often leading to products that miss peak market timing.",
            solution: "Detects emerging market and product trends by analyzing social media, search data, and competitor activity. It then generates product concepts and variations for designers to refine.",
            capabilities: [
                "Trend detection",
                "Competitor analysis",
                "Concept generation",
                "Design variation creation",
                "Market timing prediction"
            ],
            benefits: {
                cost: "Accelerated time-to-market",
                quality: "Higher success rate for new product launches"
            }
        }
    ],
    regulatoryMapping: [
        {
            regulation: "PCI DSS (Payment Card Industry)",
            expectation: "Secure handling of cardholder data, encryption, and access controls.",
            alignment: "Secure payment processing, tokenization, and audit trail for all transactions."
        },
        {
            regulation: "GDPR (Data Protection)",
            expectation: "Personal data protection, consent management, and data subject rights.",
            alignment: "Privacy-first AI design, consent tracking, and automated data request handling."
        },
        {
            regulation: "CCPA (California Privacy)",
            expectation: "Consumer rights to know, delete, and opt-out of data sale.",
            alignment: "Transparent data usage, automated opt-out processing, and privacy controls."
        },
        {
            regulation: "SOC 2 Type II",
            expectation: "Security, availability, processing integrity, confidentiality, and privacy.",
            alignment: "Enterprise-grade security, continuous monitoring, and documented audit trails."
        }
    ],
    caseStudies: [
        {
            title: "Product Content Automation",
            scenario: "Large marketplace with 50,000+ SKUs facing content bottleneck with 3-week listing time.",
            solution: "AI-powered product description and listing auto-fill with SEO optimization.",
            outcome: "Listing time reduced to 2 days, 80% cost reduction in content creation, 40% increase in organic traffic."
        },
        {
            title: "Personalization at Scale",
            scenario: "Fashion retailer with generic recommendations seeing low conversion on product pages.",
            solution: "Real-time personalized recommendations with intelligent bundling and visual search.",
            outcome: "35% increase in AOV, 25% higher conversion rate, 50% improvement in product discovery."
        },
        {
            title: "Customer Support Transformation",
            scenario: "E-commerce brand overwhelmed with 10,000+ daily support tickets and long response times.",
            solution: "Conversational AI bots for chat, WhatsApp, and telephony with reviews summarization.",
            outcome: "70% reduction in ticket volume, 24/7 instant response, 40% improvement in CSAT scores."
        }
    ]
};
