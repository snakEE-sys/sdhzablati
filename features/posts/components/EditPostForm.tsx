"use client";

import { useAppForm } from "@/components/form";
import { Category, Post } from "../types";
import { postsSchema, PostsValues } from "../schema";
import { editPost } from "../actions";
import { toast } from "sonner";

export function EditPostForm({
  post,
  categories,
}: {
  post: Post;
  categories: Category[];
}) {
  const defaultValues: PostsValues = {
    title: post.title,
    content: post.content,
    categoryId: post.category.id,
    excerpt: post.excerpt,
    featured: post.featured,
    published: post.published,
    image: undefined,
  };
  const form = useAppForm({
    formId: "postForm",
    validators: {
      onBlur: postsSchema,
    },
    defaultValues: defaultValues,
    onSubmit: async ({ value }) => {
      const result = await editPost(post.id, value);
      if (!result.success) {
        toast.error(`Chyba! ${result.error}`);
      }
      toast.success("Příspěvek úspěšně upraven");
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
