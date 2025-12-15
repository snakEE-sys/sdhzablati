import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";

// Data pro dětskou soutěž - mladší žáci
const detskaSoutezMladsi = {
  nazev: "Dětská hasičská soutěž - Mladší žáci",
  popis:
    "Tradiční soutěž mladých hasičů v kategorii mladších žáků (6-11 let). Soutěží se v požárním útoku, štafetě 4×60 m a dalších disciplínách podle pravidel hry Plamen. Soutěž se koná každoročně v červnu na hasičském hřišti v naší obci.",
  rocniky: [
    {
      rok: "2024",
      datum: "23. června 2024",
      umisteni: [
        { poradi: 1, tym: "SDH Bohumín - Vrbice" },
        { poradi: 2, tym: "SDH Bohumín - Šunychl" },
        { poradi: 3, tym: "SDH Bohumín - Skřečoň" },
      ],
      fotky: [
        "/images/sport/mladsi/mladsi_2024_1.jpg",
        "/images/sport/mladsi/mladsi_2024_2.jpg",
      ],
    },
    {
      rok: "2023",
      datum: "18. června 2023",
      umisteni: [
        { poradi: 1, tym: "SDH Chotěbuz" },
        { poradi: 2, tym: "SDH Bohumín - Kopytov" },
        { poradi: 3, tym: "SDH Karviná - Hranice" },
      ],
      fotky: [
        "/images/sport/mladsi/mladsi_2023_1.jpg",
        "/images/sport/mladsi/mladsi_2023_2.jpg",
      ],
    },
    {
      rok: "2022",
      datum: "26. června 2022",
      umisteni: [
        { poradi: 1, tym: "SDH Dolní Ves" },
        { poradi: 2, tym: "SDH Nová Víska" },
        { poradi: 3, tym: "SDH Horní Lhota" },
      ],
      fotky: [
        "/images/sport/mladsi/mladsi_2022_1.jpg",
        "/images/sport/mladsi/mladsi_2022_2.jpg",
      ],
    },
  ],
};

// Data pro dětskou soutěž - starší žáci
const detskaSoutezStarsi = {
  nazev: "Dětská hasičská soutěž - Starší žáci",
  popis:
    "Tradiční soutěž mladých hasičů v kategorii starších žáků (11-15 let). Soutěží se v požárním útoku, štafetě 4×60 m a dalších disciplínách podle pravidel hry Plamen. Soutěž probíhá souběžně se soutěží mladších žáků a je vyvrcholením celoroční práce s mládeží.",
  rocniky: [
    {
      rok: "2024",
      datum: "23. června 2024",
      umisteni: [
        { poradi: 1, tym: "SDH Bohumín - Skřečoň" },
        { poradi: 2, tym: "SDH Bohumín - Vrbice" },
        { poradi: 3, tym: "SDH Petrovice - Závada A" },
      ],
      fotky: [
        "/images/sport/starsi/starsi_2024_1.jpg",
        "/images/sport/starsi/starsi_2024_2.jpg",
      ],
    },
    {
      rok: "2023",
      datum: "18. června 2023",
      umisteni: [
        { poradi: 1, tym: "SDH Bohumín - Skřečoň" },
        { poradi: 2, tym: "SDH Horní Suchá" },
        { poradi: 3, tym: "SDH Chotěbuz" },
      ],
      fotky: [
        "/images/sport/starsi/starsi_2023_1.jpg",
        "/images/sport/starsi/starsi_2023_2.jpg",
      ],
    },
    {
      rok: "2022",
      datum: "26. června 2022",
      umisteni: [
        { poradi: 1, tym: "SDH Horní Lhota" },
        { poradi: 2, tym: "SDH Dolní Ves" },
        { poradi: 3, tym: "SDH Prostřední Lhota" },
      ],
      fotky: [
        "/images/sport/starsi/starsi_2022_1.jpg",
        "/images/sport/starsi/starsi_2022_2.jpg",
      ],
    },
  ],
};

