import { AddInterventionForm } from "@/features/interventions/components/AddInterventionForm";
import {
  getCategories,
  getSubcategories,
  getUnits,
  getVehicles,
} from "@/features/interventions/queries";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function AddInterventionPage() {
  const [categories, subcategories, units, vehicles] = await Promise.all([
    getCategories(),
    getSubcategories(),
    getUnits(),
    getVehicles(),
  ]);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/dashboard/interventions"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors mb-4 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Zpět na výjezdy
          </Link>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-linear-to-br from-red-500 to-red-600 p-3 shadow-lg shadow-red-500/25">
              <Plus className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                Nový výjezd
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Zaznamenejte nový zásah nebo výjezd jednotky
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-500/5 via-transparent to-transparent" />
          <div className="relative p-6 md:p-8">
            <Suspense fallback="Loading..">
              <AddInterventionForm
                categories={categories}
                subcategories={subcategories}
                units={units}
                vehicles={vehicles}
              />
            </Suspense>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200/60 p-4">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Tip:</span> Všechna
            pole označená hvězdičkou (*) jsou povinná. Ujistěte se, že jste
            vyplnili všechny důležité informace o výjezdu.
          </p>
        </div>
      </div>
    </div>
  );
}
