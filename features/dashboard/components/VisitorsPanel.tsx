"use client";

import { useMemo, useState } from "react";
import { Eye, Users } from "lucide-react";
import type { VisitorDay } from "../data";

export function VisitorsPanel({ visitors }: { visitors: VisitorDay[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const maxPageviews = useMemo(
    () => Math.max(...visitors.map((d) => d.pageviews), 1),
    [visitors],
  );

  const totals = useMemo(
    () => ({
      pageviews: visitors.reduce((sum, d) => sum + d.pageviews, 0),
      unique: visitors.reduce((sum, d) => sum + d.uniqueVisitors, 0),
    }),
    [visitors],
  );

  const active =
    activeIndex !== null ? visitors[activeIndex] : visitors[visitors.length - 1];

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="border-b border-slate-100 px-5 py-4 md:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Návštěvnost webu
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Posledních {visitors.length} dní · ukázková data
            </p>
          </div>
          <div className="flex gap-3 text-right">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Zobrazení
              </p>
              <p className="text-lg font-bold tabular-nums text-slate-900">
                {totals.pageviews.toLocaleString("cs-CZ")}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Návštěvníci
              </p>
              <p className="text-lg font-bold tabular-nums text-slate-900">
                {totals.unique.toLocaleString("cs-CZ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="px-5 py-6 md:px-6 border-b border-slate-100">
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" />
            {active.label}:{" "}
            <strong className="text-slate-800 tabular-nums">
              {active.pageviews}
            </strong>{" "}
            zobrazení
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <strong className="text-slate-800 tabular-nums">
              {active.uniqueVisitors}
            </strong>{" "}
            unikátních
          </span>
        </div>
        <div
          className="flex items-end gap-1.5 md:gap-2 h-36 md:h-44"
          role="img"
          aria-label="Graf denní návštěvnosti"
        >
          {visitors.map((day, index) => {
            const height = (day.pageviews / maxPageviews) * 100;
            const isActive =
              activeIndex === index ||
              (activeIndex === null && index === visitors.length - 1);

            return (
              <button
                key={day.date}
                type="button"
                className="group flex flex-1 flex-col items-center justify-end gap-2 h-full min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 rounded-md"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                aria-label={`${day.label}: ${day.pageviews} zobrazení`}
              >
                <div
                  className={`w-full max-w-8 rounded-t-md transition-all duration-300 ${
                    isActive
                      ? "bg-red-500 shadow-[0_-4px_12px_rgba(239,68,68,0.35)]"
                      : "bg-slate-200 group-hover:bg-red-300"
                  }`}
                  style={{ height: `${Math.max(height, 8)}%` }}
                />
                <span
                  className={`text-[9px] md:text-[10px] truncate w-full text-center ${
                    isActive ? "text-red-600 font-medium" : "text-slate-400"
                  }`}
                >
                  {day.label.replace(". ", ".")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-52 overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-slate-50/95 backdrop-blur-sm">
            <tr className="text-left text-xs uppercase tracking-wide text-slate-400 border-b border-slate-100">
              <th className="px-5 py-2.5 font-medium md:px-6">Datum</th>
              <th className="px-3 py-2.5 font-medium text-right">Zobrazení</th>
              <th className="px-5 py-2.5 font-medium text-right md:px-6">
                Návštěvníci
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[...visitors].reverse().map((day) => (
              <tr key={day.date} className="hover:bg-slate-50/50">
                <td className="px-5 py-2.5 md:px-6 text-slate-700">
                  {day.label}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums text-slate-800">
                  {day.pageviews}
                </td>
                <td className="px-5 py-2.5 md:px-6 text-right tabular-nums text-slate-600">
                  {day.uniqueVisitors}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
