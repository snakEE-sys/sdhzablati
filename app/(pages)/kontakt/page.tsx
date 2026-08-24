import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Receipt,
} from "lucide-react";
import { orgContact } from "@/lib/org-contact";

export const metadata: Metadata = {
  title: "Kontakt | SDH Bohumín – Záblatí",
  description:
    "Telefon, e-mail, adresa zbrojnice, IČO a mapa hasičského sboru Bohumín – Záblatí.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 pt-24 md:pt-28 lg:pt-32">
        {/* Intro — stejný rytmus jako úvod na /aktuality */}
        <section className="overflow-hidden py-12 md:py-18 lg:py-24 bg-white rounded-3xl m-2 md:m-4 relative">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-custom-red/8 blur-3xl"
            aria-hidden
          />
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
                Kontakt
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6 text-balance">
                Jsme tu pro vás
              </h1>
              <p className="text-custom-light-grey font-light text-base md:text-lg leading-relaxed max-w-prose mx-auto">
                Dotazy k členství, akcím, výcviku nebo spolupráci nám napište
                nebo zavolejte. Zbrojnici najdete přímo v Bohumíně – Záblatí.
              </p>
            </div>
          </div>
        </section>

        {/* Obsah — pink panel + karty jako na landing */}
        <section className="relative overflow-hidden py-12 md:py-18 lg:py-24 bg-custom-pink rounded-3xl m-2 md:m-4 mt-3 md:mt-4">
          <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5 space-y-5">
                <h2 className="text-2xl md:text-3xl font-medium text-custom-dark-red">
                  Rychlé spojení
                </h2>
                <p className="text-custom-light-grey font-light text-base leading-relaxed">
                  Nejjednodušší je e-mail nebo telefon — odpovídáme, jen jak to
                  jde.
                </p>

                <div className="grid gap-4">
                  <a
                    href={`tel:${orgContact.phone}`}
                    className="group flex gap-4 rounded-2xl border border-black/8 bg-white/90 p-5 shadow-sm transition hover:border-custom-red/25 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-custom-red/10 text-custom-dark-red">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wide text-custom-light-grey">
                        Telefon
                      </span>
                      <span className="text-lg font-medium text-custom-medium-grey group-hover:text-custom-red transition-colors">
                        {orgContact.phoneDisplay}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-custom-red opacity-0 transition group-hover:opacity-100" />
                  </a>

                  <a
                    href={`mailto:${orgContact.email}`}
                    className="group flex gap-4 rounded-2xl border border-black/8 bg-white/90 p-5 shadow-sm transition hover:border-custom-red/25 hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-custom-dark-red/10 text-custom-dark-red">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium uppercase tracking-wide text-custom-light-grey">
                        E-mail
                      </span>
                      <span className="text-lg font-medium text-custom-medium-grey break-all group-hover:text-custom-red transition-colors">
                        {orgContact.email}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-custom-red opacity-0 transition group-hover:opacity-100" />
                  </a>

                  <div className="flex gap-4 rounded-2xl border border-black/8 bg-white/90 p-5 shadow-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-custom-dark-red/10 text-custom-dark-red">
                      <MapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-medium uppercase tracking-wide text-custom-light-grey mb-1">
                        Adresa
                      </span>
                      <address className="not-italic text-base font-medium text-custom-medium-grey leading-relaxed">
                        {orgContact.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex gap-3 rounded-2xl border border-black/8 bg-white/90 p-5 shadow-sm">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-custom-pink text-custom-dark-red ring-1 ring-black/6">
                        <Building2 className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <span className="block text-xs font-medium uppercase tracking-wide text-custom-light-grey">
                          IČO
                        </span>
                        <span className="text-lg font-semibold text-custom-medium-grey tabular-nums">
                          {orgContact.ico}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 rounded-2xl border border-black/8 bg-white/90 p-5 shadow-sm">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-custom-pink text-custom-dark-red ring-1 ring-black/6">
                        <Receipt className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <span className="block text-xs font-medium uppercase tracking-wide text-custom-light-grey">
                          DPH
                        </span>
                        <span className="text-sm font-medium text-custom-medium-grey leading-snug">
                          {orgContact.vatNote}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <h2 className="text-2xl md:text-3xl font-medium text-black">
                    Kde nás najdete
                  </h2>
                  <Link
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      "Sokolská 208, 735 52 Bohumín-Záblatí",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-custom-red hover:text-custom-dark-red transition inline-flex items-center gap-1"
                  >
                    Otevřít v Mapách
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md ring-1 ring-black/5">
                  <div className="aspect-4/3 min-h-[280px] w-full md:aspect-16/10 md:min-h-[360px]">
                    <iframe
                      title="Mapa — hasičská zbrojnice Sokolská 208, Bohumín – Záblatí"
                      src={orgContact.mapEmbedSrc}
                      className="absolute inset-0 h-full w-full border-0 grayscale-15 contrast-[1.02]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/55 to-transparent px-4 py-4 pointer-events-none">
                    <p className="text-white text-sm font-medium drop-shadow-sm">
                      Hasičská zbrojnice · {orgContact.addressLines[1]}
                    </p>
                  </div>
                </div>
                <p className="text-custom-light-grey text-sm font-light leading-relaxed">
                  Parkování v okolí zbrojnice — při akcích prosím respektujte
                  vyznačené průjezdy pro jednotku.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
