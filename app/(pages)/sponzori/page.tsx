import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FireExtinguisher, Mail, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SponzoriPage() {
  const sponzori = [
    {
      id: 1,
      nazev: "Sponzor 1",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 1",
      url: "#",
    },
    {
      id: 2,
      nazev: "Sponzor 2",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 2",
      url: "#",
    },
    {
      id: 3,
      nazev: "Sponzor 3",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 3",
      url: "#",
    },
    {
      id: 4,
      nazev: "Sponzor 4",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 4",
      url: "#",
    },
    {
      id: 5,
      nazev: "Sponzor 5",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 5",
      url: "#",
    },
    {
      id: 6,
      nazev: "Sponzor 6",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 6",
      url: "#",
    },
    {
      id: 7,
      nazev: "Sponzor 7",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 7",
      url: "#",
    },
    {
      id: 8,
      nazev: "Sponzor 8",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 8",
      url: "#",
    },
    {
      id: 9,
      nazev: "Sponzor 9",
      logo: "/placeholder.svg?height=150&width=300&text=Logo 9",
      url: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Naši sponzoři
            </h1>
            <p className="text-lg max-w-3xl text-white/90">
              Děkujeme všem našim sponzorům za podporu, díky které můžeme lépe
              plnit naše poslání a pomáhat občanům naší obce.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Děkujeme za podporu</h2>
              <p className="text-slate-600 mb-4">
                Činnost našeho sboru dobrovolných hasičů by nebyla možná bez
                podpory našich sponzorů. Díky jejich finanční i materiální
                pomoci můžeme neustále zlepšovat naše vybavení, organizovat
                preventivní a vzdělávací akce pro veřejnost a efektivněji
                zasahovat při mimořádných událostech.
              </p>
              <p className="text-slate-600">
                Vážíme si každého příspěvku a jsme vděční za dlouhodobou
                spolupráci s našimi partnery. Pokud byste se i vy chtěli stát
                naším sponzorem, neváhejte nás kontaktovat.
              </p>
            </div>

            {/* Sponzoři */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Sponzoři</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {sponzori.map((sponzor) => (
                  <Card
                    key={sponzor.id}
                    className="border-none shadow-lg rounded-2xl hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6 flex flex-col items-center">
                      <Link href={sponzor.url} className="block w-full">
                        <Image
                          src={sponzor.logo || "/placeholder.svg"}
                          alt={sponzor.nazev}
                          width={300}
                          height={150}
                          className="w-full h-auto object-contain mb-4"
                        />
                      </Link>
                      <h4 className="text-lg font-bold text-center">
                        {sponzor.nazev}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Staňte se sponzorem */}
            <div className="bg-red-50 rounded-3xl p-8 md:p-12">
              <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">
                    Staňte se naším sponzorem
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Hledáme partnery, kteří by chtěli podpořit naši činnost a
                    pomoci nám v našem poslání chránit životy a majetek obyvatel
                    naší obce. Nabízíme různé formy spolupráce a propagace
                    vašeho jména či firmy.
                  </p>
                  <p className="text-slate-700 mb-6">
                    Pokud máte zájem o spolupráci, kontaktujte nás. Rádi vám
                    poskytneme více informací o možnostech sponzoringu a
                    připravíme nabídku přesně podle vašich představ.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white">
                      Kontaktujte nás
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-white p-6 rounded-2xl shadow-md">
                    <h4 className="font-bold mb-4">
                      Kontaktní osoba pro sponzoring
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">Jan Plasgura</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-red-600" />
                        <span>+420 731 130 689</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-red-600" />
                        <span>sponzoring@sdhzablati.cz</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
