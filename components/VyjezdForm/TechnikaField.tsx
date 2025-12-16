"use client";

import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Tags } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { getTechnika } from "@/db/queries";

const TechnikaField = ({ form }) => {
  const techniky = useQuery({
    queryKey: ["technika"],
    queryFn: getTechnika,
  });

  return (
    <div className="space-y-2">
      <form.Field
        name="technika"
        mode="array"
        children={(field) => (
          <>
            <Label>Technika</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start h-max"
                >
                  <Tags className="mr-2 h-4 w-4" />
                  <div className="flex flex-wrap gap-1.5">
                    {!field.state.value.length
                      ? "Vyberte techniku"
                      : field.state.value.map(
                          (selectedTechnika: string, index: number) => (
                            <Badge
                              key={index}
                              className="bg-red-100 text-red-800"
                            >
                              {selectedTechnika}
                            </Badge>
                          )
                        )}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-fit">
                <div className="space-y-2">
                  {techniky.data?.technika.map((technika, index) => (
                    <div
                      key={`${technika.name}-${index}`}
                      className="flex items-center space-x-2 space-y-1"
                    >
                      <Checkbox
                        id={technika.name}
                        checked={field.state.value.includes(technika.name)}
                        onCheckedChange={() => {
                          field.pushValue(technika.name);
                        }}
                      />
                      <Label htmlFor={technika.name} className="cursor-pointer">
                        {technika.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            {field.state.meta.errors.map((error) => (
              <div className="text-destructive text-sm" key={error?.message}>
                {error?.message}
              </div>
            ))}
          </>
        )}
      />
    </div>
  );
};
export default TechnikaField;
