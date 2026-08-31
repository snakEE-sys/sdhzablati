"use client";

import {
  MoreHorizontal,
  Pencil,
  Plus,
  Trash2Icon,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SettingsItem = {
  id: string;
  name: string;
};

type SettingsListProps<T extends SettingsItem> = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: T[];
  addLabel: string;
  onAdd: () => void;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
};

export function SettingsList<T extends SettingsItem>({
  title,
  description,
  icon: Icon,
  items,
  addLabel,
  onAdd,
  onEdit,
  onDelete,
}: SettingsListProps<T>) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <div className="relative">
        <div className="flex items-start gap-4 border-b border-slate-100 p-6">
          <div className="rounded-xl bg-red-50 p-2.5 text-red-600">
            <Icon className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900">{title}</h2>

            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 px-4 transition-colors hover:bg-slate-50"
              >
                <span className="text-sm font-medium text-slate-700">
                  {item.name}
                </span>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onEdit(item)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Upravit
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="text-red-600 focus:text-red-600"
                      onClick={() => onDelete(item)}
                    >
                      <Trash2Icon className="mr-2 h-4 w-4" />
                      Smazat
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            className="mt-4 w-full border-dashed"
            onClick={onAdd}
          >
            <Plus className="mr-2 h-4 w-4" />
            {addLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
