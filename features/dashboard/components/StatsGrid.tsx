import { FileText, Truck, ImageIcon } from "lucide-react";

type Stats = {
  interventions: number;
  posts: number;
  gallery: number;
};
export function StatsGrid({ stats }: { stats: Stats }) {
  const year = new Date().getFullYear();

  const items = [
    {
      label: `Výjezdy (${year})`,
      value: stats.interventions,
      icon: Truck,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      label: "Aktuality",
      value: stats.posts,
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Galerie",
      value: stats.gallery,
      icon: ImageIcon,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-white p-6 rounded-2xl border shadow-sm flex items-center gap-4"
        >
          <div className={`${item.bg} p-3 rounded-xl`}>
            <item.icon className={`h-6 w-6 ${item.color}`} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">{item.label}</p>
            <p className="text-2xl font-bold text-slate-900">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
