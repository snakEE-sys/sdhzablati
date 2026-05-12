import { Navbar } from "@/app/components/Navbar";
import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Work } from "@/components/Work";
import Aktuality from "@/components/Aktuality";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Aktuality />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
