"use client";

import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tags } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getJednotky } from "@/db/queries";

const JednotkyField = ({ form }: { form: any }) => {
  const jednotky = useQuery({
    queryKey: ["jednotky"],
    queryFn: getJednotky,
  });

  return (
    <div className="space-y-2">
      <form.Field
        name="jednotky"
        mode="array"
        children={(field) => (
          <>
            <Label>Jednotky</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start h-max"
                >
                  <Tags className="mr-2 h-4 w-4" />
                  <div className="flex flex-wrap gap-1.5">
                    {!field.state.value.length
                      ? "Vyberte jednotky"
                      : field.state.value.map((selectedJednotka: string) => (
                          <Badge
                            key={selectedJednotka}
                            className="bg-red-100 text-red-800"
                          >
                            {selectedJednotka}
                          </Badge>
                        ))}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="">
                <div className="space-y-2">
                  {jednotky.data?.jednotky.map((jednotka) => (
                    <div
                      key={jednotka.name}
                      className="flex items-center space-x-2 space-y-1"
                    >
                      <Checkbox
                        id={jednotka.name}
                        checked={field.state.value.includes(jednotka.name)}
                        onCheckedChange={() => {
                          if (field.state.value.includes(jednotka.name)) {
                            const indexToRemove = field.state.value.indexOf(
                              jednotka.name
                            );
                            if (indexToRemove > -1) {
                              field.removeValue(indexToRemove);
                            }
                          } else {
                            field.pushValue(jednotka.name);
                          }
                        }}
                      />
                      <Label htmlFor={jednotka.name} className="cursor-pointer">
                        {jednotka.name}
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
export default JednotkyField;
