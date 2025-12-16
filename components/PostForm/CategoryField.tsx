import { useQuery } from "@tanstack/react-query";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { getPostsCategories } from "@/db/queries";

export const CategoryField = ({ form }: { form: unknown }) => {
  const { data: posts_categories } = useQuery({
    queryKey: ["posts_categories"],
    queryFn: getPostsCategories,
  });

  return (
    <form.Field
      name="category"
      children={(field: unknown) => (
        <>
          <Label htmlFor="category">Kategorie</Label>
          <Select
            value={field.state.value}
            onValueChange={(value) => field.setValue(value)}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Vyberte kategorii" />
            </SelectTrigger>
            <SelectContent>
              {posts_categories?.categories.map((category) => (
                <SelectItem value={category.name} key={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {field.state.meta.errors.map((error: Error) => (
            <div className="text-destructive text-sm" key={error?.message}>
              {error?.message}
            </div>
          ))}
        </>
      )}
    />
  );
};
