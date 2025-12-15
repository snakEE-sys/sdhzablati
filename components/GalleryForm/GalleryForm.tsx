import { Field, useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { FormSubmit } from "../PostForm/FormSubmit";
import { DialogFooter } from "../ui/dialog";
import { GallerySchema, gallerySchema } from "@/utils/gallery-schema";
import ImagesField from "../VyjezdForm/ImagesField";
import { useCreateGallery } from "@/app/hooks/useCreateGallery";
import { Label } from "../ui/label";
import { ImageIcon } from "lucide-react";
import { Input } from "../ui/input";

export const GalleryForm = ({ setOpenDialog }) => {
  const queryClient = useQueryClient();

  const { mutate: newGallery } = useMutation({
    mutationFn: useCreateGallery,
    onSuccess: () => {
      toast.success("Galerie byla úspěšně vytvořena");
      queryClient.invalidateQueries({
        queryKey: ["gallery"],
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
      images: [],
    } as GallerySchema,
    validators: {
      onChange: gallerySchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      newGallery(value);
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
          <form.Field
            name="title"
            children={(field: any) => (
              <>
                <Label htmlFor="title">Název</Label>
                <Input
                  id="title"
                  placeholder="Zadejte název galerie"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors.map((error: Error) => (
                  <div
                    className="text-destructive text-sm"
                    key={error?.message}
                  >
                    {error?.message}
                  </div>
                ))}
              </>
            )}
          />
        </div>
        <ImagesField form={form} />
        <div className="space-y-2">
          <Label>Náhled nahraných fotografií</Label>
          <div className="grid grid-cols-3 gap-2">
            <div className="relative aspect-square rounded-md overflow-hidden bg-slate-100 flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-slate-400" />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden bg-slate-100 flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-slate-400" />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden bg-slate-100 flex items-center justify-center">
              <ImageIcon className="h-8 w-8 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <FormSubmit form={form} />
      </DialogFooter>
    </form>
  );
};
