"use client";
import {
  BarChart3,
  FileText,
  ImageIcon,
  LogOut,
  Settings,
  Truck,
} from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { signOut } from "@/utils/auth-client";
import Image from "next/image";
import logo from "@/public/logo.png";
import { User } from "better-auth";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Přehled", icon: BarChart3 },
  { href: "/dashboard/aktuality", label: "Aktuality", icon: FileText },
  { href: "/dashboard/vyjezdy", label: "Výjezdy", icon: Truck },
  { href: "/dashboard/galerie", label: "Galerie", icon: ImageIcon },
  { href: "/dashboard/nastaveni", label: "Nastavení", icon: Settings },
];
export function Sidebar({
  user,
  className,
}: {
  user: User;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => router.push("/"),
      },
    });
  }

  return (
    <div className={`flex w-64 flex-col bg-white border-r z-10 ${className}`}>
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <Image src={logo} alt="logo" width={50} height={50} />
        <span className="font-bold text-xl">SDH Bohumín - Záblatí</span>
      </div>
      <div className="flex flex-col justify-between flex-1 overflow-y-auto">
        <nav className="flex-1 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-50 text-red-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 ${isActive ? "text-red-700" : ""}`}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <Avatar>
              <AvatarImage
                src="/images/user_placeholder.png"
                alt="User Avatar"
              />
            </Avatar>
            <div>
              <p className="font-medium text-sm">{user.name}</p>
              <p className="text-xs text-slate-500">Administrátor</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start gap-2 text-slate-700"
            size="sm"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Odhlásit se
          </Button>
        </div>
      </div>
    </div>
  );
}
