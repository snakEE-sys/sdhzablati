import Link from "next/link";
import { FireExtinguisher } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <>
      <header className="z-50 w-full bg-white">
        <div className="container mx-auto flex items-center justify-between p-6">
          <Link href="/" className="flex items-center gap-2">
            <FireExtinguisher className="h-6 w-6 text-red-600" />
            <span className="font-bold text-xl">SDH Bohumín - Záblatí</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Aktuality
            </Link>
            <Link
              href="/jednotka"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Jednotka
            </Link>
            <Link
              href="/historie"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Historie
            </Link>
            <Link
              href="/sport"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Sport
            </Link>
            <Link
              href="/galerie"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Galerie
            </Link>
            <Link
              href="/sponzori"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Sponzoři
            </Link>
            <Link
              href="/kontakt"
              className="text-sm font-medium hover:text-red-600 transition-colors"
            >
              Kontakt
            </Link>
          </nav>
          <Button variant="outline" className="rounded-full md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
          <Button className="hidden md:inline-flex rounded-full bg-red-600 hover:bg-red-700 text-white">
            Tísňové volání 150
          </Button>
        </div>
      </header>
    </>
  );
};
