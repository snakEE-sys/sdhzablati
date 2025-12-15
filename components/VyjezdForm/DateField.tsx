"use client";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cs } from "date-fns/locale";

const DateField = ({ form }: { form: any }) => (
  <div className="space-y-2">
    <form.Field
      name="date"
      children={(field) => (
        <>
          <Label htmlFor="date">Datum</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="date"
              >
                <CalendarIcon className="h-4 w-4" />
                {field.state.value
                  ? format(field.state.value, "PPP", { locale: cs })
                  : "Vyberte datum"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                required
                mode="single"
                locale={cs}
                selected={
                  field.state.value ? new Date(field.state.value) : undefined
                }
                onSelect={(value: Date) => {
                  const isoDateString = format(
                    value,
                    "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
                  );
                  field.setValue(isoDateString);
                }}
              />
            </PopoverContent>
          </Popover>
          {field.state.meta.errors.map((error: Error) => (
            <div className="text-destructive text-sm" key={error?.message}>
              {error?.message}
            </div>
          ))}
        </>
      )}
    />
  </div>
);

export default DateField;
