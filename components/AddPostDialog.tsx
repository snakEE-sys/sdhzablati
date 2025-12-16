"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { MainForm } from "./PostForm/MainForm";
import { useState } from "react";

export const AddPostDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-red-600 hover:text-red-700 hover:bg-red-50 -mr-2"
        >
          <Plus className="h-4 w-4 mr-1" />
          Přidat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-svh sm:max-h-8/9 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nový příspěvek</DialogTitle>
          <DialogDescription>Přidejte nový příspěvek.</DialogDescription>
        </DialogHeader>
        <MainForm setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  );
};