// Data pro noční soutěž
const nocniSoutez = {
  nazev: "Noční soutěž - Memoriál Lukáše Blahovce",
  popis:
    "Noční hasičská soutěž v požárním útoku pořádaná na počest našeho dlouholetého člena Lukáše Blahovce. Soutěž se koná každoročně první sobotu v srpnu a je specifická tím, že probíhá za tmy s osvětlením pouze v prostoru základny a terčů. Soutěže se účastní družstva mužů a žen z širokého okolí a je známá svou jedinečnou atmosférou.",
  rocniky: [
    {
      rok: "2024",
      datum: "3. srpna 2024",
      umisteni: [
        { poradi: 1, tym: "SDH Horní Lhota", cas: "17,23 s" },
        { poradi: 2, tym: "SDH Dolní Ves", cas: "17,89 s" },
        { poradi: 3, tym: "SDH Nová Víska", cas: "18,45 s" },
      ],
      umisteniZeny: [
        { poradi: 1, tym: "SDH Prostřední Lhota", cas: "19,87 s" },
        { poradi: 2, tym: "SDH Nová Víska", cas: "20,34 s" },
        { poradi: 3, tym: "SDH Horní Lhota", cas: "21,12 s" },
      ],
      fotky: [
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2024 - 1",
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2024 - 2",
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2024 - 3",
      ],
    },
    {
      rok: "2023",
      datum: "5. srpna 2023",
      umisteni: [
        { poradi: 1, tym: "SDH Nová Víska", cas: "16,78 s" },
        { poradi: 2, tym: "SDH Horní Lhota", cas: "17,12 s" },
        { poradi: 3, tym: "SDH Prostřední Lhota", cas: "17,98 s" },
      ],
      umisteniZeny: [
        { poradi: 1, tym: "SDH Nová Víska", cas: "19,23 s" },
        { poradi: 2, tym: "SDH Prostřední Lhota", cas: "19,87 s" },
        { poradi: 3, tym: "SDH Dolní Ves", cas: "20,45 s" },
      ],
      fotky: [
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2023 - 1",
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2023 - 2",
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2023 - 3",
      ],
    },
    {
      rok: "2022",
      datum: "6. srpna 2022",
      umisteni: [
        { poradi: 1, tym: "SDH Dolní Ves", cas: "17,05 s" },
        { poradi: 2, tym: "SDH Nová Víska", cas: "17,56 s" },
        { poradi: 3, tym: "SDH Horní Lhota", cas: "18,12 s" },
      ],
      umisteniZeny: [
        { poradi: 1, tym: "SDH Horní Lhota", cas: "19,56 s" },
        { poradi: 2, tym: "SDH Nová Víska", cas: "20,12 s" },
        { poradi: 3, tym: "SDH Prostřední Lhota", cas: "20,78 s" },
      ],
      fotky: [
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2022 - 1",
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2022 - 2",
        "/placeholder.svg?height=400&width=600&text=Noční soutěž 2022 - 3",
      ],
    },
  ],
};

