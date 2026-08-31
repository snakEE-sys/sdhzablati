import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

type InterventionCardProps = {
  id: string;
  title: string;
  date: string;
  address?: string | null;
  category?: string | null;
};

export function InterventionCard({
  id,
  title,
  date,
  address,
  category,
}: InterventionCardProps) {
  return (
    <Link
      href={`/jednotka/vyjezdy/${id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-red-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          {category && (
            <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-custom-red">
              {category}
            </span>
          )}

          <h2 className="mt-4 text-xl font-semibold text-slate-900">{title}</h2>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
            <span>{date}</span>

            {address && (
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {address}
              </span>
            )}
          </div>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-custom-dark-red group-hover:text-white">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
}
