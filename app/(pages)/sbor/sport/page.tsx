import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompetitionBlock } from "@/features/sport/components/CompetitionBlock";
import { detskaSoutez, memorialBlahovec } from "@/features/sport/data";

export const metadata: Metadata = {
  title: "Sport | SDH Bohumín – Záblatí",
  description:
    "Hasičský sport v Bohumíně – Záblatí: Dětská hasičská soutěž a Memoriál Lukáše Blahovce. Výsledky a informace o soutěžích.",
};

export default function SportPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 pt-24 md:pt-28 lg:pt-32 pb-4 md:pb-8">
        {/* Intro */}
        <section className="overflow-hidden py-12 md:py-18 lg:py-24 bg-white rounded-3xl m-2 md:m-4 relative">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-custom-red/8 blur-3xl"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
                Sport
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-balance">
                Hasičský sport v Záblatí
              </h1>
              <p className="text-custom-light-grey font-light text-base md:text-lg leading-relaxed max-w-prose mx-auto mb-4">
                Sport je důležitou součástí našeho sboru. Pořádáme dvě významné
                soutěže — dětskou hasičskou soutěž a noční Memoriál Lukáše
                Blahovce — a naše družstva se pravidelně účastní akcí v okolí.
              </p>
              <p className="text-custom-light-grey font-light text-base leading-relaxed max-w-prose mx-auto">
                Cílem není jen vítězství, ale rozvoj fyzické zdatnosti, týmového
                ducha a lásky k hasičskému sportu u další generace.
              </p>
            </div>

            <div className="mt-10 md:mt-14 flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#detska-soutez"
                className="flex items-center gap-3 rounded-2xl border border-black/8 bg-custom-pink/50 px-5 py-4 min-w-50 transition hover:border-custom-red/25 hover:bg-custom-pink"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-custom-red shadow-sm">
                  <Trophy className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-left">
                  <span className="block text-sm font-medium text-custom-medium-grey">
                    Dětská soutěž
                  </span>
                  <span className="block text-xs text-custom-light-grey font-light">
                    Mladší & starší žáci
                  </span>
                </span>
              </a>
              <a
                href="#memorial-blahovec"
                className="flex items-center gap-3 rounded-2xl border border-black/8 bg-custom-blue/40 px-5 py-4 min-w-50 transition hover:border-custom-red/25 hover:bg-custom-blue/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-custom-red shadow-sm">
                  <Trophy className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-left">
                  <span className="block text-sm font-medium text-custom-medium-grey">
                    Memoriál L. Blahovce
                  </span>
                  <span className="block text-xs text-custom-light-grey font-light">
                    Muži & ženy
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        <CompetitionBlock competition={detskaSoutez} variant="pink" />
        <CompetitionBlock competition={memorialBlahovec} variant="blue" />

        {/* CTA */}
        <section className="overflow-hidden py-12 md:py-16 bg-custom-dark-grey rounded-3xl m-2 md:m-4 mt-3 md:mt-4">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl space-y-3">
                <h2 className="text-2xl md:text-3xl font-medium text-white">
                  Chcete soutěžit s námi?
                </h2>
                <p className="text-white/70 font-light text-base leading-relaxed">
                  Máte zájem o hasičský sport nebo se chcete stát členem
                  sportovního družstva? Ozvěte se — rádi vás provedeme celým
                  procesem.
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
