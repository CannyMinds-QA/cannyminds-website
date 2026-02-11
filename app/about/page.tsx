import SocialShare from '@/components/ui/SocialShare';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Business as BusinessIcon,
  Public as GlobalIcon,
  Groups as TeamIcon,
  Security as SecurityIcon,
  VerifiedUser as CertifiedIcon,
  ArrowForward as ArrowIcon,
  Visibility as VisionIcon,
  Flag as MissionIcon,
  Handshake as IntegrityIcon,
  Gavel as ComplianceIcon,
  WorkspacePremium as QualityIcon,
  Lock as SecurityValueIcon,
  Favorite as CustomerIcon,
  TrendingUp as ImprovementIcon,
} from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'About CannyMinds | Information Management & Digitization Solutions',
  description: 'CannyMinds is a trusted provider of information management and digitization solutions. ISO 9001, ISO 15489, ISO 27001 & FDA 21 CFR Part 11 compliant.',
  keywords: [
    'about CannyMinds',
    'information management solutions',
    'digitization services',
    'enterprise content management',
    'physical record management',
    'compliance information governance',
    'ISO certified company',
    'pharmaceutical digitization',
  ],
  openGraph: {
    title: 'About CannyMinds | Information Management & Digitization Solutions',
    description: 'CannyMinds is a trusted provider of information management and digitization solutions for regulated industries.',
    url: 'https://cannyminds-website.vercel.app/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About CannyMinds Technology Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://cannyminds-website.vercel.app/about',
  },
};

