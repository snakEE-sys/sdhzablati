import { AddPostForm } from "@/features/posts/components/admin/AddPostForm";
import { getCategories } from "@/features/posts/queries";
import { ArrowLeft, FilePlus2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function AddPostPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/posts"
            className="group mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Zpět na aktuality
          </Link>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-linear-to-br from-red-500 to-red-600 p-3 shadow-lg shadow-red-500/25">
              <FilePlus2 className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Nová aktualita
              </h1>

              <p className="mt-2 text-sm text-slate-600">
                Vytvořte a publikujte novou aktualitu nebo článek.
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-500/5 via-transparent to-transparent" />

          <div className="relative p-6 md:p-8">
            <Suspense fallback={<div>Načítání formuláře...</div>}>
              <AddPostForm categories={categories} />
            </Suspense>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 rounded-xl border border-slate-200/60 bg-slate-50 p-4">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Tip:</span> Pole
            označená hvězdičkou (*) jsou povinná. Před publikováním zkontrolujte
            obsah, kategorii a další informace o aktualitě.
          </p>
        </div>
      </div>
    </div>
  );
}
