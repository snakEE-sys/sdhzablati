"use client";

import { useAppForm } from "@/components/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Category } from "@/features/interventions/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { FolderTree } from "lucide-react";

type CategoryDialogProps = {
  category: Category | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (
    value: { name: string },
    category: Category | null,
  ) => Promise<void> | void;
};

export default function CategoryDialog({
  category,
  open,
  onOpenChange,
  onSubmit,
}: CategoryDialogProps) {
  const isEditing = !!category;
  const form = useAppForm({
    formId: "categoryDialog",
    defaultValues: {
      name: category?.name ?? "",
    },
    onSubmit: ({ value }) => {
      onSubmit(value, category);
      onOpenChange(false);
    },
  });
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-red-50 p-2 text-red-600">
              <FolderTree className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle>
                {isEditing ? "Upravit kategorii" : "Nová kategorie"}
              </DialogTitle>
              <DialogDescription className="mt-1">
                {isEditing
                  ? "Upravte název kategorie."
                  : "Vytvořte novou kategorii."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form
          id="categoryDialog"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.AppField
            name="name"
            listeners={{
              onUnmount: () => {
                form.reset();
              },
            }}
            children={(field) => (
              <field.TextField
                type="text"
                label="Název kategorie"
                desc="Zadejte název kategorie"
              />
            )}
          />
          <DialogFooter>
            <DialogClose>Zrušit</DialogClose>
            <form.AppForm>
              <form.SubmitButton>
                {isEditing ? "Upravit" : "Vytvořit"}
              </form.SubmitButton>
            </form.AppForm>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
