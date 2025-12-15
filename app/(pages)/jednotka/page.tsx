import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Truck,
  Shield,
  MapPin,
  Clock,
  AlertTriangle,
  Phone,
} from "lucide-react";
import Image from "next/image";

// Údaje o členech jednotky
const clenoveJednotky = [
  {
    id: 1,
    jmeno: "Jan Plasgura",
    funkce: "Velitel jednotky",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 2,
    jmeno: "Stanislav Tyrala",
    funkce: "Zástupce velitele",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 3,
    jmeno: "Tomáš Ključik",
    funkce: "Strojník",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 4,
    jmeno: "Marek Ključik",
    funkce: "Strojník",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 5,
    jmeno: "Lukáš Korčík",
    funkce: "Hasič",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 6,
    jmeno: "Andrzej Grabowski",
    funkce: "Hasič",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 7,
    jmeno: "David Olík",
    funkce: "Hasič",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 8,
    jmeno: "Daniel Bogdanowicz",
    funkce: "Hasič",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 9,
    jmeno: "Tomáš Laubr",
    funkce: "Velitel družstva",
    foto: "/images/user_placeholder.png",
  },
  {
    id: 10,
    jmeno: "Michal Dadík",
    funkce: "Hasič",
    foto: "/images/user_placeholder.png",
  },
];

// Údaje o technice
const technika = {
  cisterna: {
    nazev: "Cisternová automobilová stříkačka",
    znacka: "Renault Midlum 4x4",
    rok: "2006",
    popis:
      "Cisternová automobilová stříkačka Renault Midlum je určena pro přepravu požárního družstva 1+5 a hasebních prostředků pro požární zásah vodou nebo pěnou při použití nízkého nebo vysokého tlaku vody. Vozidlo je vybaveno požárním čerpadlem o výkonu 2400 l/min a nádrží na vodu o objemu 2500 litrů.",
    parametry: [
      "Objem nádrže na vodu: 2500 litrů",
      "Objem nádrže na pěnidlo: 250 litrů",
      "Čerpací zařízení: odstředivé, dvoustupňové",
      "Jmenovitý průtok: 2400 l/min při 10 bar",
      "Maximální sací výška: 7,5 m",
      "Posádka: 1+5 osob",
      "Rozměry (d×š×v): 7900×2550×3300 mm",
      "Hmotnost: 14 000 kg",
    ],
    vybaveni: [
      "Vysokotlaké hasicí zařízení",
      "Asanační lišta",
      "Osvětlovací stožár",
      "Elektrocentrála",
      "Motorová řetězová pila",
      "Rozbrušovací pila",
      "Dýchací přístroje",
      "Prostředky pro likvidaci hmyzu",
    ],
    fotky: [
      "/images/technika/cas/cas_1.jpeg",
      "/images/technika/cas/cas_2.jpeg",
      "/images/technika/cas/cas_3.jpeg",
      "/images/technika/cas/cas_4.jpeg",
    ],
  },
  automobil: {
    nazev: "Dopravní automobil",
    znacka: "VW Crafter",
    rok: "2015",
    popis:
      "Dopravní automobil VW Crafter slouží k přepravě hasičů k místu zásahu a pro logistickou podporu zásahů. Vozidlo je vybaveno základním hasičským vybavením pro prvotní zásah a speciálními prostředky pro technické zásahy.",
    parametry: [
      "Motor: 2.0 TDI 110 kW",
      "Pohon: 4×2",
      "Posádka: 1+8 osob",
      "Rozměry (d×š×v): 6700×2100×2800 mm",
      "Hmotnost: 3500 kg",
    ],
    vybaveni: [
      "Přenosná motorová stříkačka",
      "Elektrocentrála",
      "Osvětlovací technika",
      "Základní hasební prostředky",
      "Lékárnička",
      "Ruční vyprošťovací nástroje",
      "Radiostanice",
    ],
    fotky: [
      "/images/technika/da/da_1.jpeg",
      "/images/technika/da/da_2.jpeg",
      "/images/technika/da/da_3.jpeg",
      "/images/technika/da/da_4.jpeg",
    ],
  },
  clun: {
    nazev: "Záchranářský člun",
    znacka: "Marine 450U",
    rok: "2021",
    popis:
      "Záchranářský člun Marine 450U je určen pro zásahy na vodní hladině, zejména při povodních a záchraně tonoucích osob. Člun je vybaven výkonným motorem a základním záchranářským vybavením.",
    parametry: [
      "Délka: 4,5 m",
      "Šířka: 1,9 m",
      "Hmotnost: 120 kg",
      "Nosnost: 700 kg nebo 6 osob",
      "Motor: Yamaha 50 HP",
      "Materiál: Hypalon/Neopren",
    ],
    vybaveni: [
      "Záchranné vesty",
      "Házecí pytlíky",
      "Záchranné lano",
      "Pádla",
      "Kotva",
      "Čerpadlo pro odčerpávání vody",
      "Lékárnička",
    ],
    fotky: [
      "/placeholder.svg?height=600&width=800&text=Člun 1",
      "/placeholder.svg?height=600&width=800&text=Člun 2",
      "/placeholder.svg?height=600&width=800&text=Člun 3",
    ],
  },
};

