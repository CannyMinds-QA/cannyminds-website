import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import {
  RocketLaunch as RocketLaunchIcon,
  SmartToy as SmartToyIcon,
  Code as CodeIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Settings as SettingsIcon,
  Folder as FolderIcon,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "IT Consulting Services | CannyMinds Technology",
  description: "Expert IT consulting: digital transformation, AI automation, custom software development, and business process services. Transform your business today.",
  keywords: [
    "IT consulting services",
    "digital transformation",
    "AI automation services",
    "custom software development",
    "digital marketing",
    "business process services",
    "record management",
    "CannyMinds services",
  ].join(", "),
  openGraph: {
    title: "IT Consulting Services | CannyMinds Technology",
    description: "Expert IT consulting: digital transformation, AI automation, custom software development, and business process services. Transform your business today.",
    url: "https://cannyminds-website.vercel.app/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyMinds IT Consulting Services",
      },
    ],
  },
  alternates: {
    canonical: "https://cannyminds-website.vercel.app/services",
  },
};

const services = [
  {
    title: "Digital Transformation",
    description: "End-to-end business digitization and process automation solutions",
    icon: RocketLaunchIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation powered by artificial intelligence and machine learning",
    icon: SmartToyIcon,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Software Development",
    description: "Custom enterprise software tailored to your business requirements",
    icon: CodeIcon,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to enhance your online presence and reach",
    icon: PhoneAndroidIcon,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Business Process Services",
    description: "Streamline workflows with our expert BPS consulting",
    icon: SettingsIcon,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Record Management",
    description: "Secure physical and digital record management solutions",
    icon: FolderIcon,
    color: "from-teal-500 to-green-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm border border-white/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Coming Soon
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive IT Consulting Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8">
                We're crafting detailed service pages to showcase how we can transform your business.
                Meanwhile, explore our core service offerings below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-all shadow-lg"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
                >
                  View Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Our Service Offerings
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert services to accelerate your digital transformation journey.
                Detailed service pages with case studies and testimonials launching soon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent sx={{ fontSize: 32, color: 'white' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-primary font-semibold text-sm">
                        More details coming soon
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Need Service Information Now?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                While we're building our comprehensive service pages, our team is ready to discuss
                how we can help transform your business with our 20+ years of expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="tel:+918296164343"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary-50 transition-all"
                >
                  Call Us: +91 82961 64343
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
                Why Choose CannyMinds?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">20+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Years of Experience</h3>
                    <p className="text-gray-600">
                      Two decades of delivering cutting-edge IT solutions across industries
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">500+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Satisfied Clients</h3>
                    <p className="text-gray-600">
                      Trusted by businesses worldwide for exceptional service delivery
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">ISO</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Certified Quality</h3>
                    <p className="text-gray-600">
                      ISO 27001 certified ensuring the highest standards of security and quality
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Global Offices</h3>
                    <p className="text-gray-600">
                      Serving clients across India, USA, Nigeria, and UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
