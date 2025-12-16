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
import { getCategories } from "@/db/queries";

const CategoryField = ({ form }) => {
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="space-y-2">
      <form.Field
        name="category"
        children={(field) => (
          <>
            <Label htmlFor="category">Kategorie</Label>
            <Select
              value={field.state.value}
              onValueChange={(value) => field.setValue(value)}
            >
              <SelectTrigger id="category" className="min-w-full">
                <SelectValue placeholder="Vyberte kategorii" />
              </SelectTrigger>
              <SelectContent>
                {categories.data?.categories.map((category) => (
                  <SelectItem value={category.name} key={category.name}>
                    {category.name}
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

export default CategoryField;
