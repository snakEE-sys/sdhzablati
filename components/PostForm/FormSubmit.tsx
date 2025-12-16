"use client";

import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

export const FormSubmit = ({ form }) => {
  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => (
        <Button
          type="submit"
          disabled={!canSubmit}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Vytvořit výjezd"
          )}
        </Button>
      )}
    ></form.Subscribe>
  );
};