// Ukázkové údaje o výjezdech
const vyjezdy = [
  {
    id: 1,
    datum: "15. 3. 2025",
    cas: "14:30",
    kategorie: "Požár",
    podkategorie: "Nízké budovy",
    misto: "Hasičská 123, Název obce",
    technika: ["Cisternová automobilová stříkačka"],
    jednotky: ["JSDH Název obce", "HZS Název kraje"],
    popis:
      "Požár rodinného domu. Při příjezdu na místo události bylo průzkumem zjištěno, že se jedná o požár v kuchyni rodinného domu. Požár byl lokalizován a zlikvidován jedním vodním proudem C. Příčinou vzniku požáru byla technická závada na elektroinstalaci.",
    fotky: [
      "/placeholder.svg?height=400&width=600&text=Požár 1",
      "/placeholder.svg?height=400&width=600&text=Požár 2",
    ],
  },
  {
    id: 2,
    datum: "10. 3. 2025",
    cas: "08:15",
    kategorie: "Technická pomoc",
    podkategorie: "Odstranění nebezpečných stavů",
    misto: "Hlavní 456, Název obce",
    technika: ["Dopravní automobil"],
    jednotky: ["JSDH Název obce"],
    popis:
      "Odstranění spadlého stromu z komunikace. Jednotka provedla rozřezání stromu motorovou pilou a jeho odstranění z vozovky. Komunikace byla zprůjezdněna.",
    fotky: [
      "/placeholder.svg?height=400&width=600&text=Požár 1",
      "/placeholder.svg?height=400&width=600&text=Požár 2",
      "/placeholder.svg?height=400&width=600&text=Požár 3",
    ],
  },
  {
    id: 3,
    datum: "28. 2. 2025",
    cas: "19:45",
    kategorie: "Záchrana osob a zvířat",
    podkategorie: "Z vody",
    misto: "Rybník, Název obce",
    technika: ["Záchranářský člun", "Dopravní automobil"],
    jednotky: ["JSDH Název obce", "ZZS Název kraje"],
    popis:
      "Záchrana osoby, která se propadla při bruslení na zamrzlém rybníku. Jednotka pomocí člunu provedla záchranu osoby z vody. Osoba byla předána do péče ZZS.",
    fotky: ["/placeholder.svg?height=400&width=600&text=Požár 1"],
  },
  {
    id: 4,
    datum: "20. 2. 2025",
    cas: "11:20",
    kategorie: "Dopravní nehoda",
    podkategorie: "Vyproštění osob",
    misto: "Silnice I/123, km 45",
    technika: ["Cisternová automobilová stříkačka"],
    jednotky: ["JSDH Název obce", "HZS Název kraje", "ZZS Název kraje", "PČR"],
    popis:
      "Dopravní nehoda dvou osobních automobilů. Jednotka provedla protipožární opatření a ve spolupráci s HZS vyproštění zaklíněné osoby z vozidla pomocí hydraulického vyprošťovacího zařízení. Zraněná osoba byla předána do péče ZZS.",
    fotky: [
      "/placeholder.svg?height=400&width=600&text=Požár 1",
      "/placeholder.svg?height=400&width=600&text=Požár 3",
    ],
  },
  {
    id: 5,
    datum: "15. 2. 2025",
    cas: "16:50",
    kategorie: "Technická pomoc",
    podkategorie: "Čerpání vody",
    misto: "Nová 789, Název obce",
    technika: ["Cisternová automobilová stříkačka", "Dopravní automobil"],
    jednotky: ["JSDH Název obce"],
    popis:
      "Zatopený sklep rodinného domu po přívalovém dešti. Jednotka provedla odčerpání vody pomocí kalového čerpadla.",
    fotky: [],
  },
];

// Funkce pro získání barvy kategorie výjezdu
const getKategorieColor = (kategorie: string) => {
  switch (kategorie) {
    case "Požár":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    case "Technická pomoc":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "Dopravní nehoda":
      return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    case "Záchrana osob a zvířat":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    default:
      return "bg-slate-100 text-slate-800 hover:bg-slate-200";
  }
};

