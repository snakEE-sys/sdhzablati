"use client";

import {
  BarChart3,
  FileText,
  ImageIcon,
  Settings,
  Truck,
  ChevronRight,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import logo from "@/public/logo.png";
import { Suspense } from "react";
import { UserProfile } from "./Profile";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Přehled", icon: BarChart3 },
  { href: "/dashboard/posts", label: "Aktuality", icon: FileText },
  { href: "/dashboard/interventions", label: "Výjezdy", icon: Truck },
  { href: "/dashboard/gallery", label: "Galerie", icon: ImageIcon },
  { href: "/dashboard/settings", label: "Nastavení", icon: Settings },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div
      className={`flex w-64 flex-col bg-linear-to-b from-slate-50 to-white border-r border-slate-200/60 z-10 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/10 rounded-xl blur-md" />
          <Image
            src={logo}
            alt="logo"
            width={44}
            height={44}
            className="relative rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-base leading-tight text-slate-900">
            SDH Bohumín
          </span>
          <span className="text-xs text-slate-500 font-medium">Záblatí</span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 overflow-y-auto">
        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-linear-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 group-hover:text-slate-600"
                  } ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                />
                <span className="flex-1">{item.label}</span>
                {isActive && <ChevronRight className="h-4 w-4 text-white/80" />}
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <Suspense fallback="Loading..">
          <UserProfile />
        </Suspense>
      </div>
    </div>
  );
}
