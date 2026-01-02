import { useFieldContext } from ".";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { FieldErrors } from "./FieldErrors";

type TimeFieldProps = {
  label: string;
  desc: string;
};
export function TimeField({ label, desc }: TimeFieldProps) {
  const field = useFieldContext<string>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
  return (
    <Field>
      <FieldContent>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <Input
          type="time"
          id={field.name}
          aria-invalid={isInvalid}
          defaultValue="12:00:00"
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
        <FieldDescription>{desc}</FieldDescription>
        <FieldErrors meta={field.state.meta} />
      </FieldContent>
    </Field>
  );
}
