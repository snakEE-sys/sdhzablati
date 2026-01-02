import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { TextField } from "./TextField";
import { TextareaField } from "./TextareaField";
import { SwitchField } from "./SwitchField";
import { DeploymentField } from "@/features/interventions/components/DeploymentField";

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextareaField,
    SwitchField,
    DeploymentField,
  },
  formComponents: {},
  fieldContext,
  formContext,
});
