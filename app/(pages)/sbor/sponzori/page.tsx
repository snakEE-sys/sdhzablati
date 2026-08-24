import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { orgContact } from "@/lib/org-contact";

export const metadata: Metadata = {
  title: "Sponzoři | SDH Bohumín – Záblatí",
  description:
    "Děkujeme sponzorům a partnerům, kteří podporují činnost sboru dobrovolných hasičů Bohumín – Záblatí.",
};

const sponsors = [
  {
    id: "mesto-bohumin",
    name: "Město Bohumín",
    url: "https://www.bohumin.cz",
    logo: "/images/sponsors/bohumin.jpg",
  },
  {
    id: "hzs-msk",
    name: "HZS MSK",
    url: "https://www.hzscr.cz/hasicsky-zachranny-sbor-moravskoslezskeho-kraje.aspx",
    logo: null,
  },
  {
    id: "sh-cms",
    name: "SH ČMS",
    url: "https://www.dh.cz",
    logo: "/images/sponsors/shcms.jpg",
  },
  {
    id: "nsa",
    name: "Národní sportovní agentura",
    url: "https://www.nsa.cz",
    logo: "/images/sponsors/nsa.png",
  },
  {
    id: "partner-b",
    name: "Partner B",
    url: "#",
    logo: null,
  },
  {
    id: "partner-c",
    name: "Partner C",
    url: "#",
    logo: null,
  },
  {
    id: "partner-d",
    name: "Partner D",
    url: "#",
    logo: null,
  },
  {
    id: "partner-e",
    name: "Partner E",
    url: "#",
    logo: null,
  },
] as const;

export default function SponzoriPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 pt-24 md:pt-28 lg:pt-32">
        {/* Intro */}
        <section className="overflow-hidden py-12 md:py-18 lg:py-24 bg-white rounded-3xl m-2 md:m-4 relative">
          <div
            className="pointer-events-none absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-custom-red/8 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-custom-blue/50 blur-3xl"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
                Sponzoři
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-balance">
                Děkujeme za vaši podporu
              </h1>
              <p className="text-custom-light-grey font-light text-base md:text-lg leading-relaxed max-w-prose mx-auto mb-4">
                Bez sponzorů a partnerů by naše práce byla mnohem těžší. Díky
                vám máme lepší vybavení, můžeme školit nové členy a pořádat akce
                pro obec.
              </p>
              <p className="text-custom-light-grey font-light text-base leading-relaxed max-w-prose mx-auto">
                Vážíme si každé pomoci — finanční, materiální i lidské. Níže
                patří dík všem, kdo stojí při sboru.
              </p>
            </div>
          </div>
        </section>

        {/* Logo grid */}
        <section className="relative overflow-hidden py-12 md:py-18 lg:py-24 bg-custom-pink rounded-3xl m-2 md:m-4 mt-3 md:mt-4">
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="mb-10 md:mb-14 max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-medium text-custom-dark-red mb-3">
                Naši partneři
              </h2>
              <p className="text-custom-light-grey font-light text-base leading-relaxed">
                Firmy, instituce i jednotlivci, se kterými spolupracujeme.
              </p>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 list-none p-0 m-0">
              {sponsors.map((sponsor) => {
                const Cell = (
                  <div className="relative flex h-32 md:h-40 p-8 items-center justify-center rounded-2xl border border-black/8 bg-white/95 shadow-sm transition duration-300 group-hover:border-custom-red/20 group-hover:shadow-md group-hover:-translate-y-0.5">
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={80}
                        className="h-full w-auto object-fit opacity-90 transition group-hover:opacity-100"
                      />
                    ) : (
                      <span className="text-center text-sm md:text-base font-medium text-custom-medium-grey tracking-wide px-2">
                        {sponsor.name}
                      </span>
                    )}
                  </div>
                );

                return (
                  <li key={sponsor.id} className="group">
                    {sponsor.url === "#" ? (
                      Cell
                    ) : (
                      <Link
                        href={sponsor.url}
                        aria-label={sponsor.name}
                        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-custom-red/40 rounded-2xl"
                      >
                        {Cell}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="overflow-hidden py-12 md:py-16 bg-custom-dark-grey rounded-3xl m-2 md:m-4 mt-3 md:mt-4">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 md:gap-12">
              <div className="max-w-xl space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-white">
                  Chcete se stát sponzorem?
                </h2>
                <p className="text-white/70 font-light text-base leading-relaxed">
                  Hledáme partnery, kteří chtějí podpořit zásahovou jednotku,
                  práci s mládeží i život v obci. Domluvíme formu spolupráce a
                  propagace podle vašich možností.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button
                  asChild
                  variant="whiteCapsule"
                  className="h-12 xl:h-14 font-medium text-base px-6 group flex items-center justify-center gap-2"
                >
                  <Link href="/kontakt">
                    <span>Napište nám</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="whiteCapsule"
                  className="h-12 xl:h-14 font-medium text-base px-6 group flex items-center justify-center gap-2 bg-white/10 text-white border border-white/15 hover:bg-white/15"
                >
                  <a href={`mailto:${orgContact.email}?subject=Sponzoring`}>
                    <span>{orgContact.email}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
