"use client";

import { useAppForm } from "@/components/form";
import { EditInterventionFormProps } from "../types";
import { InterventionSchema, type InterventionValues } from "../schema";
import { editIntervention } from "../actions";

export function EditInterventionForm({
  categories,
  subcategories,
  units,
  vehicles,
  intervention,
}: EditInterventionFormProps) {
  const defaultValues: InterventionValues = {
    category: intervention.category.id,
    subCategory: intervention.subCategory.id,

    date: new Date(intervention.date),
    time: intervention.time,
    address: intervention.address,
    description: intervention.description,

    deployment: intervention.deployment.map((d) => ({
      unitId: d.unit.id,
      unitName: d.unit.name,
      vehicleId: d.vehicle.id,
      vehicleName: d.vehicle.name,
      quantity: d.quantity,
    })),

    images: [],
  };

  const form = useAppForm({
    formId: "interventionForm",
    defaultValues: defaultValues,
    validators: {
      onBlur: InterventionSchema,
    },
    onSubmit: ({ value }) => editIntervention(intervention.id, value),
  });

  return (
    <form
      id="editInterventionForm"
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
        <form.SubmitButton>Upravit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
}
