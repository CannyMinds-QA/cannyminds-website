import type { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import SocialShare from '@/components/ui/SocialShare';
import ContactForm from '@/components/contact/ContactForm';
import Link from 'next/link';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Contact Us - CannyMinds Technology Solutions | Get in Touch',
  description: 'Contact CannyMinds Technology Solutions for digital transformation, AI automation, and enterprise software services. Offices in India, USA, Nigeria, and UAE. 24/7 support available.',
  keywords: [
    'contact CannyMinds',
    'CannyMinds contact',
    'IT support India',
    'digital transformation contact',
    'enterprise software support',
    'CannyMinds offices',
    'technology solutions contact',
  ],
  openGraph: {
    title: 'Contact Us - CannyMinds Technology Solutions',
    description: 'Get in touch with CannyMinds for digital transformation and enterprise software solutions. Global offices with 24/7 support.',
    url: 'https://www.cannymindstech.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const offices = [
    {
      country: "India (Headquarters)",
      company: "CannyMinds Technology Solutions Private Limited",
      city: "Chennai",
      address: "No 88 Ram Nagar 6th St\nVelachery, Chennai-600042\nTamil Nadu, India",
      phone: "+91 93618 01926",
      phone2: "044-35100366",
      email: "info@cannymindstech.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM IST",
      color: "blue",
    },
    {
      country: "United States",
      company: "CannyMinds Technology Solutions LLC",
      city: "McKinney, TX",
      address: "8751 Collin McKinney Pkwy\nSuite 1102 #525\nMcKinney, TX 75070\nUnited States",
      phone: "+1 (214) 727-0422",
      phone2: "+1 (214) 272-0230",
      email: "sv@cannymindstech.com",
      email2: "info@cannymindstech.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM CST",
      color: "green",
    },
    {
      country: "Nigeria",
      company: "USP Soft Solutions Nigeria Limited",
      city: "Lagos",
      address: "No:16, Adeola Adeleye Street\nOff Coker Road, Illupeju\nLagos, Nigeria",
      phone: "+234 708 632 3687",
      phone2: "+234 701 052 2747",
      email: "info@uspsoftsolutions.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM WAT",
      color: "purple",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get in Touch with CannyMinds
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Have questions about our solutions or services? We're here to help you transform your business with innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact Form */}
              <ContactForm />

              {/* Quick Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-secondary mb-6">Quick Contact</h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <EmailIcon sx={{ fontSize: 24, color: '#3170b5' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary mb-1">Email Us</h3>
                        <a href="mailto:info@cannymindstech.com" className="text-primary hover:underline">
                          info@cannymindstech.com
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhoneIcon sx={{ fontSize: 24, color: '#22c55e' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary mb-1">Call Us</h3>
                        <a href="tel:+919361801926" className="text-primary hover:underline">
                          +91 93618 01926
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Mon-Sat: 9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <LocationIcon sx={{ fontSize: 24, color: '#9333ea' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-secondary mb-1">Visit Us</h3>
                        <p className="text-gray-700">Chennai, Tamil Nadu, India</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Schedule an appointment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/cannyminds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#0a66c2] hover:bg-[#004182] rounded-lg flex items-center justify-center text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://twitter.com/cannyminds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center text-white transition-all"
                      aria-label="Twitter"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      href="https://www.facebook.com/cannyminds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#1877f2] hover:bg-[#0c63d4] rounded-lg flex items-center justify-center text-white transition-all"
                      aria-label="Facebook"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://www.instagram.com/cannyminds"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center justify-center text-white transition-all"
                      aria-label="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <ScheduleIcon sx={{ fontSize: 32, color: '#ea580c' }} />
                    <h3 className="text-2xl font-bold text-secondary">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-semibold">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday:</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Times shown for India (IST). We provide 24/7 support for enterprise clients.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Our Global Offices
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, idx) => (
                <div key={idx} className={`bg-white border-2 border-${office.color}-200 rounded-xl p-6 hover:border-${office.color}-600 transition-all`}>
                  <div className={`w-12 h-12 bg-${office.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <LocationIcon sx={{ fontSize: 24 }} className={`text-${office.color}-600`} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-1">{office.country}</h3>
                  <p className="text-xs font-semibold text-gray-500 mb-3">{office.company}</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Address:</p>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">{office.address}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Phone:</p>
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-primary hover:underline block">
                        {office.phone}
                      </a>
                      {office.phone2 && (
                        <a href={`tel:${office.phone2.replace(/\s/g, '')}`} className="text-primary hover:underline block">
                          {office.phone2}
                        </a>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Email:</p>
                      <a href={`mailto:${office.email}`} className="text-primary hover:underline break-all block">
                        {office.email}
                      </a>
                      {office.email2 && (
                        <a href={`mailto:${office.email2}`} className="text-primary hover:underline break-all block">
                          {office.email2}
                        </a>
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Hours:</p>
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 10+ organizations worldwide that trust CannyMinds for their digital transformation journey.
                Let's discuss how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919361801926"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <PhoneIcon sx={{ fontSize: 20 }} />
                  Call Now
                </a>
                <a
                  href="mailto:info@cannymindstech.com"
                  className="bg-primary text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <EmailIcon sx={{ fontSize: 20 }} />
                  Email Us
                </a>
              </div>

              {/* Social Share */}
              <div className="mt-8 flex justify-center">
                <SocialShare
                  title="Contact CannyMinds Technology Solutions - Get in Touch Today"
                  description="Contact CannyMinds for digital transformation, AI automation, and enterprise software services. Offices in India, USA, and Nigeria. 24/7 support available."
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
