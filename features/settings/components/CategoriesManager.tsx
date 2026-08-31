"use client";

import { useState } from "react";
import { Folder } from "lucide-react";

import { SettingsList } from "./SettingsList";
import { DeleteDialog } from "./DeleteDialog";
import { Category } from "@/features/interventions/types";
import CategoryDialog from "./CategoryDialog";
import {
  createInterventionCategory,
  deleteInterventionCategory,
  editInterventionCategory,
} from "@/features/interventions/actions";

type Props = {
  categories: Category[];
};

export function CategoriesManager({ categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleAdd() {
    setSelectedCategory(null);
    setDialogOpen(true);
  }

  function handleEdit(category: Category) {
    setSelectedCategory(category);
    setDialogOpen(true);
  }

  function handleDelete(category: Category) {
    setSelectedCategory(category);
    setDeleteOpen(true);
  }

  return (
    <>
      <SettingsList
        title="Kategorie výjezdů"
        description="Kategorie pro evidenci výjezdů"
        icon={Folder}
        items={categories}
        addLabel="Přidat kategorii"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <CategoryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        category={selectedCategory}
        onSubmit={(value, category) => {
          if (category) {
            editInterventionCategory(category.id, value.name);
          } else {
            createInterventionCategory(value.name);
          }
        }}
      />

      <DeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Smazat kategorií ${selectedCategory?.name}?`}
        description="Tato akce je nevratná."
        onDelete={() => {
          if (!selectedCategory) return;

          deleteInterventionCategory(selectedCategory.id);
        }}
      />
    </>
  );
}
