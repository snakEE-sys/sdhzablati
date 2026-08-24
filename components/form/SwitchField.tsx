import { useFieldContext } from ".";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { Switch } from "../ui/switch";
import { FieldErrors } from "./FieldErrors";

type SwitchFieldProps = {
  label: string;
  desc: string;
};

export function SwitchField({ label, desc }: SwitchFieldProps) {
  const field = useFieldContext<boolean>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <FieldContent>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <FieldDescription>{desc}</FieldDescription>
        <FieldErrors meta={field.state.meta} />
      </FieldContent>
      <Switch
        id={field.name}
        name={field.name}
        checked={field.state.value}
        onBlur={field.handleBlur}
        onCheckedChange={field.handleChange}
        aria-invalid={isInvalid}
      />
    </Field>
  );
}
