import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useFieldContext } from "@/components/form";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { DeploymentPicker } from "./DeploymentPicker";
import { DeploymentItem, Unit, Vehicle } from "../types";
import { FieldErrors } from "@/components/form/FieldErrors";

export function DeploymentField({
  units,
  vehicles,
}: {
  units: Unit[];
  vehicles: Vehicle[];
}) {
  const field = useFieldContext<DeploymentItem[]>();

  return (
    <div className="space-y-6">
      <DeploymentPicker
        units={units}
        vehicles={vehicles}
        onAdd={(newItem) => field.pushValue(newItem)}
        existingItems={field.state.value}
      />
      <Field>
        <FieldContent>
          <div className="space-y-3">
            <FieldLabel>Aktuální seznam vozidel</FieldLabel>
            <div className="grid gap-2">
              {field.state.value.map((item, index) => (
                <div
                  key={`${item.unitId}-${item.vehicleId}`}
                  className="flex items-center justify-between p-3 border rounded-lg bg-card shadow-sm"
                >
                  <div>
                    <div className="font-bold text-sm">
                      {item.vehicleName}
                      <span className="ml-2 text-primary">
                        {item.quantity}x
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">
                      {item.unitName}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => field.removeValue(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {field.state.value.length === 0 && (
                <div className="text-center py-6 border-2 border-dashed rounded-lg text-muted-foreground text-sm">
                  Žádne vozidlo ještě nebylo přidáno k této události.
                </div>
              )}
            </div>
          </div>
          <FieldErrors meta={field.state.meta} />
        </FieldContent>
      </Field>
    </div>
  );
}
