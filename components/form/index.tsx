import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./TextField";
import { TextareaField } from "./TextareaField";
import { SwitchField } from "./SwitchField";
import { DeploymentField } from "@/features/interventions/components/DeploymentField";
import { DateField } from "./DateField";
import { TimeField } from "./TimeField";
import { SelectField } from "./SelectField";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextareaField,
    SelectField,
    SwitchField,
    DeploymentField,
    DateField,
    TimeField,
  },
  formComponents: {},
  fieldContext,
  formContext,
});
