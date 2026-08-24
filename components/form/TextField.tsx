import { useFieldContext } from ".";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { FieldErrors } from "./FieldErrors";

type TextFieldProps = {
  label: string;
  desc: string;
  type: string;
};

export function TextField({ label, desc, type }: TextFieldProps) {
  const field = useFieldContext<string>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        aria-invalid={isInvalid}
        type={type}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      <FieldDescription className="text-xs text-slate-500">
        {desc}
      </FieldDescription>
      <FieldErrors meta={field.state.meta} />
    </Field>
  );
}
