import { EditInterventionForm } from "@/features/interventions/components/EditInterventionForm";
import {
  getCategories,
  getInterventionById,
  getSubcategories,
  getUnits,
  getVehicles,
} from "@/features/interventions/queries";
import { ArrowLeft, Pencil } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditInterventionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [categories, subcategories, units, vehicles, intervention] =
    await Promise.all([
      getCategories(),
      getSubcategories(),
      getUnits(),
      getVehicles(),
      getInterventionById(id),
    ]);

  if (!intervention) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/interventions"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors mb-4 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Zpět na výjezdy
          </Link>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-gradient-to-br from-red-500 to-red-600 p-3 shadow-lg shadow-red-500/25">
              <Pencil className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                Upravit výjezd
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                Upravte informace o výjezdu
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />

          <div className="relative p-6 md:p-8">
            <EditInterventionForm
              categories={categories}
              subcategories={subcategories}
              units={units}
              vehicles={vehicles}
              intervention={intervention}
            />
          </div>
        </div>

        {/* Help Text */}
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
