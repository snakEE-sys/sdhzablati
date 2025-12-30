"use client";

import { useAppForm } from "@/components/form";
import { Intervention } from "../types";

export function AddInterventionForm() {
  const defaultValues: Omit<Intervention, "id"> = {
    category: "",
    subCategory: "",
    date: "",
    time: "",
    address: "",
    description: "",
    technique: [],
    units: [],
    images: [],
  };

  const form = useAppForm({
    formId: "interventionForm",
    defaultValues: defaultValues,
    validators: {
      onSubmit: interventionSchema,
    },
    onSubmit: ({ value }) => console.log(value),
  });

  return (
    <form
      id="addInterventionForm"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField
        name="description"
        children={(field) => (
          <field.TextField
            label="Popis události"
            desc="Zadejte popis události"
          />
        )}
      />
    </form>
  );
}
