"use client";

import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export const ImageField = ({ form }) => {
  return (
    <form.Field
      name="image"
      children={(field) => (
        <>
          <Label htmlFor="post-image">Obrázek</Label>
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-slate-400 mb-2" />
            <p className="text-sm text-slate-500 mb-2">
              Přetáhněte sem obrázek nebo klikněte pro výběr
            </p>
            <Button variant="outline" size="sm">
              Vybrat soubor
            </Button>
          </div>
          {/*Rich text editor*/}
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
