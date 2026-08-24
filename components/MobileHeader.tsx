import { Sidebar } from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { User } from "better-auth/types";

export const MobileHeader = () => {
  return (
    <header className="md:hidden flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-20">
      <span className="font-bold text-red-600">SDH Záblatí</span>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar className="h-full" />
        </SheetContent>
      </Sheet>
    </header>
  );
};
