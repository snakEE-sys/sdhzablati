"use client";

import { useAppForm } from "@/components/form";
import { DeploymentItem, Intervention } from "../types";
import { InterventionSchema } from "../schema";

export function AddInterventionForm() {
  const defaultValues: Omit<Intervention, "id"> = {
    category: "",
    subCategory: "",
    date: new Date(),
    time: "",
    address: "",
    description: "",
    deployment: [] as DeploymentItem[],
    images: [],
  };

  const form = useAppForm({
    formId: "interventionForm",
    defaultValues: defaultValues,
    validators: {
      onSubmit: InterventionSchema,
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
        name="date"
        children={(field) => (
          <field.DateField
            label="Datum události"
            desc="Zadejte datum události"
          />
        )}
      />
      <form.AppField
        name="time"
        children={(field) => (
          <field.TimeField label="Čas události" desc="Zadejte čas události" />
        )}
      />
      <form.AppField
        name="description"
        children={(field) => (
          <field.TextField
            label="Popis události"
            desc="Zadejte popis události"
          />
        )}
      />
      <form.AppField
        name="deployment"
        children={(field) => <field.DeploymentField units={units} />}
      />
    </form>
  );
}
