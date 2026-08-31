import { ReactNode } from "react";

type SettingsCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
};

export function SettingsCard({
  title,
  description,
  icon,
  children,
}: SettingsCardProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <div className="relative">
        <div className="flex items-start gap-4 border-b border-slate-100 p-6">
          <div className="rounded-xl bg-red-50 p-2.5 text-red-600">{icon}</div>
          <div>
            <h2 className="font-semibold text-slate-900">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </section>
  );
}
