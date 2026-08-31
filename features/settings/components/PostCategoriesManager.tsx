"use client";

import { Tags } from "lucide-react";
import { SettingsList } from "./SettingsList";
import { DeleteDialog } from "./DeleteDialog";
import { useState } from "react";
import { Category } from "@/features/posts/types";
import CategoryDialog from "./CategoryDialog";
import {
  createPostCategory,
  deletePostCategory,
  editPostCategory,
} from "@/features/posts/actions";

export function PostCategoriesManager({
  categories,
}: {
  categories: Category[];
}) {
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
        title="Kategorie aktualit"
        description="Správa kategorií příspěvků"
        icon={Tags}
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
            editPostCategory(value.name, category.id);
          } else {
            createPostCategory(value.name);
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

          deletePostCategory(selectedCategory.id);
        }}
      />
    </>
  );
}
