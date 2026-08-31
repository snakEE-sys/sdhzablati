import { UnitHero } from "@/features/jednotka/components/UnitHero";
import { UnitNavigation } from "@/features/jednotka/components/UnitNavigation";
import { Shield, Clock, MapPin, Users } from "lucide-react";

export default function UnitInformationPage() {
  return (
    <main className="overflow-hidden">
      <UnitHero
        eyebrow="Výjezdová jednotka"
        title="Připraveni pomáhat, když je potřeba"
        description="Jsme součástí systému požární ochrany a pomáháme při mimořádných událostech, požárech, technických zásazích i přírodních katastrofách."
      />

      <UnitNavigation />

      <section className="m-2 mt-4 rounded-3xl bg-white md:m-4">
        <div className="container mx-auto px-6 py-16 md:px-8 md:py-24 lg:px-16 xl:px-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-custom-red">
                O jednotce
              </p>

              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Pomáhat druhým není jen naše práce.
              </h2>
            </div>

            <div className="space-y-6 text-base font-light leading-relaxed text-custom-light-grey">
              <p>
                Naše jednotka je připravena reagovat na mimořádné události a
                poskytovat pomoc lidem v situacích, kdy je ohroženo zdraví,
                život nebo majetek.
              </p>

              <p>
                Vedle zásahové činnosti se věnujeme také prevenci, práci s
                mládeží a životu v naší obci.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard icon={Clock} value="24/7" label="Připravenost jednotky" />

            <StatCard icon={Shield} value="JPO V" label="Kategorie jednotky" />

            <StatCard icon={Users} value="12" label="Členů jednotky" />

            <StatCard icon={MapPin} value="Bohumín" label="Oblast působnosti" />
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-custom-red">
        <Icon className="h-5 w-5" />
      </div>

      <p className="text-3xl font-bold">{value}</p>
      <p className="mt-1 text-sm font-light text-custom-light-grey">{label}</p>
    </div>
  );
}
