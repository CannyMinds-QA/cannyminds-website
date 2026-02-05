
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroGenZ from "@/components/sections/HeroGenZ";
import ProductsNew from "@/components/sections/ProductsNew";
import AboutNew from "@/components/sections/AboutNew";
import SecurityCompliance from "@/components/sections/SecurityCompliance";
import SupportHighlights from "@/components/sections/SupportHighlights";
import ResourcesPreview from "@/components/sections/ResourcesPreview";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";



export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <HeroGenZ />
        </section>
        <section id="solutions">
          <ProductsNew />
        </section>
        <section id="about">
          <AboutNew />
        </section>
        <section id="security">
          <SecurityCompliance />
        </section>
        <section id="support">
          <SupportHighlights />
        </section>
        <section id="resources">
          <ResourcesPreview />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact-cta">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
