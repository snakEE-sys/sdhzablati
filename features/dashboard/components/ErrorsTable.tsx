import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cs } from "date-fns/locale";
import type { SentryErrorRow } from "../data";

const levelStyles = {
  error: "bg-red-50 text-red-700 border-red-200",
  warning: "bg-amber-50 text-amber-800 border-amber-200",
  info: "bg-slate-100 text-slate-600 border-slate-200",
} as const;

export function ErrorsTable({ errors }: { errors: SentryErrorRow[] }) {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-600" aria-hidden />
            <h2 className="text-base font-semibold text-slate-900">
              Chyby aplikace
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Připraveno pro integraci se Sentry — zatím ukázková data
          </p>
        </div>
        <Badge
          variant="outline"
          className="text-[10px] uppercase tracking-wide"
        >
          Sentry
        </Badge>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="px-5 py-3 font-medium md:px-6">Chyba</th>
              <th className="px-3 py-3 font-medium hidden sm:table-cell">
                Úroveň
              </th>
              <th className="px-3 py-3 font-medium text-right">Počet</th>
              <th className="px-5 py-3 font-medium hidden md:table-cell md:px-6">
                Naposledy
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {errors.map((error) => (
              <tr
                key={error.id}
                className="group hover:bg-slate-50/60 transition-colors"
              >
                <td className="px-5 py-4 md:px-6">
                  <p className="font-medium text-slate-800 line-clamp-2">
                    {error.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-mono flex items-center gap-1">
                    {error.route}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-60 transition" />
                  </p>
                </td>
                <td className="px-3 py-4 hidden sm:table-cell">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${levelStyles[error.level]}`}
                  >
                    {error.level}
                  </span>
                </td>
                <td className="px-3 py-4 text-right tabular-nums font-semibold text-slate-700">
                  {error.count}
                </td>
                <td className="px-5 py-4 hidden md:table-cell text-slate-500 text-xs md:px-6 whitespace-nowrap">
                  {/*formatDistanceToNow(new Date(error.lastSeen), {
                    addSuffix: true,
                    locale: cs,
                  })*/}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {errors.length === 0 ? (
        <p className="px-6 py-10 text-center text-sm text-slate-500">
          Žádné chyby — vše v pořádku.
        </p>
      ) : null}
    </section>
  );
}
