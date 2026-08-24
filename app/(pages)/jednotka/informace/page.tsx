import Image from "next/image";
import { EmergencyContact } from "@/features/jednotka/components/EmergencyContact";
import { members, technique } from "@/features/jednotka/data";
import { MemberCard } from "@/features/jednotka/components/MemberCard";
import { VehicleDetail } from "@/features/jednotka/components/VehicleDetail";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Truck, Shield, Clock } from "lucide-react";

export default async function JednotkaPage() {
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
                  <Stat icon={<Shield />} label="Kategorie: JPO V" />
                  <Stat icon={<Users />} label="Počet členů: 11" />
                  <Stat icon={<Clock />} label="Výjezd do: 10 minut" />
                  <Stat icon={<Truck />} label="Technika: 3ks" />
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
        <EmergencyContact />
        {/* Members */}
        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Členové jednotky
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {members.map((m) => (
                <MemberCard key={m.name} member={m} />
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
                <TabsTrigger value="engine" className="text-base py-3">
                  Cisternová automobilová stříkačka
                </TabsTrigger>
                <TabsTrigger value="vehicle" className="text-base py-3">
                  Dopravní automobil
                </TabsTrigger>
                <TabsTrigger value="boat" className="text-base py-3">
                  Záchranářský člun
                </TabsTrigger>
              </TabsList>
              <TabsContent value="engine">
                <VehicleDetail data={technique.engine} color="red" />
              </TabsContent>
              <TabsContent value="vehicle">
                <VehicleDetail data={technique.vehicle} color="blue" />
              </TabsContent>
              <TabsContent value="boat">
                <VehicleDetail data={technique.boat} color="green" />
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
            <div className="space-y-6"></div>

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

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-red-100 p-2 rounded-full h-5 w-5 text-red-600">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </div>
  );
}
