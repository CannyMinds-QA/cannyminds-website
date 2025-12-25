import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import SocialShare from '@/components/ui/SocialShare';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Business as BusinessIcon,
  EmojiEvents as AwardIcon,
  Public as GlobalIcon,
  Groups as TeamIcon,
  TrendingUp as GrowthIcon,
  Security as SecurityIcon,
  Psychology as InnovationIcon,
  HandshakeOutlined as PartnershipIcon,
  VerifiedUser as CertifiedIcon,
  Speed as PerformanceIcon,
  SupportAgent as SupportIcon,
  LocalShipping as DeliveryIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'About Us - CannyMinds Technology Solutions | Digital Transformation Leaders',
  description: 'Learn about CannyMinds Technology Solutions - ISO certified IT company founded in 2003. Meet our leadership team and discover our mission to deliver world-class digital transformation services across India, USA, Nigeria, and UAE.',
  keywords: [
    'about CannyMinds',
    'IT company India',
    'digital transformation company',
    'enterprise software development',
    'CannyMinds leadership team',
    'ISO certified IT company',
    'technology solutions provider',
  ],
  openGraph: {
    title: 'About Us - CannyMinds Technology Solutions',
    description: 'ISO certified IT company with 20+ years of experience in digital transformation, AI automation, and enterprise software development.',
    url: 'https://www.cannymindstech.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const leaders = [
    {
      name: "Udayakumar Murugan",
      title: "Digital Transformation Specialist",
      bio: "Udayakumar leads CannyMinds' digital transformation initiatives, helping businesses modernize their operations through innovative technology solutions. With extensive experience in enterprise architecture and cloud migration, he ensures clients achieve measurable ROI from their digital investments.",
      image: "/team/udayakumar-murugan.jpg",
      placeholder: "UM",
      color: "blue",
    },
    {
      name: "Christopher Arulandu",
      title: "Chief Technology Officer",
      bio: "As CTO, Christopher oversees all technical innovation and product development at CannyMinds Technology Solutions. He leads the engineering teams responsible for CannyDocs, CannyHR, CannyScan, and CannyTrack, ensuring world-class quality and cutting-edge features.",
      image: "/team/christopher-arulandu.jpg",
      placeholder: "CA",
      color: "green",
    },
    {
      name: "Mahesh Kumar",
      title: "Vice President Operations",
      bio: "Mahesh ensures operational excellence across all CannyMinds offices and client projects. He manages service delivery, client success, and operational scalability, maintaining the highest standards of quality and customer satisfaction.",
      image: "/team/mahesh-kumar.jpg",
      placeholder: "MK",
      color: "purple",
    },
    {
      name: "Parthiban K",
      title: "Vice President at CannyMinds Technology Solutions",
      bio: "Parthiban drives business growth and strategic partnerships for CannyMinds. He leads client acquisition, market expansion, and relationship management, positioning CannyMinds as a trusted technology partner across global markets.",
      image: "/team/parthiban-k.jpg",
      placeholder: "PK",
      color: "orange",
    },
    {
      name: "Bhaskaran Gopalakrishnan",
      title: "Director - Strategy & Business Development",
      bio: "Bhaskaran shapes CannyMinds' long-term strategy and business development initiatives. He identifies new market opportunities, guides product roadmaps, and ensures the company stays ahead of industry trends in digital transformation and AI automation.",
      image: "/team/bhaskaran-gopalakrishnan.jpg",
      placeholder: "BG",
      color: "red",
    },
  ];

  const milestones = [
    { year: "2003", event: "CannyMinds Technology Solutions Founded" },
    { year: "2008", event: "Expanded to USA Market" },
    { year: "2012", event: "ISO 9001:2015 Certification Achieved" },
    { year: "2015", event: "Launched CannyDocs Document Management System" },
    { year: "2017", event: "Opened Offices in Nigeria and UAE" },
    { year: "2019", event: "ISO 27001 Security Certification" },
    { year: "2021", event: "Launched CannyHR and CannyTrack Products" },
    { year: "2023", event: "Introduced AI-Powered Automation Solutions" },
    { year: "2025", event: "Serving 10+ Organizations Across 4 Countries" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We continuously invest in research and development to deliver cutting-edge solutions that solve real business challenges.",
      icon: <InnovationIcon sx={{ fontSize: 40 }} />,
      color: "blue",
    },
    {
      title: "Client Success",
      description: "Our clients' success is our success. We go beyond delivery to ensure measurable business outcomes and long-term partnerships.",
      icon: <PartnershipIcon sx={{ fontSize: 40 }} />,
      color: "green",
    },
    {
      title: "Quality & Security",
      description: "ISO 27001 and ISO 9001:2015 certified processes ensure enterprise-grade security and world-class quality in everything we do.",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      color: "purple",
    },
    {
      title: "Transparency",
      description: "Honest communication, clear pricing, and realistic timelines. We build trust through transparency in all our engagements.",
      icon: <CertifiedIcon sx={{ fontSize: 40 }} />,
      color: "orange",
    },
  ];

  const stats = [
    { value: "20+", label: "Years of Excellence", icon: <AwardIcon sx={{ fontSize: 32 }} /> },
    { value: "10+", label: "Happy Clients", icon: <BusinessIcon sx={{ fontSize: 32 }} /> },
    { value: "4", label: "Global Offices", icon: <GlobalIcon sx={{ fontSize: 32 }} /> },
    { value: "50+", label: "Team Members", icon: <TeamIcon sx={{ fontSize: 32 }} /> },
    { value: "4.9/5.0", label: "Client Rating", icon: <PerformanceIcon sx={{ fontSize: 32 }} /> },
    { value: "24/7", label: "Support Available", icon: <SupportIcon sx={{ fontSize: 32 }} /> },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      year: "2019",
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      year: "2012",
    },
  ];

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 sm:pt-20">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About CannyMinds Technology Solutions
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Empowering businesses since 2003 with innovative digital transformation, AI automation, and enterprise software solutions.
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                  <div className="text-2xl sm:text-3xl font-bold">20+</div>
                  <div className="text-xs sm:text-sm text-blue-100">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                  <div className="text-2xl sm:text-3xl font-bold">10+</div>
                  <div className="text-xs sm:text-sm text-blue-100">Global Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                  <div className="text-2xl sm:text-3xl font-bold">4</div>
                  <div className="text-xs sm:text-sm text-blue-100">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 sm:px-6 py-3">
                  <div className="text-2xl sm:text-3xl font-bold">ISO</div>
                  <div className="text-xs sm:text-sm text-blue-100">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded in <strong>2003</strong>, CannyMinds Technology Solutions began with a simple mission: to help businesses harness the power of technology to achieve their goals. What started as a small IT services company in Chennai, India, has grown into a global technology solutions provider with offices across four countries.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Over the past two decades, we've evolved from traditional IT consulting to become a leader in <strong>digital transformation, AI-powered automation, and enterprise software development</strong>. Our flagship products—CannyDocs, CannyHR, CannyScan, and CannyTrack—are trusted by organizations worldwide to streamline operations, enhance productivity, and secure sensitive data.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Today, CannyMinds serves clients across <strong>India, USA, Nigeria, and UAE</strong>, delivering world-class solutions backed by ISO 27001 and ISO 9001:2015 certifications. Our team of 50+ technology experts works tirelessly to ensure every client achieves measurable business outcomes from their technology investments.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  As we look to the future, we remain committed to innovation, client success, and excellence in everything we do. We're not just building software—we're building lasting partnerships that transform businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              CannyMinds by the Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 text-center hover:border-primary transition-all">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-50 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
              Meet Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Five visionary leaders driving CannyMinds' mission to deliver world-class digital transformation solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {leaders.map((leader, idx) => (
                <div key={idx} className={`bg-gradient-to-br from-${leader.color}-50 to-white border-2 border-${leader.color}-200 rounded-xl p-6 sm:p-8 hover:border-${leader.color}-600 transition-all`}>
                  {/* Profile Image Placeholder */}
                  <div className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-${leader.color}-400 to-${leader.color}-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl sm:text-4xl font-bold shadow-lg`}>
                    {leader.placeholder}
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

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, idx) => (
                <div key={idx} className={`bg-white border-2 border-${value.color}-200 rounded-xl p-6 sm:p-8 hover:border-${value.color}-600 transition-all`}>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-${value.color}-100 rounded-lg flex items-center justify-center mb-6 text-${value.color}-600`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Our Journey
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-all">
                      <div className="flex items-center gap-3">
                        <GrowthIcon sx={{ fontSize: 24, color: '#3170b5' }} />
                        <h3 className="text-lg font-bold text-secondary">{milestone.event}</h3>
                      </div>
                    </div>
                  </div>
                ))}
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

        {/* Why Choose CannyMinds */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Why Choose CannyMinds?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Proven Track Record",
                  description: "20+ years of delivering successful digital transformation projects across industries and geographies.",
                  icon: <AwardIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Expert Team",
                  description: "50+ certified professionals with deep expertise in cloud, AI, automation, and enterprise software development.",
                  icon: <TeamIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Global Presence",
                  description: "Four offices across India, USA, Nigeria, and UAE ensure local support with global best practices.",
                  icon: <GlobalIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "Enterprise-Grade Security",
                  description: "ISO 27001 certified security practices protect your sensitive data and intellectual property.",
                  icon: <SecurityIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock support for enterprise clients ensures your systems are always running smoothly.",
                  icon: <SupportIcon sx={{ fontSize: 40 }} />,
                },
                {
                  title: "On-Time Delivery",
                  description: "Agile methodologies and proven project management ensure we deliver on schedule and on budget.",
                  icon: <DeliveryIcon sx={{ fontSize: 40 }} />,
                },
              ].map((reason, idx) => (
                <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-all">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{reason.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-primary-800 rounded-xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 10+ organizations worldwide that trust CannyMinds for their digital transformation journey. Let's build something great together.
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
                  title="About CannyMinds Technology Solutions - ISO Certified IT Company"
                  description="Learn about CannyMinds - 20+ years of excellence in digital transformation, AI automation, and enterprise software development. ISO certified with global offices."
                />
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
