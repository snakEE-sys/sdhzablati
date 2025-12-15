"use client";

import { PostsSchema, postsSchema } from "@/utils/posts-schema";
import { FormSubmit } from "./FormSubmit";
import { useForm } from "@tanstack/react-form";
import { TitleField } from "./TitleField";
import { CategoryField } from "./CategoryField";
import { ExcerptField } from "./ExcerptField";
import { ContentField } from "./ContentField";
import { ImageField } from "./ImageField";
import { DialogFooter } from "../ui/dialog";
import { useSession } from "@/utils/auth-client";
import { useCreatePost } from "@/app/hooks/useCreatePost";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const MainForm = ({ setOpenDialog }) => {
  const user = useSession();
  const queryClient = useQueryClient();

  const { mutate: newPost } = useMutation({
    mutationFn: useCreatePost,
    onSuccess: () => {
      toast.success("Aktualita byla úspěšně přidána");
      queryClient.invalidateQueries({
        queryKey: ["posts", "statistics", "last-three-posts"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      form.reset();
      setOpenDialog(false);
    },
  });

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      category: "",
      featured: false,
      author: user.data?.user.name,
    } as PostsSchema,
    validators: {
      onChange: postsSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      newPost(value);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <TitleField form={form} />
        </div>
        <div className="space-y-2">
          <CategoryField form={form} />
        </div>
        <div className="space-y-2">
          <ExcerptField form={form} />
        </div>
        <div className="space-y-2">
          <ContentField form={form} />
        </div>
        <div className="space-y-2">
          <ImageField form={form} />
        </div>
      </div>
      <DialogFooter>
        <FormSubmit form={form} />
      </DialogFooter>
    </form>
  );
};
