import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import FlowConnector from "@/components/FlowConnector";
import HowItWorks from "@/components/HowItWorks";
import BrandColors from "@/components/BrandColors";
import WhySkak from "@/components/WhySkak";
import Deliverables from "@/components/Deliverables";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <FlowConnector />
        <HowItWorks />
        <FlowConnector flip />
        <BrandColors />
        <WhySkak />
        <Deliverables />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
