import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { GalleryForm } from "./GalleryForm/GalleryForm";

export const AddGalleryDialog = () => {
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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Nová galerie</DialogTitle>
          <DialogDescription>Vytvořte novou fotogalerii.</DialogDescription>
        </DialogHeader>
        <GalleryForm setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  );
};
