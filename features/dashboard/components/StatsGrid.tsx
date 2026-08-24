import { FileText, ImageIcon, Truck } from "lucide-react";
import { getDashboardStats } from "../queries";
import { getCurrentYear } from "@/lib/utils/getYear";

export async function StatsGrid() {
  const year = await getCurrentYear();

  const stats = await getDashboardStats();

  const items = [
    {
      label: "Výjezdy celkem",
      sublabel: `${stats.interventionsThisYear} v roce ${year}`,
      value: stats.interventions,
      icon: Truck,
      accent: "from-red-500/15 to-red-500/5",
      iconColor: "text-red-600",
    },
    {
      label: "Aktuality",
      sublabel: "Příspěvky v databázi",
      value: stats.posts,
      icon: FileText,
      accent: "from-slate-500/10 to-slate-500/5",
      iconColor: "text-slate-700",
    },
    {
      label: "Galerie",
      sublabel: "Složky na Cloudinary",
      value: stats.galleries,
      icon: ImageIcon,
      accent: "from-amber-500/15 to-amber-500/5",
      iconColor: "text-amber-700",
    },
  ];

  return (
    <section aria-label="Statistiky">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {items.map((item) => (
          <article
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm transition hover:shadow-md hover:border-slate-300"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-linear-to-br ${item.accent} opacity-0 transition group-hover:opacity-100`}
              aria-hidden
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-3xl md:text-4xl font-bold tabular-nums text-slate-900 tracking-tight">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-400">{item.sublabel}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
