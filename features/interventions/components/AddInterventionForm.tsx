"use client";

import { useAppForm } from "@/components/form";
import { AddInterventionFormProps } from "../types";
import { InterventionSchema, type InterventionValues } from "../schema";
import { createIntervention } from "../actions";

export function AddInterventionForm({
  categories,
  subcategories,
  units,
  vehicles,
}: AddInterventionFormProps) {
  const defaultValues: InterventionValues = {
    category: "",
    subCategory: "",
    date: new Date(),
    time: "",
    address: "",
    description: "",
    deployment: [],
    images: [],
  };

  const form = useAppForm({
    formId: "interventionForm",
    defaultValues: defaultValues,
    validators: {
      onChange: InterventionSchema,
    },
    onSubmit: ({ value }) => createIntervention(value),
  });

  return (
    <form
      id="addInterventionForm"
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField
        name="category"
        children={(field) => (
          <field.SelectField
            data={categories}
            label="Kategorie"
            desc="Vyberte kategorii výjezdu"
          />
        )}
      />
      <form.AppField
        name="subCategory"
        children={(field) => (
          <field.SelectField
            data={subcategories}
            label="Podkategorie"
            desc="Vyberte podkategorii výjezdu"
          />
        )}
      />
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
        name="address"
        children={(field) => (
          <field.TextField
            label="Adresa události"
            desc="Zadejte adresu události"
            type="text"
          />
        )}
      />
      <form.AppField
        name="description"
        children={(field) => (
          <field.TextField
            label="Popis události"
            desc="Zadejte popis události"
            type="text"
          />
        )}
      />
      <form.AppField
        name="deployment"
        mode="array"
        children={(field) => (
          <field.DeploymentField units={units} vehicles={vehicles} />
        )}
      />
      <form.AppField
        name="images"
        mode="array"
        children={(field) => (
          <field.ImageFileField
            label="Fotografie"
            desc="Přidejte fotografie z výjezdu"
          />
        )}
      />
      <form.AppForm>
        <form.SubmitButton>Vytvořit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
}
