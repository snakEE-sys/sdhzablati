"use client";

import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserActionsProps = {
  userId: string;
};

export function UserActions({ userId }: UserActionsProps) {
  function handleEdit() {
    console.log("Edit user:", userId);
  }

  function handleDelete() {
    console.log("Delete user:", userId);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-slate-500 hover:text-slate-900"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem className="cursor-pointer" onClick={handleEdit}>
          <Pencil className="mr-2 h-4 w-4" />
          Upravit
        </DropdownMenuItem>

        <DropdownMenuItem
          className="cursor-pointer text-red-600 focus:text-red-600"
          onClick={handleDelete}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Smazat
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
