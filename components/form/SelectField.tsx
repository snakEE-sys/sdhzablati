import { SelectContent, SelectItem } from "@radix-ui/react-select";
import { useFieldContext } from ".";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { Select, SelectTrigger, SelectValue } from "../ui/select";
import { FieldErrors } from "./FieldErrors";

type DataProps = {
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
        <FieldDescription>{desc}</FieldDescription>
        <FieldErrors meta={field.state.meta} />
      </FieldContent>
      <Select
        name={field.name}
        value={field.state.value}
        onValueChange={field.handleChange}
      >
        <SelectTrigger
          id={field.name}
          aria-invalid={isInvalid}
          className="min-w-[120px]"
        >
          <SelectValue placeholder="Vybrat" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          {data.map((d) => (
            <SelectItem key={d.name} value={d.name}>
              {d.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
