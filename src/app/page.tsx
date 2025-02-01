import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Token } from "@/components/Token";
import { FAQs } from "@/components/FAQs";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Roadmap } from "@/components/Roadmap";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";

// import { LogoTicker } from "@/components/LogoTicker";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <LogoTicker/> */}
      <Partners/>
      <About/>
      <Features />
      <Roadmap/>
      <Team/>
      <Token />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
