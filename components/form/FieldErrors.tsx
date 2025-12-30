import { AnyFieldMeta } from "@tanstack/react-form";
import { FieldError } from "../ui/field";

type FieldErrorsProps = {
  meta: AnyFieldMeta;
};
export function FieldErrors({ meta }: FieldErrorsProps) {
  const isInvalid = meta.isTouched && !meta.isValid;

  if (!isInvalid) return null;

  return <FieldError errors={meta.errors} />;
}
