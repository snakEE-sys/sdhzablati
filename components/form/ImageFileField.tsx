"use client";

import { useState } from "react";
import { useFieldContext } from ".";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { FieldErrors } from "./FieldErrors";
import { UploadCloud } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { ImagePreview } from "../ImagePreview";
import { toast } from "sonner";

type ImageFileFieldProps = {
  label: string;
  desc: string;
};

export function ImageFileField({ label, desc }: ImageFileFieldProps) {
  const field = useFieldContext<File[]>();
  const [isDragging, setIsDragging] = useState(false);

  const onFileChange = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files);
    const validFiles: File[] = [];
    const maxSize = 10 * 1024 * 1024;

    newFiles.forEach((file) => {
      if (file.size > maxSize) {
        toast.error(`Soubor ${file.name} je příliš velký (max: 10MB)`);
      } else {
        validFiles.push(file);
      }
    });

    field.handleChange([...(field.state.value || []), ...validFiles]);
  };

  const removeFile = (index: number) => {
    const updated = [...field.state.value];
    updated.splice(index, 1);
    field.handleChange(updated);
  };

  return (
    <Field>
      <FieldContent>
        <FieldLabel>{label}</FieldLabel>
        <FieldDescription className="text-xs text-slate-500">
          {desc}
        </FieldDescription>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            onFileChange(e.dataTransfer.files);
          }}
          className={cn(
            "mt-2 group relative cursor-pointer rounded-lg border-2 border-dashed p-6 transition-colors",
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50",
          )}
        >
          <Input
            type="file"
            multiple
            accept="image/*"
            size={10}
            className="absolute inset-0 z-50 cursor-pointer opacity-0"
            onChange={(e) => onFileChange(e.target.files)}
          />

          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="rounded-full bg-background p-2 shadow-sm">
              <UploadCloud className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium">
              Klikni pro nahrání nebo zde přesuň obrázky.
            </p>
            <p className="text-xs text-muted-foreground">
              .png, .jpg nebo .webp (max. 10MB)
            </p>
          </div>
        </div>

        {/* Preview List */}
        {field.state.value?.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-8 md:grid-cols-10">
            {field.state.value.map((file, index) => (
              <ImagePreview
                key={`${file.name}-${index}`}
                file={file}
                onRemove={() => removeFile(index)}
              />
            ))}
          </div>
        )}

        <FieldErrors meta={field.state.meta} />
      </FieldContent>
    </Field>
  );
}
