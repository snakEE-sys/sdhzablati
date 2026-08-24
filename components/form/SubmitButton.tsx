import { useStore } from "@tanstack/react-form";
import { useFormContext } from ".";
import { Button } from "../ui/button";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const form = useFormContext();

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ]);

  return (
    <Button type="submit" disabled={isSubmitting || !canSubmit}>
      {children}
    </Button>
  );
}
