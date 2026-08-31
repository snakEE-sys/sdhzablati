"use client";

import { GitBranch } from "lucide-react";
import { SettingsList } from "./SettingsList";
import { useState } from "react";
import { DeleteDialog } from "./DeleteDialog";
import SubcategoryDialog from "./SubcategoryDialog";
import {
  createInterventionSubcategory,
  deleteInterventionSubcategory,
  editInterventionSubcategory,
} from "@/features/interventions/actions";

type Category = {
  id: string;
  name: string;
};

type Subcategory = {
  id: string;
  name: string;
  categoryId: string;
};

export function SubcategoriesManager({
  categories,
  subcategories,
}: {
  categories: Category[];
  subcategories: Subcategory[];
}) {
  const [selectedSubcategory, setSelectedSubcategory] =
    useState<Subcategory | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  function handleAdd() {
    setSelectedSubcategory(null);
    setSelectedCategory(null);
    setDialogOpen(true);
  }

  function handleEdit(subCategory: Subcategory) {
    const category =
      categories.find((category) => category.id === subCategory.categoryId) ??
      null;

    setSelectedSubcategory(subCategory);
    setSelectedCategory(category);
    setDialogOpen(true);
  }

  function handleDelete(subCategory: Subcategory) {
    setSelectedSubcategory(subCategory);
    setDeleteOpen(true);
  }

  return (
    <>
      <SettingsList
        title="Podkategorie"
        description="Správa podkategorií výjezdů"
        icon={GitBranch}
        items={subcategories}
        addLabel="Přidat podkategorii"
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <SubcategoryDialog
        subCategory={selectedSubcategory}
        category={selectedCategory}
        categories={categories}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSubmit={(value, subCategory) => {
          if (subCategory) {
            editInterventionSubcategory(
              value.name,
              value.categoryId,
              subCategory.id,
            );
          } else {
            createInterventionSubcategory(value.name, value.categoryId);
          }
        }}
      />
      <DeleteDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        title={`Smazat podkategorií ${selectedSubcategory?.name}?`}
        description="Tato akce je nevratná."
        onDelete={() => {
          if (!selectedSubcategory) return;

          deleteInterventionSubcategory(selectedSubcategory.id);
        }}
      />
    </>
  );
}
