"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Antigravity from "@/components/Antigravity";
import {
  Psychology,
  AutoAwesome,
  SmartToy,
  Speed,
  Security,
  TrendingUp,
  LocalHospital,
  Factory,
  AccountBalance,
  ShoppingCart,
  Gavel,
  Campaign,
  Home as HomeIcon,
  Checkroom,
  Biotech,
  ArrowForward,
  CheckCircle,
  VerifiedUser,
} from "@mui/icons-material";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: LocalHospital,
    headline: "AI-Powered Healthcare Transformation",
    description: "Revolutionize patient care with intelligent automation that streamlines clinical workflows and improves outcomes.",
    details: "Our healthcare AI solutions automate patient registration, billing workflows, clinical coding, and TPA communication. From extracting data from medical records to deploying 24/7 patient chatbots, we help healthcare organizations reduce administrative burden by 70% while maintaining HIPAA compliance.",
    stat: "70%",
    statLabel: "Admin Time Saved",
    iconColor: "text-red-600",
  },
  {
    name: "Pharmaceutical",
    slug: "pharmaceutical",
    icon: Biotech,
    headline: "Accelerate Pharma Manufacturing with AI",
    description: "Ensure FDA 21 CFR Part 11 compliance while reducing batch release time and improving quality.",
    details: "Automate electronic Batch Manufacturing Records (eBMR), streamline CAPA processes, enable predictive maintenance, and deploy computer vision for quality inspection. Our pharma AI is purpose-built for regulatory compliance with complete audit trails and data integrity controls.",
    stat: "80%",
    statLabel: "Faster Batch Review",
    iconColor: "text-purple-600",
  },
  {
    name: "Insurance",
    slug: "insurance",
    icon: VerifiedUser,
    headline: "Intelligent Insurance Operations",
    description: "Transform claims processing, detect fraud, and accelerate underwriting with AI-powered automation.",
    details: "From FNOL to settlement, our AI extracts data from claim forms, medical records, and repair estimates. Machine learning models detect 95% of fraudulent claims while reducing false positives. Automate 80% of underwriting decisions with explainable AI.",
    stat: "95%",
    statLabel: "Fraud Detection",
    iconColor: "text-blue-600",
  },
  {
    name: "NBFC & Finance",
    slug: "nbfc",
    icon: AccountBalance,
    headline: "AI for Modern Financial Services",
    description: "Streamline lending operations, enhance credit decisions, and ensure RBI compliance.",
    details: "Automate the entire lending lifecycle from lead qualification to collections. Our AI analyzes financial statements, bank statements, and alternative data for instant credit decisions. Complete KYC in under 5 minutes with real-time document verification and AML screening.",
    stat: "80%",
    statLabel: "Faster Processing",
    iconColor: "text-green-600",
  },
  {
    name: "Manufacturing & Automotive",
    slug: "manufacturing",
    icon: Factory,
    headline: "Smart Factory with AI",
    description: "Optimize production, ensure worker safety, and predict maintenance with intelligent automation.",
    details: "Deploy computer vision for real-time safety monitoring and PPE compliance. Predict equipment failures 2-4 weeks in advance with IoT analytics. Automate quality inspection with 99.5% defect detection accuracy. Digitize shop floor documents for paperless operations.",
    stat: "50%",
    statLabel: "Less Downtime",
    iconColor: "text-orange-600",
  },
  {
    name: "Textile Industry",
    slug: "textile",
    icon: Checkroom,
    headline: "AI-Driven Textile Innovation",
    description: "Accelerate design cycles, automate quality control, and optimize inventory with creative AI.",
    details: "Generate fabric patterns and design variations with generative AI. Deploy high-speed computer vision for fabric defect detection at 500+ meters per minute. Optimize inventory with AI-powered demand forecasting. Achieve 95% first-time shade approval with color matching AI.",
    stat: "40%",
    statLabel: "Faster Design",
    iconColor: "text-pink-600",
  },
  {
    name: "E-Commerce & Retail",
    slug: "ecommerce",
    icon: ShoppingCart,
    headline: "Personalized Commerce at Scale",
    description: "Drive conversion and loyalty with AI-powered personalization, pricing, and customer service.",
    details: "Generate SEO-optimized product descriptions for thousands of SKUs in hours. Deploy intelligent search that understands customer intent. Deliver hyper-personalized recommendations that increase AOV by 35%. Automate 70% of customer service with AI chatbots.",
    stat: "35%",
    statLabel: "Higher AOV",
    iconColor: "text-violet-600",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    icon: HomeIcon,
    headline: "AI for Modern Real Estate",
    description: "Engage customers 24/7, automate valuations, and accelerate transactions with intelligent automation.",
    details: "Deploy AI chatbots for instant property inquiries and lead qualification. Convert blueprints to BOQs automatically in hours instead of weeks. Achieve 95% valuation accuracy with machine learning. Monitor construction sites for safety compliance with computer vision.",
    stat: "3x",
    statLabel: "Lead Conversion",
    iconColor: "text-teal-600",
  },
  {
    name: "Marketing & Advertising",
    slug: "marketing",
    icon: Campaign,
    headline: "Creative AI for Marketing Teams",
    description: "Create content 10x faster, optimize campaigns, and drive measurable ROI with generative AI.",
    details: "Generate blog posts, social content, ad copy, and email campaigns with consistent brand voice. Create design assets from text prompts. Optimize campaign performance with AI-driven bidding and targeting. Increase organic traffic by 150% with SEO content optimization.",
    stat: "10x",
    statLabel: "Faster Content",
    iconColor: "text-red-600",
  },
  {
    name: "Legal, HR & Accounting",
    slug: "professional-services",
    icon: Gavel,
    headline: "AI for Professional Services",
    description: "Automate document analysis, streamline compliance, and accelerate hiring with intelligent automation.",
    details: "Review contracts 80% faster with AI-powered clause extraction and risk identification. Screen thousands of resumes in minutes with objective candidate matching. Automate GST compliance, invoice processing, and audit preparation. Reduce manual effort by 70% across all functions.",
    stat: "80%",
    statLabel: "Faster Review",
    iconColor: "text-slate-600",
  },
];

