import { CalendarIcon } from "lucide-react";
import { useFieldContext } from ".";
import { Calendar } from "../ui/calendar";
import { Field, FieldContent, FieldDescription, FieldLabel } from "../ui/field";
import { FieldErrors } from "./FieldErrors";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { cs } from "date-fns/locale";

type DateFieldProps = {
  label: string;
  desc: string;
};
export function DateField({ label, desc }: DateFieldProps) {
  const field = useFieldContext<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

  return (
    <Field data-invalid={isInvalid}>
      <FieldContent>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !field.state.value && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {field.state.value ? (
                format(field.state.value, "PPP", { locale: cs })
              ) : (
                <span>Vyberte datum</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.state.value}
              onSelect={(date) => {
                field.handleChange(date as Date);
                setIsOpen(false);
              }}
              autoFocus
            />
          </PopoverContent>
        </Popover>
        <FieldDescription>{desc}</FieldDescription>
        <FieldErrors meta={field.state.meta} />
      </FieldContent>
    </Field>
  );
}
