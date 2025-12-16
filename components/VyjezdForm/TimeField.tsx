"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TimeField = ({ form }) => (
  <div className="space-y-2">
    <form.Field
      name="time"
      children={(field) => (
        <>
          <Label htmlFor="time">Čas</Label>
          <Input
            id="time"
            type="time"
            onChange={(e) => field.handleChange(e.target.value)}
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

export default TimeField;
