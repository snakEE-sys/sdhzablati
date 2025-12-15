import { Navbar } from "@/app/components/Navbar";
import Hero from "@/components/Hero";
import { Cinnost } from "@/components/Cinnost";
import { Team } from "@/components/Team";
import { Aktuality } from "@/components/Aktuality";
import { Cta } from "@/components/Cta";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />
          {/* About Section */}
          <About />
          {/* Cinnost Section */}
          <Cinnost />
          {/* Team Section */}
          <Team />
          {/* Aktuality Section */}
          {<Aktuality />}
          {/* CTA Section */}
          <Cta />
          {/* Contact Section */}
          <Contact />
        </main>
      </div>
    </>
  );
}
