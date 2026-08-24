import { useFieldContext } from ".";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";
import { FieldErrors } from "./FieldErrors";

type TextareaFieldProps = {
  label: string;
  desc: string;
};

export function TextareaField({ label, desc }: TextareaFieldProps) {
  const field = useFieldContext<string>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Textarea
        id={field.name}
        aria-invalid={isInvalid}
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
