import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import HowItWorks from "@/components/HowItWorks";
import WhySkak from "@/components/WhySkak";
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
        <HowItWorks />
        <WhySkak />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
