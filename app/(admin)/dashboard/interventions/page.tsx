import { Truck } from "lucide-react";
import { InterventionsTable } from "@/features/interventions/components/InterventionCard";
import { getInterventions } from "@/features/interventions/queries";

export default async function InterventionsPage() {
  const interventions = await getInterventions({ limit: 5 });

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            Výjezdy
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Přehled všech zásahů a výjezdů jednotky
          </p>
        </div>

        {/* Filters*/}

        {/* Interventions List */}
        <InterventionsTable interventions={interventions} />
      </div>

      {/* Empty State */}
      {!interventions && (
        <div className="text-center py-12">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-4">
            <Truck className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-1">
            Žádné výjezdy
          </h3>
          <p className="text-sm text-slate-500">
            Nebyly nalezeny žádné výjezdy odpovídající vašim filtrům.
          </p>
        </div>
      )}
    </div>
  );
}
