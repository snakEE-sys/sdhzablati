import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus, Minus, PlusCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { DeploymentPickerProps } from "../types";

export function DeploymentPicker({
  units,
  vehicles,
  onAdd,
  existingItems,
}: DeploymentPickerProps) {
  const [unitId, setUnitId] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [qty, setQty] = useState(1);

  const isDuplicate = existingItems.some(
    (item) => item.unitId === unitId && item.vehicleId === vehicleId
  );

  const selectedUnit = units.find((u) => u.id === unitId);

  const handleAdd = () => {
    if (!selectedUnit) return;
    const vehicle = vehicles.find((v) => v.id === vehicleId);
    if (!vehicle) return;

    onAdd({
      unitId: selectedUnit.id,
      unitName: selectedUnit.name,
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      quantity: qty,
    });

    setUnitId("");
    setVehicleId("");
    setQty(1);
  };

  return (
    <div className="p-4 border rounded-xl bg-muted/40 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs">Jednotka</Label>
          <Select
            value={unitId}
            onValueChange={(v) => {
              setUnitId(v);
              setVehicleId("");
            }}
          >
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Vyberte jednotku" />
            </SelectTrigger>
            <SelectContent>
              {units.map((u) => (
                <SelectItem key={u.id} value={u.id}>
                  {u.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs">Vozidlo</Label>
          <Select
            value={vehicleId}
            onValueChange={setVehicleId}
            disabled={!unitId}
          >
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Vyberte vozidlo" />
            </SelectTrigger>
            <SelectContent>
              {vehicles.map((v) => (
                <SelectItem
                  key={v.id}
                  value={v.id}
                  disabled={existingItems.some(
                    (i) => i.unitId === unitId && i.vehicleId === v.id
                  )}
                >
                  {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 border rounded-md px-2 py-1 bg-background">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            type="button"
            onClick={() => setQty(Math.max(1, qty - 1))}
          >
            <Minus className="h-3" />
          </Button>
          <span className="w-4 text-center text-sm font-medium">{qty}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            type="button"
            onClick={() => setQty(qty + 1)}
          >
            <Plus className="h-3" />
          </Button>
        </div>

        <Button
          type="button"
          size="sm"
          className="h-9"
          disabled={!vehicleId || isDuplicate}
          onClick={handleAdd}
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Přidat vozidlo
        </Button>
      </div>
      {isDuplicate && (
        <p className="text-[10px] text-destructive text-right">
          Vybrané vozidlo je již spojeno s touto jednotkou.
        </p>
      )}
    </div>
  );
}
