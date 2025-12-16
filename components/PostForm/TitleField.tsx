"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const TitleField = ({ form }) => {
  return (
    <form.Field
      name="title"
      children={(field) => (
        <>
          <Label htmlFor="title">Titulek</Label>
          <Input
            id="title"
            placeholder="Zadejte titulek aktuality"
            onChange={(e) => field.handleChange(e.target.value)}
          />
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
