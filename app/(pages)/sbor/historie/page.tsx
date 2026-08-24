import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/features/history/components/Timeline";
import { historyEvents, historyStats } from "@/features/history/data";

export const metadata: Metadata = {
  title: "Historie | SDH Bohumín – Záblatí",
  description:
    "Historie sboru dobrovolných hasičů Bohumín – Záblatí od roku 1925. Klíčové milníky, tradice a rozvoj jednotky.",
};

export default function HistoriePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 pt-24 md:pt-28 lg:pt-32 pb-4 md:pb-8">
        {/* Intro */}
        <section className="overflow-hidden py-12 md:py-18 lg:py-24 bg-white rounded-3xl m-2 md:m-4 shadow-sm border border-black/4 relative">
          <div
            className="pointer-events-none absolute -left-12 top-0 h-48 w-48 rounded-full bg-custom-blue/60 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-custom-red/8 blur-3xl"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
                  Historie
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-balance">
                  Téměř století ochrany a pomoci
                </h1>
                <p className="text-custom-light-grey font-light text-base md:text-lg leading-relaxed mb-4 max-w-prose">
                  Příběh našeho sboru začal v roce 1925. Od ruční stříkačky a
                  dvaceti odvážných mužů jsme došli k moderní technice, práci s
                  mládeží a kulturnímu životu obce.
                </p>
                <p className="text-custom-light-grey font-light text-base leading-relaxed max-w-prose">
                  Technika se měnila, ale odhodlání pomáhat sousedům v nouzi
                  zůstává stejné — dodnes.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {historyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col min-w-[120px] gap-1 rounded-2xl bg-custom-pink/60 border border-black/6 px-5 py-4"
                    >
                      <span className="text-2xl md:text-3xl font-bold text-custom-medium-grey tabular-nums">
                        {stat.value}
                      </span>
                      <span className="text-custom-light-grey font-light text-sm">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/landing.jpeg"
                  alt="Historie hasičského sboru"
                  width={900}
                  height={560}
                  className="rounded-2xl w-full object-cover h-[260px] md:h-[380px] shadow-lg ring-1 ring-black/8"
                  priority
                />
                <div className="absolute -bottom-4 -right-2 md:-right-4 rounded-2xl bg-custom-dark-grey text-white px-5 py-4 shadow-lg max-w-[200px]">
                  <p className="text-xs uppercase tracking-wide text-white/60 mb-1">
                    Od založení
                  </p>
                  <p className="font-big-heading text-3xl text-custom-red leading-none">
                    1925
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          id="casova-osa"
          className="relative overflow-hidden py-12 md:py-18 lg:py-24 bg-custom-pink rounded-3xl m-2 md:m-4 mt-3 md:mt-4"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 0%, hsl(0 92% 58% / 0.08), transparent 40%),
                radial-gradient(circle at 0% 100%, hsl(240 37% 90% / 0.7), transparent 50%)`,
            }}
            aria-hidden
          />
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-custom-medium-grey mb-3">
                Klíčové milníky
              </h2>
              <p className="text-custom-light-grey font-light text-base leading-relaxed">
                Od první stříkačky po moderní zbrojnici — procházka
                nejdůležitějšími okamžiky naší historie.
              </p>
            </div>
            <Timeline events={historyEvents} />
          </div>
        </section>

        {/* CTA */}
        <section className="overflow-hidden py-12 md:py-16 bg-custom-dark-grey rounded-3xl m-2 md:m-4 mt-3 md:mt-4">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl md:text-3xl font-medium text-white">
                  Chcete být součástí další kapitoly?
                </h2>
                <p className="text-white/70 font-light text-base leading-relaxed">
                  Navazujeme na tradici generací hasičů. Přidejte se k nám nebo
                  nás kontaktujte — rádi vám povíme víc o sboru i jeho historii.
                </p>
              </div>
              <Button
                asChild
                variant="whiteCapsule"
                className="h-12 xl:h-14 font-medium text-base px-6 group flex items-center justify-center gap-2 shrink-0"
              >
                <Link href="/kontakt">
                  <span>Kontaktujte nás</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
