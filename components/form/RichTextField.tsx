import { useFieldContext } from ".";
import { TiptapEditor } from "../richTextEditor/Tiptap";
import { Field, FieldDescription, FieldLabel } from "../ui/field";
import { FieldErrors } from "./FieldErrors";

type RichTextFieldProps = {
  label: string;
  desc: string;
};

export function RichTextField({ label, desc }: RichTextFieldProps) {
  const field = useFieldContext<string>();

  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
      <TiptapEditor content={field.state.value} onChange={field.handleChange} />
      <FieldDescription className="text-xs text-slate-500">
        {desc}
      </FieldDescription>
      <FieldErrors meta={field.state.meta} />
    </Field>
  );
}
