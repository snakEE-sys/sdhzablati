"use client";

import { Button } from "@/components/ui/button";
import { Category } from "../types";

export function PostCategoryFilter({
  categories,
  value,
  onChange,
}: {
  categories: Category[];
  value: Category["name"];
  onChange?: (category: Category["name"]) => void;
}) {
  return (
    <div>
      {categories.map((category: Category) => (
        <Button
          key={category.name}
          onClick={() => onChange?.(category.name)}
          data-active={value === category.name}
          className={`px-4 py-2 mx-1 rounded-full text-sm font-medium transition-colors ${
            value === category.name
              ? "bg-gradient-to-r from-red-600 to-orange-500 text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
