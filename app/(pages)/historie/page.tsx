import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Ukázkové údaje o historických událostech
const historickeUdalosti = [
  {
    rok: "1925",
    nazev: "Založení sboru",
    popis:
      "Sbor dobrovolných hasičů byl založen 15. června 1925 z iniciativy starosty obce a několika místních občanů. Prvním velitelem byl zvolen Josef Novotný. Sbor měl při založení 20 členů a disponoval pouze ruční stříkačkou.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Založení 1925",
  },
  {
    rok: "1932",
    nazev: "První motorová stříkačka",
    popis:
      "Díky finanční sbírce mezi občany a příspěvku obce byla zakoupena první motorová stříkačka značky Stratílek. Tato událost výrazně zvýšila akceschopnost sboru a umožnila efektivnější zásahy při požárech.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Stříkačka 1932",
  },
  {
    rok: "1945",
    nazev: "Obnova po válce",
    popis:
      "Po skončení druhé světové války došlo k obnově činnosti sboru, který byl během okupace značně omezen. Sbor získal nové vybavení z přebytků armády a začal se aktivně podílet na obnově obce.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Obnova 1945",
  },
  {
    rok: "1953",
    nazev: "Výstavba hasičské zbrojnice",
    popis:
      "Byla zahájena výstavba nové hasičské zbrojnice, která nahradila původní nevyhovující prostory. Stavba byla dokončena v roce 1955 a slouží s několika úpravami dodnes. Na výstavbě se podíleli všichni členové sboru svépomocí.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Zbrojnice 1953",
  },
  {
    rok: "1968",
    nazev: "První automobilová cisterna",
    popis:
      "Sbor získal první automobilovou cisternu Škoda 706 RTH, která výrazně zlepšila mobilitu a akceschopnost jednotky. Vozidlo bylo slavnostně předáno do užívání za účasti představitelů obce a okresu.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Cisterna 1968",
  },
  {
    rok: "1975",
    nazev: "50. výročí založení sboru",
    popis:
      "Oslavy 50. výročí založení sboru byly spojeny s okrskovou soutěží v požárním sportu a slavnostním průvodem obcí. Při této příležitosti byli oceněni zakládající členové a byla vydána pamětní brožura mapující historii sboru.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Výročí 1975",
  },
  {
    rok: "1985",
    nazev: "Založení družstva mladých hasičů",
    popis:
      "Bylo založeno družstvo mladých hasičů, které se začalo pravidelně účastnit soutěží hry Plamen. Práce s mládeží se stala důležitou součástí činnosti sboru a zajistila přísun nových členů do budoucna.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Mládež 1985",
  },
  {
    rok: "1997",
    nazev: "Zásahy při povodních",
    popis:
      "Jednotka se aktivně podílela na záchranných a likvidačních pracích během ničivých povodní, které zasáhly Moravu. Za tuto činnost obdržela poděkování od hejtmana kraje a ministra vnitra.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Povodně 1997",
  },
  {
    rok: "2005",
    nazev: "Modernizace techniky",
    popis:
      "Díky dotaci z Evropské unie a příspěvku obce byla pořízena nová cisternová automobilová stříkačka na podvozku Tatra a další moderní vybavení pro zásahovou činnost.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Modernizace 2005",
  },
  {
    rok: "2015",
    nazev: "Rekonstrukce hasičské zbrojnice",
    popis:
      "Proběhla kompletní rekonstrukce hasičské zbrojnice, která zahrnovala zateplení budovy, výměnu oken, modernizaci sociálního zařízení a vytvoření nového zázemí pro členy jednotky.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Rekonstrukce 2015",
  },
  {
    rok: "2025",
    nazev: "100. výročí založení sboru",
    popis:
      "Sbor se připravuje na oslavy 100. výročí založení, které budou spojeny s řadou kulturních a sportovních akcí. Plánuje se vydání knihy o historii sboru a slavnostní předání nového praporu.",
    obrazek: "/placeholder.svg?height=400&width=600&text=Výročí 2025",
  },
];

export default function HistoriePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Historie našeho sboru
            </h1>
            <p className="text-lg max-w-3xl text-white/90">
              Seznamte se s bohatou historií našeho sboru dobrovolných hasičů,
              který již téměř 100 let chrání životy a majetek občanů naší obce.
            </p>
          </div>
        </section>

        {/* Úvod k historii */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Téměř století ochrany a pomoci
                </h2>
                <p className="text-slate-700 mb-4">
                  Historie našeho sboru dobrovolných hasičů se začala psát v
                  roce 1925, kdy byl z iniciativy tehdejšího starosty obce a
                  několika obětavých občanů založen hasičský sbor. Od té doby
                  prošel sbor mnoha změnami, překonal řadu překážek a stal se
                  nedílnou součástí života v naší obci.
                </p>
                <p className="text-slate-700 mb-4">
                  V průběhu let se měnilo vybavení, technika i metody hašení
                  požárů, ale jedno zůstávalo vždy stejné - odhodlání a
                  obětavost našich členů pomáhat svým spoluobčanům v nouzi. Sbor
                  se postupně rozrůstal, modernizoval a rozšiřoval svou činnost
                  od hašení požárů k technické pomoci, záchraně osob a zvířat i
                  preventivní a výchovné činnosti.
                </p>
                <p className="text-slate-700 mb-6">
                  Naši hasiči zasahovali při mnoha mimořádných událostech, od
                  lokálních požárů až po rozsáhlé povodně. Vždy byli připraveni
                  nasadit vlastní životy pro záchranu ostatních. Tato tradice
                  dobrovolné pomoci a služby veřejnosti pokračuje dodnes a jsme
                  na ni právem hrdí.
                </p>
              </div>
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Historická fotografie sboru"
                  alt="Historická fotografie sboru dobrovolných hasičů"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Časová osa */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Klíčové milníky naší historie
            </h2>

            <div className="relative">
              {/* Vertikální linie časové osy */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block" />

              {/* Události na časové ose */}
              <div className="space-y-12 relative">
                {historickeUdalosti.map((udalost, index) => (
                  <div key={udalost.rok} className="relative">
                    {/* Rok - mobilní zobrazení */}
                    <div className="md:hidden mb-4">
                      <div className="inline-block bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-full">
                        {udalost.rok}
                      </div>
                    </div>

                    {/* Karta události */}
                    <div
                      className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                    >
                      {/* Rok - desktopové zobrazení */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="bg-red-600 text-white text-xl font-bold px-4 py-2 rounded-full">
                          {udalost.rok}
                        </div>
                      </div>

                      {/* Obsah události */}
                      <div className="md:w-[calc(50%-2rem)]">
                        <Card className="overflow-hidden rounded-2xl border-none shadow-lg">
                          <div className="aspect-video relative">
                            <Image
                              src={udalost.obrazek || "/placeholder.svg"}
                              alt={udalost.nazev}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2">
                              {udalost.nazev}
                            </h3>
                            <p className="text-slate-700">{udalost.popis}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Prázdný prostor pro druhou polovinu */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galerie historických fotografií */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Galerie historických fotografií
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((foto) => (
                <div
                  key={foto}
                  className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative group"
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Historická fotografie ${foto}`}
                    alt={`Historická fotografie ${foto}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">
                        Historická fotografie {foto}
                      </p>
                      <p className="text-sm text-white/80">
                        Cca {1925 + foto * 10}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="rounded-full border-red-600 text-red-600 hover:bg-red-50"
              >
                Zobrazit celou galerii
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
