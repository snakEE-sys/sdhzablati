import { useFieldContext } from ".";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { FieldErrors } from "./FieldErrors";

type FileFieldProps = {
  label: string;
  desc: string;
  accept: string;
  multiple?: boolean;
};

export function FileField({ label, desc, accept, multiple }: FileFieldProps) {
  const field = useFieldContext<File | File[]>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return null;

    const fileArray = Array.from(files);
    field.setValue(multiple ? fileArray : files[0] || undefined);
  }

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <Input
        id={field.name}
        aria-invalid={isInvalid}
        type="file"
        accept={accept}
        multiple={multiple}
        onBlur={field.handleBlur}
        onChange={handleFileChange}
      />
      <FieldDescription>{desc}</FieldDescription>
      <FieldErrors meta={field.state.meta} />
    </Field>
  );
}
