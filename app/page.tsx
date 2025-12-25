import type { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import ProductsUpdated from "@/components/sections/ProductsUpdated";
import AboutUpdated from "@/components/sections/AboutUpdated";
import GlobalOfficesUpdated from "@/components/sections/GlobalOfficesUpdated";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "CannyMinds Technology Solutions - Enterprise Software & AI Solutions",
  description: "Leading IT solutions provider with 20+ years of experience in digital transformation, AI automation, and enterprise software development. ISO certified with offices in India, USA, and Nigeria. Serving 500+ clients worldwide.",
  keywords: [
    "IT solutions India",
    "digital transformation",
    "AI automation",
    "enterprise software development",
    "document management software",
    "HR management system",
    "scanning solutions",
    "tracking systems",
    "business process automation",
    "ISO certified IT company",
    "CannyMinds",
    "CannyDocs",
    "CannyHR",
    "CannyScan",
    "CannyTrack",
  ].join(", "),
  openGraph: {
    title: "CannyMinds Technology Solutions - Enterprise Software & AI Solutions",
    description: "Leading IT solutions provider with 20+ years of experience in digital transformation, AI automation, and enterprise software development. ISO certified.",
    type: "website",
    url: "https://www.cannymindstech.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CannyMinds Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CannyMinds Technology Solutions - Enterprise Software & AI Solutions",
    description: "Leading IT solutions provider with 20+ years of experience in digital transformation, AI automation, and enterprise software development.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.cannymindstech.com",
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="solutions">
          <ProductsUpdated />
        </section>
        <section id="about">
          <AboutUpdated />
        </section>
        <section id="offices">
          <GlobalOfficesUpdated />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
