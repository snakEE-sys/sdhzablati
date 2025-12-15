"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "@tanstack/react-form";
import { vyjezdySchema, VyjezdSchema } from "@/utils/vyjezd-schema";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import VyjezdForm from "./VyjezdForm/VyjezdForm";
import { createVyjezd } from "@/app/hooks/useCreateVyjezd";

export function VyjezdAddDialog() {
  const [openDialog, setOpenDialog] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: newVyjezd } = useMutation({
    mutationFn: createVyjezd,
    onSuccess: () => {
      toast.success("Výjezd byl úspěšně přidán");
      queryClient.invalidateQueries({
        queryKey: ["vyjezdy", "statistics", "last-three-vyjezdy"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      form.reset();
      setOpenDialog(false);
    },
  });

  const form = useForm({
    defaultValues: {
      category: "",
      subcategory: "",
      date: "",
      time: "",
      address: "",
      jednotky: ["JSDH Bohumín - Záblatí"],
      technika: [],
      description: "",
      images: [],
    } as VyjezdSchema,
    validators: {
      onChange: vyjezdySchema,
    },
    onSubmit: async ({ value }) => {
      newVyjezd(value);
      console.log(value);
    },
  });

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
      <DialogContent className="sm:max-w-[700px] sm:max-h-8/9 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Nový výjezd</DialogTitle>
          <DialogDescription>Přidejte nový výjezd jednotky.</DialogDescription>
        </DialogHeader>
        <VyjezdForm form={form} />
      </DialogContent>
    </Dialog>
  );
}

export default VyjezdAddDialog;
