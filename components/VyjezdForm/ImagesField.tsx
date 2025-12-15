"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useRef } from "react";

function ImagesField({ form }: { form: any }) {
  const fileInput = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-2">
      <form.Field
        name="images"
        mode="array"
        children={(field: any) => (
          <>
            <Label>Fotogalerie</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Upload className="h-5 w-5 mx-auto text-slate-400 mb-2" />
              <p className="text-sm text-slate-500 mb-2">
                Přetáhněte sem fotografie nebo klikněte pro výběr
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInput.current?.click()}
                type="button"
              >
                <Input
                  id="images"
                  type="file"
                  ref={fileInput}
                  hidden
                  multiple
                  accept="image/*"
                  onChange={(event) => {
                    if (event.target.files) {
                      Array.from(event.target.files).forEach((file) => {
                        field.pushValue(file);
                      });
                    }
                  }}
                />
                Vybrat soubory
              </Button>
              <div className="flex flex-wrap gap-1.5 mt-4 text-sm">
                {field.state.value?.map((file: File) => (
                  <span key={file.name}>{file.name}</span>
                ))}
              </div>
            </div>
            {field.state.meta.errors.map((error: Error) => (
              <div className="text-destructive text-sm" key={error?.message}>
                {error?.message}
              </div>
            ))}
          </>
        )}
      />
    </div>
  );
}
export default ImagesField;
