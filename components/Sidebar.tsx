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
import { useSession } from "@/utils/auth-client";
import { signOut } from "@/utils/auth-client";
import Image from "next/image";
import logo from "@/public/logo.png";

export const Sidebar = () => {
  const path = usePathname();
  const router = useRouter();
  const user = useSession();

  return (
    <div className="hidden md:flex w-64 flex-col fixed inset-y-0 bg-white border-r z-10">
      <div className="flex items-center gap-2 px-6 py-4 border-b">
        <Image src={logo} alt="logo" width={50} height={50} />
        <span className="font-bold text-xl">SDH Bohumín - Záblatí</span>
      </div>
      <div className="flex flex-col justify-between flex-1 overflow-y-auto">
        <nav className="flex-1 px-4 py-4 space-y-1">
          <Link
            href="/dashboard"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              path === "/dashboard"
                ? "bg-red-50 text-red-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <BarChart3 className="h-5 w-5" />
            Přehled
          </Link>
          <Link
            href="/dashboard/aktuality"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              path === "/dashboard/aktuality"
                ? "bg-red-50 text-red-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <FileText className="h-5 w-5" />
            Aktuality
          </Link>
          <Link
            href="/dashboard/vyjezdy"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              path === "/dashboard/vyjezdy"
                ? "bg-red-50 text-red-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Truck className="h-5 w-5" />
            Výjezdy
          </Link>
          <Link
            href="/dashboard/galerie"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              path === "/dashboard/galerie"
                ? "bg-red-50 text-red-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <ImageIcon className="h-5 w-5" />
            Galerie
          </Link>
          <Link
            href="/dashboard/nastaveni"
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              path === "/dashboard/nastaveni"
                ? "bg-red-50 text-red-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Settings className="h-5 w-5" />
            Nastavení
          </Link>
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
              <p className="font-medium text-sm">{user?.data?.user.name}</p>
              <p className="text-xs text-slate-500">Administrátor</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start gap-2 text-slate-700"
            size="sm"
            onClick={async () => {
              await signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/");
                  },
                },
              });
            }}
          >
            <LogOut className="h-4 w-4" />
            Odhlásit se
          </Button>
        </div>
      </div>
    </div>
  );
};
