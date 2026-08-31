"use client";

import { useAppForm } from "@/components/form";
import { Category } from "../types";
import { postsSchema, PostsValues } from "../schema";
import { createPost } from "../actions";
import { toast } from "sonner";

export function AddPostForm({ categories }: { categories: Category[] }) {
  const defaultValues: PostsValues = {
    title: "",
    content: "",
    categoryId: "",
    excerpt: "",
    featured: false,
    published: false,
    image: undefined,
  };
  const form = useAppForm({
    formId: "postForm",
    validators: {
      onBlur: postsSchema,
    },
    defaultValues: defaultValues,
    onSubmit: async ({ value }) => {
      const result = await createPost(value);
      if (!result.success) {
        toast.error(`Chyba! ${result.error}`);
      }
      toast.success("Příspěvek úspěšně vytvořen");
    },
  });
  return (
    <form
      id="addPostForm"
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField
        name="title"
        children={(field) => (
          <field.TextField
            label="Titulek"
            desc="Zadejte titulek aktuality"
            type="text"
          />
        )}
      />
      <form.AppField
        name="categoryId"
        children={(field) => (
          <field.SelectField
            data={categories}
            label="Kategorie"
            desc="Vyberte kategorii aktuality"
          />
        )}
      />
      <form.AppField
        name="excerpt"
        children={(field) => (
          <field.TextField
            label="Úryvek"
            desc="Zadejte úryvek aktuality"
            type="text"
          />
        )}
      />
      <form.AppField
        name="content"
        children={(field) => (
          <field.RichTextField label="Obsah" desc="Zadejte obsah aktuality" />
        )}
      />
      <form.AppField
        name="featured"
        children={(field) => (
          <field.SwitchField
            label="Připnutá"
            desc="Zadejte zda má být aktualita připnutá"
          />
        )}
      />
      <form.AppField
        name="published"
        children={(field) => (
          <field.SwitchField
            label="Publikováno"
            desc="Zadejte zda má být aktualita publikována"
          />
        )}
      />
      <form.AppForm>
        <form.SubmitButton>Vytvořit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
}
