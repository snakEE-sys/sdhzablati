"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AddressField = ({ form }) => (
  <div className="space-y-2 col-span-2">
    <form.Field
      name="address"
      children={(field) => (
        <>
          <Label htmlFor="address">Adresa</Label>
          <Input
            id="address"
            placeholder="Zadejte adresu výjezdu"
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
  </div>
);

export default AddressField;
