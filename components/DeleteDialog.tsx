"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface IProps {
  type: "posts" | "vyjezdy" | "galerie" | "fotky";
  itemIdSlug: string;
  children: React.ReactNode;
}

const DeleteDialog = ({ type, itemIdSlug, children }: IProps) => {
  const [open, setOpen] = useState(false);

  const itemNames = {
    posts: { title: "příspěvek", msg: "tento příspěvek" },
    vyjezdy: { title: "výjezd", msg: "tento výjezd" },
    galerie: { title: "galerií", msg: "tuto galerií" },
    fotky: { title: "fotku", msg: "tuto fotku" },
  };

  const itemName = itemNames[type];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Smazat {itemName.title}</DialogTitle>
          <DialogDescription>
            Opravdu chete smazat {itemName.msg}? Tato akce je nevratná.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setOpen(false)}
          >
            Zrušit
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              handleDelete(type, itemIdSlug);
              setOpen(false);
            }}
          >
            Smazat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteDialog;

async function handleDelete(type: string, itemIdSlug: string) {
  const url = `http://localhost:3000/api/dashboard/${type}?id=${itemIdSlug}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      toast.error(`Něco se nepovedlo ${response.status}`);
      return;
    }
  } catch (error) {
    throw new Error(error as string);
  }
}
