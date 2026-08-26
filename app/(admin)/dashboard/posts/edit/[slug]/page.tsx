import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

import { EditPostForm } from "@/features/posts/components/EditPostForm";
import { getCategories, getPostBySlug } from "@/features/posts/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function EditPostPage({ params }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPostContent params={params} />
    </Suspense>
  );
}

async function EditPostContent({ params }: Props) {
  const { slug } = await params;

  const [categories, post] = await Promise.all([
    getCategories(),
    getPostBySlug(slug),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/dashboard/posts"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors mb-4 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Zpět na aktuality
          </Link>

          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-linear-to-br from-red-500 to-red-600 p-3 shadow-lg shadow-red-500/25">
              <Pencil className="h-6 w-6 text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                Upravit aktualitu
              </h1>

              <p className="mt-2 text-sm text-slate-600">
                Upravte informace a obsah aktuality
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-500/5 via-transparent to-transparent" />

          <div className="relative p-6 md:p-8">
            <EditPostForm categories={categories} post={post} />
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200/60 p-4">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Tip:</span> Všechna
            pole označená hvězdičkou (*) jsou povinná.
          </p>
        </div>
      </div>
    </div>
  );
}