export default function SportPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hasičský sport
            </h1>
            <p className="text-lg max-w-3xl text-white/90">
              Sportovní činnost je důležitou součástí našeho sboru. Pořádáme
              soutěže pro děti i dospělé a naše družstva se pravidelně účastní
              hasičských soutěží v okolí.
            </p>
          </div>
        </section>

        {/* Úvod ke sportovní činnosti */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Naše sportovní činnost
                </h2>
                <p className="text-slate-700 mb-4">
                  Hasičský sport má v našem sboru dlouholetou tradici.
                  Pravidelně se účastníme soutěží v požárním sportu na okresní i
                  krajské úrovni. Máme smíšené družstvo mužů a věnujeme se také
                  práci s mládeží.
                </p>
                <p className="text-slate-700 mb-4">
                  Každoročně pořádáme dvě významné soutěže - dětskou hasičskou
                  soutěž pro mladší a starší žáky a noční soutěž "Memoriál
                  Lukáše Blahovce" pro dospělé. Obě soutěže mají v našem regionu
                  dlouholetou tradici a těší se velké oblibě.
                </p>
                <p className="text-slate-700 mb-6">
                  Naším cílem je nejen dosahovat co nejlepších sportovních
                  výsledků, ale především vychovávat novou generaci hasičů,
                  rozvíjet jejich fyzickou zdatnost, týmového ducha a lásku k
                  hasičskému sportu.
                </p>
              </div>
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Hasičský sport"
                  alt="Hasičský sport"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dětská soutěž */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Dětská hasičská soutěž
            </h2>

            <div className="mb-8">
              <p className="text-slate-700 text-center max-w-3xl mx-auto mb-8">
                Dětská hasičská soutěž je vyvrcholením celoroční práce s mladými
                hasiči. Soutěží se v kategoriích mladších a starších žáků podle
                pravidel hry Plamen. Soutěž se koná každoročně v červnu na
                hřišti v naší obci.
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Termín</p>
                    <p className="text-slate-600">(Kalendář soutěží)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Místo</p>
                    <p className="text-slate-600">(Kalendář soutěží)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Kategorie</p>
                    <p className="text-slate-600">Mladší a starší žáci</p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="mladsi" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="mladsi" className="text-base py-3">
                  Mladší žáci (6-11 let)
                </TabsTrigger>
                <TabsTrigger value="starsi" className="text-base py-3">
                  Starší žáci (11-15 let)
                </TabsTrigger>
              </TabsList>

              {/* Mladší žáci */}
              <TabsContent value="mladsi">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {detskaSoutezMladsi.nazev}
                  </h3>
                  <p className="text-slate-700 mb-8">
                    {detskaSoutezMladsi.popis}
                  </p>

                  <h4 className="text-xl font-bold mb-4">
                    Výsledky předchozích ročníků
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {detskaSoutezMladsi.rocniky.map((rocnik) => (
                      <Card
                        key={rocnik.rok}
                        className="overflow-hidden rounded-2xl border-none shadow-lg"
                      >
                        <div className="bg-red-600 text-white p-4">
                          <h5 className="text-lg font-bold">{rocnik.rok}</h5>
                          <p className="text-white/80 text-sm">
                            {rocnik.datum}
                          </p>
                        </div>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {rocnik.umisteni.map((umisteni) => (
                              <div
                                key={umisteni.poradi}
                                className="flex items-center gap-4"
                              >
                                <div
                                  className={`
                                  w-10 h-10 rounded-full flex items-center justify-center font-bold
                                  ${
                                    umisteni.poradi === 1
                                      ? "bg-amber-100 text-amber-800"
                                      : umisteni.poradi === 2
                                        ? "bg-slate-200 text-slate-800"
                                        : "bg-orange-100 text-orange-800"
                                  }
                                `}
                                >
                                  {umisteni.poradi}.
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">{umisteni.tym}</p>
                                </div>
                                <Trophy
                                  className={`h-5 w-5 
                                  ${
                                    umisteni.poradi === 1
                                      ? "text-amber-500"
                                      : umisteni.poradi === 2
                                        ? "text-slate-400"
                                        : "text-orange-600"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold mb-4">Fotogalerie</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {detskaSoutezMladsi.rocniky.flatMap((rocnik) =>
                      rocnik.fotky.map((fotka, index) => (
                        <div
                          key={`${rocnik.rok}-${index}`}
                          className="rounded-lg overflow-hidden aspect-[4/3] relative group"
                        >
                          <Image
                            src={fotka || "/placeholder.svg"}
                            alt={`Mladší žáci ${rocnik.rok} - fotka ${index + 1}`}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                            <div className="p-4 text-white">
                              <p className="font-medium">
                                Mladší žáci {rocnik.rok}
                              </p>
                            </div>
                          </div>
                        </div>
                      )),
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Starší žáci */}
              <TabsContent value="starsi">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {detskaSoutezStarsi.nazev}
                  </h3>
                  <p className="text-slate-700 mb-8">
                    {detskaSoutezStarsi.popis}
                  </p>

                  <h4 className="text-xl font-bold mb-4">
                    Výsledky předchozích ročníků
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {detskaSoutezStarsi.rocniky.map((rocnik) => (
                      <Card
                        key={rocnik.rok}
                        className="overflow-hidden rounded-2xl border-none shadow-lg"
                      >
                        <div className="bg-blue-600 text-white p-4">
                          <h5 className="text-lg font-bold">{rocnik.rok}</h5>
                          <p className="text-white/80 text-sm">
                            {rocnik.datum}
                          </p>
                        </div>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {rocnik.umisteni.map((umisteni) => (
                              <div
                                key={umisteni.poradi}
                                className="flex items-center gap-4"
                              >
                                <div
                                  className={`
                                  w-10 h-10 rounded-full flex items-center justify-center font-bold
                                  ${
                                    umisteni.poradi === 1
                                      ? "bg-amber-100 text-amber-800"
                                      : umisteni.poradi === 2
                                        ? "bg-slate-200 text-slate-800"
                                        : "bg-orange-100 text-orange-800"
                                  }
                                `}
                                >
                                  {umisteni.poradi}.
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium">{umisteni.tym}</p>
                                </div>
                                <Trophy
                                  className={`h-5 w-5 
                                  ${
                                    umisteni.poradi === 1
                                      ? "text-amber-500"
                                      : umisteni.poradi === 2
                                        ? "text-slate-400"
                                        : "text-orange-600"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <h4 className="text-xl font-bold mb-4">Fotogalerie</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {detskaSoutezStarsi.rocniky.flatMap((rocnik) =>
                      rocnik.fotky.map((fotka, index) => (
                        <div
                          key={`${rocnik.rok}-${index}`}
                          className="rounded-lg overflow-hidden aspect-[4/3] relative group"
                        >
                          <Image
                            src={fotka || "/placeholder.svg"}
                            alt={`Starší žáci ${rocnik.rok} - fotka ${index + 1}`}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                            <div className="p-4 text-white">
                              <p className="font-medium">
                                Starší žáci {rocnik.rok}
                              </p>
                            </div>
                          </div>
                        </div>
                      )),
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Noční soutěž */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Noční soutěž - Memoriál Lukáše Blahovce
            </h2>

            <div className="mb-8">
              <p className="text-slate-700 text-center max-w-3xl mx-auto mb-8">
                {nocniSoutez.popis}
              </p>

              <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Termín</p>
                    <p className="text-slate-600">(Kalendář soutěží)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Místo</p>
                    <p className="text-slate-600">(Kalendář soutěží)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Kategorie</p>
                    <p className="text-slate-600">Muži a ženy</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Noční soutěž"
                    alt="Noční soutěž - Memoriál Lukáše Blahovce"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    O Lukáši Blahovcovi
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Lukáš Blahovec byl dlouholetým členem našeho sboru, který
                    tragicky zahynul při zásahu v roce 2010. Byl to obětavý
                    hasič, skvělý kamarád a vynikající sportovec, který se
                    významně podílel na rozvoji hasičského sportu v našem sboru.
                  </p>
                  <p className="text-slate-700 mb-4">
                    Na jeho počest jsme se rozhodli pořádat noční hasičskou
                    soutěž, která nese jeho jméno. Memoriál se stal prestižní
                    soutěží, které se účastní družstva z celého kraje a je známý
                    svou jedinečnou atmosférou a náročností.
                  </p>
                  <p className="text-slate-700">
                    Lukáš byl velkým propagátorem nočních soutěží, proto jsme se
                    rozhodli uspořádat soutěž právě v tomto formátu. Věříme, že
                    by měl radost z toho, jak se soutěž za ty roky rozvinula a
                    kolik týmů se jí každoročně účastní.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-center">
                Výsledky předchozích ročníků
              </h3>

              {nocniSoutez.rocniky.map((rocnik) => (
                <div key={rocnik.rok} className="mb-12">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full mr-3">
                      {rocnik.rok}
                    </span>
                    {rocnik.datum}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <Card className="overflow-hidden rounded-2xl border-none shadow-lg">
                      <div className="bg-red-600 text-white p-4">
                        <h5 className="text-lg font-bold">Kategorie muži</h5>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {rocnik.umisteni.map((umisteni) => (
                            <div
                              key={umisteni.poradi}
                              className="flex items-center gap-4"
                            >
                              <div
                                className={`
                                w-10 h-10 rounded-full flex items-center justify-center font-bold
                                ${
                                  umisteni.poradi === 1
                                    ? "bg-amber-100 text-amber-800"
                                    : umisteni.poradi === 2
                                      ? "bg-slate-200 text-slate-800"
                                      : "bg-orange-100 text-orange-800"
                                }
                              `}
                              >
                                {umisteni.poradi}.
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{umisteni.tym}</p>
                                <p className="text-sm text-slate-500">
                                  Čas: {umisteni.cas}
                                </p>
                              </div>
                              <Trophy
                                className={`h-5 w-5 
                                ${
                                  umisteni.poradi === 1
                                    ? "text-amber-500"
                                    : umisteni.poradi === 2
                                      ? "text-slate-400"
                                      : "text-orange-600"
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden rounded-2xl border-none shadow-lg">
                      <div className="bg-pink-600 text-white p-4">
                        <h5 className="text-lg font-bold">Kategorie ženy</h5>
                      </div>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {rocnik.umisteniZeny.map((umisteni) => (
                            <div
                              key={umisteni.poradi}
                              className="flex items-center gap-4"
                            >
                              <div
                                className={`
                                w-10 h-10 rounded-full flex items-center justify-center font-bold
                                ${
                                  umisteni.poradi === 1
                                    ? "bg-amber-100 text-amber-800"
                                    : umisteni.poradi === 2
                                      ? "bg-slate-200 text-slate-800"
                                      : "bg-orange-100 text-orange-800"
                                }
                              `}
                              >
                                {umisteni.poradi}.
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{umisteni.tym}</p>
                                <p className="text-sm text-slate-500">
                                  Čas: {umisteni.cas}
                                </p>
                              </div>
                              <Trophy
                                className={`h-5 w-5 
                                ${
                                  umisteni.poradi === 1
                                    ? "text-amber-500"
                                    : umisteni.poradi === 2
                                      ? "text-slate-400"
                                      : "text-orange-600"
                                }`}
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {rocnik.fotky.map((fotka, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden aspect-[4/3] relative group"
                      >
                        <Image
                          src={fotka || "/placeholder.svg"}
                          alt={`Noční soutěž ${rocnik.rok} - fotka ${index + 1}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                          <div className="p-4 text-white">
                            <p className="font-medium">
                              Noční soutěž {rocnik.rok}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Výzva k zapojení */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="container text-center mx-auto">
            <h2 className="text-3xl font-bold mb-6">Přidejte se k nám</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Máte zájem o hasičský sport? Chcete se stát členem některého z
              našich sportovních družstev? Neváhejte nás kontaktovat. Rádi
              přivítáme nové členy, kteří mají chuť sportovat a reprezentovat
              náš sbor.
            </p>
            <Button className="rounded-full bg-white text-red-600 hover:bg-white/90 px-8">
              Kontaktujte nás
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
