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
import { Category, SubCategory } from "@/features/interventions/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { FolderTree } from "lucide-react";

type SubcategoryDialogProps = {
  subCategory: SubCategory | null;
  category: Category | null;
  categories: Category[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (
    value: { name: string; categoryId: string },
    category: Category | null,
  ) => Promise<void> | void;
};

export default function SubcategoryDialog({
  subCategory,
  category,
  categories,
  open,
  onOpenChange,
  onSubmit,
}: SubcategoryDialogProps) {
  const isEditing = !!subCategory;
  const form = useAppForm({
    formId: "subCategoryDialog",
    defaultValues: {
      name: subCategory?.name ?? "",
      categoryId: category?.id ?? "",
    },
    onSubmit: ({ value }) => {
      onSubmit(value, subCategory);
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
                {isEditing ? "Upravit podkategorii" : "Nová podkategorie"}
              </DialogTitle>
              <DialogDescription className="mt-1">
                {isEditing
                  ? "Upravte název podkategorie."
                  : "Vytvořte novou podkategorii."}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form
          id="subCategoryDialog"
          className="space-y-6"
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
                label="Název podkategorie"
                desc="Zadejte název podkategorie"
              />
            )}
          />
          <form.AppField
            name="categoryId"
            children={(field) => (
              <field.SelectField
                data={categories}
                label="Vyberte kategorií"
                desc="Vyberte kategorií ke které zadaná podkategorie náleží"
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
