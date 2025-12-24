"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

type Category = {
  label: string;
};

export function PostCategoryFilter({
  onCategoryChange,
}: {
  onCategoryChange?: (category: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Všechny");

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories, // your fetcher
    staleTime: Infinity,
  });

  useEffect(
    () => onCategoryChange?.(selectedCategory),
    [selectedCategory, onCategoryChange]
  );

  return (
    <div>
      {categories.map((category: Category) => (
        <Button
          key={category.label}
          onClick={() => setSelectedCategory(category.label)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category.label
              ? "bg-gradient-to-r from-red-600 to-orange-500 text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