export default function JednotkaPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jednotka sboru dobrovolných hasičů
            </h1>
            <p className="text-lg max-w-3xl text-white/90">
              Jednotka sboru dobrovolných hasičů obce je zřízena obcí a je
              určena k hašení požárů, provádění záchranných prací při živelních
              pohromách a jiných mimořádných událostech.
            </p>
          </div>
        </section>

        {/* O jednotce */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">O naší jednotce</h2>
                <p className="text-slate-700 mb-4">
                  Jednotka sboru dobrovolných hasičů obce (JSDHO) je zřízena
                  obcí na základě zákona č. 133/1985 Sb., o požární ochraně.
                  Naše jednotka je zařazena do kategorie JPO V, což znamená, že
                  zajišťuje výjezd družstva o zmenšeném početním stavu do 10
                  minut od vyhlášení poplachu a působí pouze v místním území.
                </p>
                <p className="text-slate-700 mb-4">
                  Jednotka má celkem 10 členů, všichni jsou držiteli osvědčení o
                  odborné způsobilosti. Všichni členové jednotky pravidelně
                  absolvují odbornou přípravu a výcvik, aby byli schopni
                  efektivně zasahovat při různých typech mimořádných událostí.
                </p>
                <p className="text-slate-700 mb-6">
                  Naše jednotka je vybavena moderní technikou a věcnými
                  prostředky požární ochrany, které nám umožňují zasahovat při
                  požárech, živelných pohromách a dalších mimořádných
                  událostech.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">Kategorie: JPO V</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">Počet členů: 10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">Výjezd do: 10 minut</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Truck className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">Technika: 3 ks</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/landing.jpeg"
                  alt="Jednotka sboru dobrovolných hasičů"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover scale-150"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-8 bg-red-50">
          <div className="container mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-red-200 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/6 flex justify-center">
                  <div className="bg-red-100 p-6 rounded-full">
                    <AlertTriangle className="h-12 w-12 text-red-600" />
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h2 className="text-2xl font-bold mb-4">Tísňové volání</h2>
                  <p className="text-slate-700 mb-6">
                    V případě požáru, nehody nebo jiné mimořádné události
                    volejte tísňovou linku hasičů.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white text-xl !px-8 py-6 h-auto">
                      <Phone className="mr-2 h-6 w-6" /> 150
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-red-600 text-red-600 hover:bg-red-100 text-xl !px-8 py-6 h-auto"
                    >
                      <Phone className="mr-2 h-6 w-6" /> 112
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Členové jednotky */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Členové jednotky
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {clenoveJednotky.map((clen) => (
                <div key={clen.id} className="flex flex-col items-center">
                  <div className="rounded-full overflow-hidden mb-4 w-40 h-40">
                    <Image
                      src={clen.foto || "/placeholder.svg"}
                      alt={clen.jmeno}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{clen.jmeno}</h3>
                  <p className="text-slate-600">{clen.funkce}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technika */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Naše technika
            </h2>

            <Tabs defaultValue="cisterna" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="cisterna" className="text-base py-3">
                  Cisternová automobilová stříkačka
                </TabsTrigger>
                <TabsTrigger value="automobil" className="text-base py-3">
                  Dopravní automobil
                </TabsTrigger>
                <TabsTrigger value="clun" className="text-base py-3">
                  Záchranářský člun
                </TabsTrigger>
              </TabsList>

              {/* Cisterna */}
              <TabsContent value="cisterna">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">
                        {technika.cisterna.nazev}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge className="bg-red-100 text-red-800 rounded-full">
                          {technika.cisterna.znacka}
                        </Badge>
                        <Badge className="bg-slate-100 text-slate-800 rounded-full">
                          Rok výroby: {technika.cisterna.rok}
                        </Badge>
                      </div>
                      <p className="text-slate-700 mb-6">
                        {technika.cisterna.popis}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold mb-2">
                            Technické parametry
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {technika.cisterna.parametry.map(
                              (parametr, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-red-600 mr-2">•</span>
                                  {parametr}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Vybavení</h4>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {technika.cisterna.vybaveni.map(
                              (vybaveni, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-red-600 mr-2">•</span>
                                  {vybaveni}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto">
                      <Image
                        src={technika.cisterna.fotky[0] || "/placeholder.svg"}
                        alt={technika.cisterna.nazev}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-8 border-t">
                    <h4 className="font-bold mb-4">Fotogalerie</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {technika.cisterna.fotky.slice(1).map((fotka, index) => (
                        <div
                          key={index}
                          className="rounded-lg overflow-hidden aspect-video"
                        >
                          <Image
                            src={fotka || "/placeholder.svg"}
                            alt={`${technika.cisterna.nazev} - fotka ${index + 2}`}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Dopravní automobil */}
              <TabsContent value="automobil">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">
                        {technika.automobil.nazev}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge className="bg-blue-100 text-blue-800 rounded-full">
                          {technika.automobil.znacka}
                        </Badge>
                        <Badge className="bg-slate-100 text-slate-800 rounded-full">
                          Rok výroby: {technika.automobil.rok}
                        </Badge>
                      </div>
                      <p className="text-slate-700 mb-6">
                        {technika.automobil.popis}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold mb-2">
                            Technické parametry
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {technika.automobil.parametry.map(
                              (parametr, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  {parametr}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Vybavení</h4>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {technika.automobil.vybaveni.map(
                              (vybaveni, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  {vybaveni}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto">
                      <Image
                        src={technika.automobil.fotky[0] || "/placeholder.svg"}
                        alt={technika.automobil.nazev}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-8 border-t">
                    <h4 className="font-bold mb-4">Fotogalerie</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {technika.automobil.fotky.slice(1).map((fotka, index) => (
                        <div
                          key={index}
                          className="rounded-lg overflow-hidden aspect-video"
                        >
                          <Image
                            src={fotka || "/placeholder.svg"}
                            alt={`${technika.automobil.nazev} - fotka ${index + 2}`}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Člun */}
              <TabsContent value="clun">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">
                        {technika.clun.nazev}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <Badge className="bg-green-100 text-green-800 rounded-full">
                          {technika.clun.znacka}
                        </Badge>
                        <Badge className="bg-slate-100 text-slate-800 rounded-full">
                          Rok výroby: {technika.clun.rok}
                        </Badge>
                      </div>
                      <p className="text-slate-700 mb-6">
                        {technika.clun.popis}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold mb-2">
                            Technické parametry
                          </h4>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {technika.clun.parametry.map((parametr, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-600 mr-2">•</span>
                                {parametr}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">Vybavení</h4>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {technika.clun.vybaveni.map((vybaveni, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-600 mr-2">•</span>
                                {vybaveni}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-auto">
                      <Image
                        src={technika.clun.fotky[0] || "/placeholder.svg"}
                        alt={technika.clun.nazev}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-8 border-t">
                    <h4 className="font-bold mb-4">Fotogalerie</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {technika.clun.fotky.slice(1).map((fotka, index) => (
                        <div
                          key={index}
                          className="rounded-lg overflow-hidden aspect-video"
                        >
                          <Image
                            src={fotka || "/placeholder.svg"}
                            alt={`${technika.clun.nazev} - fotka ${index + 2}`}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Výjezdy */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Výjezdy jednotky
            </h2>

            <div className="space-y-6">
              {vyjezdy.map((vyjezd) => (
                <Card
                  key={vyjezd.id}
                  className="overflow-hidden rounded-2xl border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-slate-50 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-100">
                        <div className="text-4xl font-bold text-red-600 mb-1">
                          #{vyjezd.id}
                        </div>
                        <div className="text-lg font-medium">
                          {vyjezd.datum}
                        </div>
                        <div className="text-slate-500">{vyjezd.cas}</div>
                        <Badge
                          className={`${getKategorieColor(vyjezd.kategorie)} rounded-full mt-4`}
                        >
                          {vyjezd.kategorie}
                        </Badge>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-slate-500">
                              Kategorie
                            </div>
                            <div className="font-medium">
                              {vyjezd.kategorie} - {vyjezd.podkategorie}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">Místo</div>
                            <div className="font-medium flex items-center">
                              <MapPin className="h-4 w-4 text-red-600 mr-1" />
                              {vyjezd.misto}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">
                              Technika
                            </div>
                            <div className="font-medium">
                              {vyjezd.technika.join(", ")}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">
                              Jednotky
                            </div>
                            <div className="font-medium">
                              {vyjezd.jednotky.join(", ")}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-700">{vyjezd.popis}</p>

                        {/* Fotogalerie výjezdu */}
                        <div className="mt-6">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {vyjezd.fotky.map((fotka, index) => (
                              <div
                                key={index}
                                className="rounded-lg overflow-hidden aspect-[4/3] relative group"
                              >
                                <Image
                                  src={fotka || "/placeholder.svg"}
                                  alt={`Výjezd ${vyjezd.id} - fotka ${index + 1}`}
                                  fill
                                  className="object-cover transition-transform group-hover:scale-105"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="rounded-full border-red-600 text-red-600 hover:bg-red-50"
              >
                Zobrazit všechny výjezdy
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
