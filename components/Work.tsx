import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Work() {
  return (
    <section className="m-2 md:m-4 pt-8 lg:py-16 space-y-6 min-h-screen">
      <div className="container mx-auto px-0 md:px-8 lg:px-16 xl:px-32">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-base text-custom-light-grey">
            Co jsou naše činnosti a aktivity?
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Naše práce nekončí
            <br />
            uhašením ohně
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 mt-10">
          {/* Card 1 - Large image card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[380px] group cursor-pointer">
            <Image
              src="/images/landing.jpeg"
              alt="Hasičská zbrojnice"
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 space-y-1">
              <h3 className="text-white text-xl font-semibold">
                Výjezdová jednotka
              </h3>
              <p className="text-white/80 text-sm max-w-xl font-light">
                Jsme v pohotovosti 24/7. Odstraňujeme následky řežod, čelíme
                přírodním živlům a pomáháme tam, kde je ohroženo zdraví či
                majetek.
              </p>
            </div>
            <div className="absolute top-4 right-4 bg-custom-dark-red rounded-full p-3">
              <ArrowUpRight className="text-white w-5 h-5" />
            </div>
          </div>

          {/* Card 2 - Red card */}
          <div className="relative bg-custom-red rounded-2xl p-6 w-full md:w-56 min-h-[280px] flex flex-col justify-between cursor-pointer">
            <div className="space-y-2">
              <h3 className="text-white text-xl font-semibold">
                Práce s mládeží
              </h3>
              <p className="text-white/90 text-sm font-light">
                Vychováváme novou generaci, která se nebojí pomoci.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="bg-custom-dark-red rounded-full p-3 transition">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 3 - Dark card */}
          <div className="relative bg-custom-dark-grey rounded-2xl p-6 w-full md:w-56 min-h-[280px] flex flex-col justify-between cursor-pointer">
            <div className="flex justify-end">
              <div className="bg-custom-dark-red rounded-full p-3">
                <ArrowUpRight className="text-white w-5 h-5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-white text-xl font-semibold">
                Kultura a obec
              </h3>
              <p className="text-white/70 text-sm font-light">
                Pořádáme plesy, dětské dny a udržujeme komunitní život v obci
                stále živý
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-custom-dark-grey rounded-2xl p-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
          <div className="space-y-10 max-w-sm">
            <h3 className="text-white text-2xl font-semibold">
              Chceš se k nám přidat?
            </h3>
            <p className="text-white/70 font-light text-sm leading-relaxed">
              Máš chuť pomáhat, naučit se nové věci a stát se součástí skvělé
              party? Hledáme nové členy do zásahové jednotky i pro pomoc s
              organizací akcí. Každá ruka se počítá.
            </p>
            <Button
              variant="whiteCapsule"
              className="w-full sm:w-auto h-12 xl:h-12 font-medium text-base xl:text-md px-6 group flex items-center justify-between sm:justify-start"
            >
              <span>Napiš nám</span>
              <div className="flex h-8 w-8 ml-4 -mr-3 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </Button>
          </div>

          {/* Firefighter image */}
          <div className="relative h-96 w-96 shrink-0">
            <Image
              src="/hero.png"
              alt="Hasič"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
