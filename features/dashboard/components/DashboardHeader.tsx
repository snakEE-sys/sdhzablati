import { getServerSession } from "@/features/auth/auth-server";

export async function DashboardHeader() {
  const session = await getServerSession();

  return (
    <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-1">
          Administrace
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
          Vítej
          {session?.user.name ? `, ${session?.user.name.split(" ")[0]}` : ""}
        </h1>
      </div>
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-500 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Web v provozu
      </div>
    </header>
  );
}
