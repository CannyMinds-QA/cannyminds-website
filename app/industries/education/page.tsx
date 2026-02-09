import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import {
  AccountBalance,
  CheckCircle,
  Description,
  People,
  Scanner,
  Visibility,
  ArrowForward,
  Security,
  Gavel,
  Assessment,
} from "@mui/icons-material";

export const metadata: Metadata = {
  title: "Education & Training IT Solutions | CannyMinds",
  description: "FERPA-compliant digital solutions for banking, finance, and insurance. Secure document management, student records management, audit trails, and financial workflow automation.",
  alternates: {
    canonical: "https://www.cannymindstech.com/industries/education",
  },
};

export default function BankingFinanceIndustryPage() {
  // CONTENT WRITER: Replace all [PLACEHOLDER] text with actual content from the Content Writing Guide

  const challenges = [
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing SOX compliance, regulatory challenges, audit requirements]",
      icon: Gavel,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing secure document storage, customer data protection]",
      icon: Security,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing KYC/AML documentation, contract management]",
      icon: Assessment,
    },
    {
      title: "[Write Challenge Title]",
      description: "[Write 30-50 words describing loan/policy processing, workflow challenges]",
      icon: Description,
    },
  ];

  const solutions = [
    {
      title: "CannyECM for Banking & Finance",
      description: "[Write 50-80 words: How CannyECM helps banks/Educational Institutions manage loan documents, policies, contracts, KYC/AML documentation, SOX compliance, audit trails, etc.]",
      icon: Description,
      link: "/solutions/product/document-management",
    },
    {
      title: "CannyHR for Financial Services",
      description: "[Write 50-80 words: How CannyHR manages employee compliance, certifications, payroll for financial staff, background checks, regulatory training, etc.]",
      icon: People,
      link: "/solutions/product/hr-management",
    },
    {
      title: "CannyScan for Finance",
      description: "[Write 50-80 words: How CannyScan digitizes legacy financial records, loan applications, insurance policies, contracts, regulatory documentation, etc.]",
      icon: Scanner,
      link: "/solutions/product/scanning-solution",
    },
    {
      title: "CannyTrack for Financial Teams",
      description: "[Write 50-80 words: How CannyTrack monitors compliance activities, tracks client interactions, manages remote financial advisors, etc.]",
      icon: Visibility,
      link: "/solutions/product/tracking-system",
    },
  ];

  const benefits = [
    {
      title: "SOX Compliance",
      description: "[Write 30-50 words about Sarbanes-Oxley compliance, audit trails, financial controls]",
      icon: Gavel,
    },
    {
      title: "Data Security",
      description: "[Write 30-50 words about encryption, secure access, PCI DSS compliance, customer data protection]",
      icon: Security,
    },
    {
      title: "Audit Readiness",
      description: "[Write 30-50 words about automated audit trails, version control, compliance reporting]",
      icon: Assessment,
    },
    {
      title: "Cost Reduction",
      description: "[Write 30-50 words about reducing storage costs, manual processing, compliance penalties - include percentages if possible]",
      icon: CheckCircle,
    },
    {
      title: "KYC/AML Efficiency",
      description: "[Write 30-50 words about faster customer onboarding, automated compliance checks, document verification]",
      icon: Description,
    },
    {
      title: "Risk Management",
      description: "[Write 30-50 words about document security, access controls, compliance tracking]",
      icon: AccountBalance,
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* SECTION 1: HERO */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <AccountBalance className="text-indigo-700" sx={{ fontSize: 48 }} />
              </div>

              {/* CONTENT WRITER: Write H1 heading (6-10 words) */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                [Write Main Heading: Education & Training IT Solutions]
              </h1>

              {/* CONTENT WRITER: Write sub-heading (20-35 words) - Must include: pain point + solution + benefit */}
              <p className="text-xl text-gray-600 mb-8">
                [Write sub-heading: ISO-compliant digital solutions for educational institutions. Manage quality documents, automate production workflows, achieve compliance, and optimize workforce management.]
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center gap-2">
                    Request Demo
                    <ArrowForward fontSize="small" />
                  </button>
                </Link>
                <Link href="/#solutions">
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-indigo-700 transition-colors">
                    View Solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INDUSTRY OVERVIEW */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* CONTENT WRITER: Write H2 heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                [Write H2: Digital Transformation for Education & Training]
              </h2>

              {/* CONTENT WRITER: Write Paragraph 1 (100-150 words) - Cover current industry state, trends, why digital transformation needed */}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                [Write Paragraph 1: Discuss current state of manufacturing industry, Industry 4.0 trends, digital transformation adoption, competitive pressure, need for modern IT solutions]
              </p>

              {/* CONTENT WRITER: Write Paragraph 2 (100-150 words) - How CannyMinds helps, our approach, what makes us different */}
              <p className="text-lg text-gray-600 leading-relaxed">
                [Write Paragraph 2: Explain how CannyMinds helps manufacturers, our ISO-certified solutions, integration with existing systems, proven track record in manufacturing sector]
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY CHALLENGES */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            {/* CONTENT WRITER: Write H2 heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              [Write H2: Key Challenges in Education & Training]
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* CONTENT WRITER: Fill in 4-6 challenges from the Writing Guide */}
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                    <IconComponent className="text-indigo-700 mb-4" sx={{ fontSize: 40 }} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR SOLUTIONS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            {/* CONTENT WRITER: Write H2 heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              [Write H2: Our Solutions for Education & Training]
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* CONTENT WRITER: Fill in industry-specific descriptions for all 4 products */}
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <Link key={index} href={solution.link}>
                    <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:border-indigo-700 transition-colors h-full">
                      <IconComponent className="text-indigo-700 mb-4" sx={{ fontSize: 40 }} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <span className="text-indigo-700 font-semibold inline-flex items-center gap-2">
                        Learn More <ArrowForward fontSize="small" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: BENEFITS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            {/* CONTENT WRITER: Write H2 heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              [Write H2: Why educational institutions Choose CannyMinds]
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* CONTENT WRITER: Fill in 6 benefits from the Writing Guide */}
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200">
                    <IconComponent className="text-indigo-700 mx-auto mb-4" sx={{ fontSize: 48 }} />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: USE CASES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            {/* CONTENT WRITER: Write H2 heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              [Write H2: How educational institutions Use Our Solutions]
            </h2>

            <div className="max-w-5xl mx-auto space-y-8">
              {/* CONTENT WRITER: Add 3-4 use cases following the template in the Writing Guide */}

              {/* USE CASE 1 */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  [Use Case 1 Title: e.g., "Large Manufacturing Plant Achieves ISO Certification"]
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Company:</strong> [Write company type: e.g., "Mid-sized automotive parts manufacturer with 500 employees"]
                </p>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">
                    [Write 40-60 words describing the specific challenge this company faced]
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">
                    [Write 60-80 words explaining which CannyMinds products were used and how they solved the problem]
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>[Quantifiable result #1: e.g., "Achieved ISO 9001:2015 certification in 6 months"]</li>
                    <li>[Quantifiable result #2: e.g., "Reduced document retrieval time by 80%"]</li>
                    <li>[Quantifiable result #3: e.g., "$75,000 annual savings in storage costs"]</li>
                  </ul>
                </div>
              </div>

              {/* USE CASE 2 */}
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  [Use Case 2 Title]
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Company:</strong> [Write company type]
                </p>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">[Write 40-60 words]</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">[Write 60-80 words]</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>[Result 1]</li>
                    <li>[Result 2]</li>
                    <li>[Result 3]</li>
                  </ul>
                </div>
              </div>

              {/* CONTENT WRITER: Add Use Case 3 and optionally Use Case 4 using the same structure above */}
            </div>
          </div>
        </section>

        {/* SECTION 7: WHY CHOOSE CANNYMINDS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              {/* CONTENT WRITER: Write H2 heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                [Write H2: Why Education Leaders Trust CannyMinds]
              </h2>

              {/* CONTENT WRITER: Write 4-6 compelling reasons with specific details */}
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Industry Expertise:</strong>
                      <span className="text-gray-600"> [Write about years of experience in manufacturing, number of manufacturing clients, industry certifications]</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Proven Track Record:</strong>
                      <span className="text-gray-600"> [Write about 50+ clients, 20+ years, success metrics]</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">ISO Certified Solutions:</strong>
                      <span className="text-gray-600"> [Write about ISO 9001:2015 certification and compliance features]</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Flexible Deployment:</strong>
                      <span className="text-gray-600"> [Write about cloud, on-premise, hybrid options]</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-indigo-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">24/7 Global Support:</strong>
                      <span className="text-gray-600"> [Write about support coverage, offices in India/USA/Nigeria]</span>
                    </div>
                  </li>
                  {/* CONTENT WRITER: Add 1-2 more points if needed */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FINAL CTA */}
        <section className="py-20 bg-indigo-700 text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            {/* CONTENT WRITER: Write H2 heading */}
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              [Write H2: Ready to Transform Your Educational Operations?]
            </h2>

            {/* CONTENT WRITER: Write sub-heading (20-30 words) - Create urgency, highlight free consultation */}
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              [Write sub-heading: Schedule a consultation with our education IT specialists to discuss your specific needs and see how we can help.]
            </p>

            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Contact Us Today
                <ArrowForward fontSize="small" />
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

