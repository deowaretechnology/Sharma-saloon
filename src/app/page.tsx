import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import PopularServices from "@/components/PopularServices";
import ForHimHer from "@/components/ForHimHer";
import About from "@/components/About";

import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Blog from "@/components/Blog";
import QuickBenefits from "@/components/QuickBenefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <PopularServices />
        <ForHimHer />
        <About />
        <Gallery />
        <Testimonials />
        <FinalCTA />
        
      </main>
      <Footer />
    </>
  );
}
