import {
  BarChart3,
  FileText,
  FireExtinguisher,
  ImageIcon,
  LogOut,
  Settings,
  Truck,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";

export const MobileHeader = () => {
  return (
    <div className="md:hidden fixed top-0 inset-x-0 z-10 bg-white border-b">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <FireExtinguisher className="h-6 w-6 text-red-600" />
          <span className="font-bold text-xl">SDH Název</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={adminData.user.avatar}
                    alt={adminData.user.name}
                  />
                  <AvatarFallback>
                    {adminData.user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{adminData.user.name}</p>
                  <p className="text-xs text-slate-500">
                    {adminData.user.role}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setActiveTab("prehled")}>
              <BarChart3 className="h-4 w-4 mr-2" />
              Přehled
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveTab("aktuality")}>
              <FileText className="h-4 w-4 mr-2" />
              Aktuality
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveTab("vyjezdy")}>
              <Truck className="h-4 w-4 mr-2" />
              Výjezdy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveTab("galerie")}>
              <ImageIcon className="h-4 w-4 mr-2" />
              Galerie
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setActiveTab("nastaveni")}>
              <Settings className="h-4 w-4 mr-2" />
              Nastavení
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="h-4 w-4 mr-2" />
              Odhlásit se
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex overflow-x-auto border-t">
        <button
          onClick={() => setActiveTab("prehled")}
          className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
            activeTab === "prehled"
              ? "border-b-2 border-red-600 text-red-700"
              : "text-slate-700"
          }`}
        >
          Přehled
        </button>
        <button
          onClick={() => setActiveTab("aktuality")}
          className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
            activeTab === "aktuality"
              ? "border-b-2 border-red-600 text-red-700"
              : "text-slate-700"
          }`}
        >
          Aktuality
        </button>
        <button
          onClick={() => setActiveTab("vyjezdy")}
          className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
            activeTab === "vyjezdy"
              ? "border-b-2 border-red-600 text-red-700"
              : "text-slate-700"
          }`}
        >
          Výjezdy
        </button>
        <button
          onClick={() => setActiveTab("galerie")}
          className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
            activeTab === "galerie"
              ? "border-b-2 border-red-600 text-red-700"
              : "text-slate-700"
          }`}
        >
          Galerie
        </button>
      </div>
    </div>
  );
};
