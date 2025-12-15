"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { getSubcategories } from "@/db/queries";

const SubCategoryField = ({ form }: { form: any }) => {
  const subCategories = useQuery({
    queryKey: ["subCategories"],
    queryFn: getSubcategories,
  });

  return (
    <div className="space-y-2">
      <form.Field
        name="subcategory"
        children={(field) => (
          <>
            <Label htmlFor="subcategory">Podkategorie</Label>
            <Select
              value={field.state.value}
              onValueChange={(value) => field.setValue(value)}
            >
              <SelectTrigger id="subcategory" className="min-w-full">
                <SelectValue placeholder="Vyberte podkategorii" />
              </SelectTrigger>
              <SelectContent>
                {subCategories.data?.subcategories.map((subCategory) => (
                  <SelectItem value={subCategory.name} key={subCategory.name}>
                    {subCategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {field.state.meta.errors.map((error) => (
              <div className="text-destructive text-sm" key={error?.message}>
                {error?.message}
              </div>
            ))}
          </>
        )}
      />
    </div>
  );
};

export default SubCategoryField;
