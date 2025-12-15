"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const ExcerptField = ({ form }: { form: any }) => {
  return (
    <form.Field
      name="excerpt"
      children={(field: any) => (
        <>
          <Label htmlFor="name">Úryvek</Label>
          <Input
            id="excerpt"
            placeholder="Krátký úvodní text aktuality"
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
