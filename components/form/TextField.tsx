import { useFieldContext } from ".";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { FieldErrors } from "./FieldErrors";

type TextFieldProps = {
  label: string;
  desc: string;
};

export function TextField({ label, desc }: TextFieldProps) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        aria-invalid={!field.state.meta.isValid}
        type="text"
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
      />
      <FieldDescription>{desc}</FieldDescription>
      <FieldErrors meta={field.state.meta} />
    </Field>
  );
}