const capabilities = [
  {
    icon: Psychology,
    title: "Intelligent Document Processing",
    description: "Extract, classify, and process documents with 99%+ accuracy using advanced OCR and NLP",
  },
  {
    icon: SmartToy,
    title: "Conversational AI",
    description: "Deploy intelligent chatbots and virtual assistants for customer service and internal support",
  },
  {
    icon: AutoAwesome,
    title: "Process Automation",
    description: "Automate complex business workflows with AI-driven decision making and RPA integration",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trends, identify risks, and optimize operations with machine learning models",
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[95vh] flex items-center bg-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 w-full h-full">
            <Antigravity
              count={500}
              magnetRadius={100}
              ringRadius={15}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={0.5}
              lerpSpeed={0.5}
              color="#5227FF"
              autoAnimate
              particleVariance={5}
              rotationSpeed={1}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="sphere"
              fieldStrength={20}
              areaFactor={2}
              opacity={1}
            />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 py-16 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 pointer-events-auto"
              >
                <AutoAwesome sx={{ fontSize: 18 }} />
                Generative AI Solutions
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Industry-Specific{" "}
                <span className="text-primary">
                  AI Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Enterprise-grade Generative AI that automates processes, extracts insights,
                and delivers measurable ROI for your industry.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl pointer-events-auto"
                >
                  Schedule AI Consultation
                  <ArrowForward sx={{ fontSize: 20 }} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our AI Capabilities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cutting-edge AI technologies tailored for enterprise needs
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {capabilities.map((cap) => {
                const IconComponent = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="text-primary" sx={{ fontSize: 28 }} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Industries Section - Full-width Feature Sections */}
        <section id="industries">
          {/* Section Header */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Industry Solutions
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  AI Solutions for Every Industry
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Tailored AI implementations that address your industry&apos;s unique challenges
                </p>
              </motion.div>
            </div>
          </div>

          {/* Industry Feature Sections */}
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={industry.slug}
                className={`py-20 ${isEven ? 'bg-white' : 'bg-gray-50'} overflow-hidden`}
              >
                <div className="container mx-auto px-6 lg:px-12">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                      opacity: { duration: 0.6 }
                    }}
                    className="max-w-4xl mx-auto"
                  >
                    {/* Industry Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <IconComponent className={industry.iconColor} sx={{ fontSize: 40 }} />
                      <div>
                        <p className={`text-sm font-semibold uppercase tracking-wider ${industry.iconColor}`}>
                          {industry.name}
                        </p>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      {industry.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Details */}
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {industry.details}
                    </p>

                    {/* Stat + CTA Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                      {/* Key Stat */}
                      <div className="flex items-center gap-4">
                        <div className={`text-5xl font-bold ${industry.iconColor}`}>
                          {industry.stat}
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                          {industry.statLabel}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/ai-solutions/${industry.slug}`}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Explore {industry.name} AI
                        <ArrowForward sx={{ fontSize: 20 }} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Why Choose CannyMinds for AI?
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  With 20+ years of enterprise software experience, we bring deep domain
                  expertise to every AI implementation.
                </p>

                <div className="space-y-4">
                  {[
                    "Industry-specific AI models trained on real-world data",
                    "Seamless integration with existing enterprise systems",
                    "ISO-certified, GDPR-compliant AI solutions",
                    "Dedicated support and continuous model optimization",
                    "Proven ROI with measurable business outcomes",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle sx={{ fontSize: 16 }} className="text-white" />
                      </div>
                      <span className="text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "50+", label: "AI Projects Delivered" },
                  { value: "99%", label: "Accuracy Rate" },
                  { value: "40%", label: "Average Cost Reduction" },
                  { value: "24/7", label: "AI Support" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform with AI?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a free consultation to discover how our AI solutions can
                revolutionize your business operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowForward sx={{ fontSize: 20 }} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
