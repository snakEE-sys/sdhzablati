import Link from "next/link";

const links = [
  {
    href: "/jednotka/informace",
    label: "Informace",
  },
  {
    href: "/jednotka/technika",
    label: "Technika",
  },
  {
    href: "/jednotka/vyjezdy",
    label: "Výjezdy",
  },
];

export function UnitNavigation() {
  return (
    <nav className="sticky top-4 z-30 mx-2 mt-4 rounded-2xl border border-slate-200 bg-white/90 p-2 shadow-sm backdrop-blur md:mx-4">
      <div className="container mx-auto flex gap-1 px-0 md:px-6 lg:px-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex-1 rounded-xl px-4 py-3 text-center text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
