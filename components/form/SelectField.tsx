"use client";
import { useFieldContext } from ".";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FieldErrors } from "./FieldErrors";

type DataProps = {
  id: string;
  name: string;
};
type SelectFieldProps = {
  data: DataProps[];
  label: string;
  desc: string;
};
export function SelectField({ data, label, desc }: SelectFieldProps) {
  const field = useFieldContext<string>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field>
      <FieldContent data-invalid={isInvalid}>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <Select
          name={field.name}
          value={field.state.value}
          onValueChange={field.handleChange}
        >
          <SelectTrigger
            id={field.name}
            aria-invalid={isInvalid}
            className="min-w-[180px]"
            onBlur={field.handleBlur}
          >
            <SelectValue placeholder="Vybrat" />
          </SelectTrigger>
          <SelectContent position="popper">
            {data.map((d) => (
              <SelectItem key={d.id} value={d.id}>
                {d.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldDescription className="text-xs text-slate-500">
          {desc}
        </FieldDescription>
        <FieldErrors meta={field.state.meta} />
      </FieldContent>
    </Field>
  );
}