export default function AboutPage() {
  const leaders = [
    {
      name: "Udayakumar Murugan",
      title: "Digital Transformation Specialist",
      bio: "Udayakumar leads CannyMinds' digital transformation initiatives, helping businesses modernize their operations through innovative technology solutions. With extensive experience in enterprise architecture and cloud migration, he ensures clients achieve measurable ROI from their digital investments.",
      image: "/images/about/Udayakumar-Murugan-Director.png",
      placeholder: "UM",
      color: "blue",
    },
    {
      name: "Christopher Arulandu",
      title: "Chief Technology Officer",
      bio: "As CTO, Christopher oversees all technical innovation and product development at CannyMinds Technology Solutions. He leads the engineering teams responsible for CannyECM, CannyHR, CannyScan, and CannyTrack, ensuring world-class quality and cutting-edge features.",
      image: "/images/about/Christopher-Director.png",
      placeholder: "CA",
      color: "green",
    },
    {
      name: "Mahesh Kumar",
      title: "Vice President Operations",
      bio: "Mahesh ensures operational excellence across all CannyMinds offices and client projects. He manages service delivery, client success, and operational scalability, maintaining the highest standards of quality and customer satisfaction.",
      image: "/images/about/Maheshkumar-Director.png",
      placeholder: "MK",
      color: "purple",
    },
    {
      name: "Parthiban K",
      title: "Vice President at CannyMinds Technology Solutions",
      bio: "Parthiban drives business growth and strategic partnerships for CannyMinds. He leads client acquisition, market expansion, and relationship management, positioning CannyMinds as a trusted technology partner across global markets.",
      image: "/images/about/Parthiban-Director.png",
      placeholder: "PK",
      color: "orange",
    },
    {
      name: "Bhaskaran Gopalakrishnan",
      title: "Director - Strategy & Business Development",
      bio: "Bhaskaran shapes CannyMinds' long-term strategy and business development initiatives. He identifies new market opportunities, guides product roadmaps, and ensures the company stays ahead of industry trends in digital transformation and AI automation.",
      image: "/images/about/Bhaskaran-Gopalakrishnan-Director.png",
      placeholder: "BG",
      color: "red",
    },
  ];

  const coreValues = [
    {
      title: "Integrity & Trust",
      description: "Ethical, transparent, and confidential in all our dealings.",
      icon: <IntegrityIcon sx={{ fontSize: 36 }} />,
      color: "blue",
    },
    {
      title: "Compliance First",
      description: "Built to meet regulatory standards across industries.",
      icon: <ComplianceIcon sx={{ fontSize: 36 }} />,
      color: "green",
    },
    {
      title: "Quality Excellence",
      description: "Accuracy through defined processes and rigorous controls.",
      icon: <QualityIcon sx={{ fontSize: 36 }} />,
      color: "purple",
    },
    {
      title: "Information Security",
      description: "Data protected end-to-end with enterprise-grade measures.",
      icon: <SecurityValueIcon sx={{ fontSize: 36 }} />,
      color: "orange",
    },
    {
      title: "Customer Commitment",
      description: "Focused on long-term success and lasting partnerships.",
      icon: <CustomerIcon sx={{ fontSize: 36 }} />,
      color: "red",
    },
    {
      title: "Continuous Improvement",
      description: "Innovating for better outcomes and evolving solutions.",
      icon: <ImprovementIcon sx={{ fontSize: 36 }} />,
      color: "teal",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 sm:pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About CannyMinds
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Trusted Provider of Information Management & Digitization Solutions
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                <div className="text-lg sm:text-xl font-bold">ISO 9001</div>
                <div className="text-xs sm:text-sm text-blue-100">Quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                <div className="text-lg sm:text-xl font-bold">ISO 15489</div>
                <div className="text-xs sm:text-sm text-blue-100">Records</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                <div className="text-lg sm:text-xl font-bold">ISO 27001</div>
                <div className="text-xs sm:text-sm text-blue-100">Security</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                <div className="text-lg sm:text-xl font-bold">FDA 21 CFR</div>
                <div className="text-xs sm:text-sm text-blue-100">Part 11</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              About Us
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                CannyMinds is a trusted provider of information management and digitization solutions, helping organizations securely manage, preserve, and transform their critical records across their lifecycle.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We specialize in <strong>Physical Record Management, Onsite & Offsite Digitization, Enterprise Content Management (ECM), and Compliance-driven Information Governance</strong>—with a strong focus on regulated industries such as Pharmaceuticals, Life Sciences, Healthcare, and Manufacturing.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At CannyMinds, we combine process expertise, advanced technology, and strict quality controls to ensure data accuracy, security, and regulatory compliance. Our solutions are designed to align with global standards including <strong>ISO 9001, ISO 15489, ISO 27001, and FDA 21 CFR Part 11</strong>, enabling organizations to confidently meet audit, retention, and compliance requirements.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                With a customer-centric approach and deep domain knowledge, we help businesses reduce operational risk, improve accessibility, and unlock the value of their information assets—while maintaining confidentiality, integrity, and availability at every stage.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                CannyMinds partners with organizations to build secure, scalable, and future-ready information ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white border-2 border-primary-200 rounded-xl p-8 hover:border-primary transition-all">
              <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary">
                <VisionIcon sx={{ fontSize: 40 }} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a globally trusted leader in secure and compliant information management, enabling organizations to transform their records into reliable, accessible, and future-ready digital assets.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-8 hover:border-green-600 transition-all">
              <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <MissionIcon sx={{ fontSize: 40 }} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver end-to-end information management and digitization solutions that ensure data integrity, security, and regulatory compliance, while helping organizations improve operational efficiency, reduce risk, and confidently meet audit and governance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-primary hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
            Meet Our Leadership Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Five visionary leaders driving CannyMinds' mission to deliver world-class information management solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${leader.color}-50 to-white border-2 border-${leader.color}-200 rounded-xl p-6 sm:p-8 hover:border-${leader.color}-600 transition-all`}>
                {/* Profile Image Placeholder */}
                <div className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-${leader.color}-400 to-${leader.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl sm:text-4xl font-bold shadow-lg overflow-hidden relative border-4 border-white`}>
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    leader.placeholder
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 text-center">
                  {leader.name}
                </h3>
                <p className={`text-xs sm:text-sm font-semibold text-${leader.color}-600 mb-4 text-center`}>
                  {leader.title}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Awards & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-all flex flex-col items-center text-center">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/awards/Promising-DMS-award.png"
                  alt="Promising DMS Award"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary">Promising DMS Award</h3>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-all flex flex-col items-center text-center">
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/awards/Emerging-company-award-2020.png"
                  alt="Indian Achievers Award 2020"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary">Indian Achievers Award 2020 for Emerging Company Award</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Certifications & Compliance
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
            <div className="bg-white border-2 border-primary-200 rounded-xl p-6 hover:border-primary transition-all flex flex-col items-center text-center">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src="/certifications/iso-9001-2015.png"
                  alt="ISO 9001:2015 Certificate"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:border-green-600 transition-all flex flex-col items-center text-center">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src="/certifications/iso-15489-2016.png"
                  alt="ISO 15489:2016 Certificate"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">ISO 15489:2016</h3>
              <p className="text-sm text-gray-600">Records Management</p>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-600 transition-all flex flex-col items-center text-center">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src="/certifications/iso-22716-2007.jpg"
                  alt="ISO 22716:2007 Certificate"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">ISO 22716:2007</h3>
              <p className="text-sm text-gray-600">GMP Cosmetics</p>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-xl p-6 hover:border-orange-600 transition-all flex flex-col items-center text-center">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src="/certifications/fda-21-cfr-part-11.png"
                  alt="FDA 21 CFR Part 11 Compliant"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">FDA 21 CFR Part 11</h3>
              <p className="text-sm text-gray-600">Compliance</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed text-center">
              Our ISO certifications demonstrate our commitment to <strong>information security, quality management, and operational excellence</strong>. Every project we undertake follows rigorous processes to ensure compliance, data protection, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-primary-800 rounded-xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with CannyMinds
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build secure, scalable, and future-ready information ecosystems with our compliant information management and digitization solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                Contact Us Today
                <ArrowIcon sx={{ fontSize: 20 }} />
              </Link>
              <Link
                href="/#products"
                className="bg-primary-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 transition-all inline-flex items-center justify-center gap-2"
              >
                Explore Our Solutions
                <BusinessIcon sx={{ fontSize: 20 }} />
              </Link>
            </div>

            {/* Social Share */}
            <div className="mt-8 flex justify-center">
              <SocialShare
                title="About CannyMinds - Information Management & Digitization Solutions"
                description="CannyMinds is a trusted provider of information management and digitization solutions. ISO 9001, ISO 15489, ISO 27001 & FDA 21 CFR Part 11 compliant."
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
