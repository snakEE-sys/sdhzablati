"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DescriptionField = ({ form }) => (
  <div className="space-y-2">
    <form.Field
      name="description"
      children={(field) => (
        <>
          <Label>Popis</Label>
          <Textarea
            className="resize-none field-sizing-fixed"
            onChange={(event) => field.handleChange(event.target.value)}
          />
          {field.state.meta.errors.map((error) => (
            <div className="text-destructive text-sm" key={error?.message}>
              {error?.message}
            </div>
          ))}
        </>
      )}
    />
  </div>
);

export default DescriptionField;
