"use client";

import {
  AddressField,
  CategoryField,
  DateField,
  DescriptionField,
  ImagesField,
  JednotkyField,
  SubCategoryField,
  TechnikaField,
  TimeField,
} from "@/components/VyjezdForm/export";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const VyjezdForm = ({ form }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="space-y-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          <CategoryField form={form} />
          <SubCategoryField form={form} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <DateField form={form} />
          <TimeField form={form} />
          <AddressField form={form} />
        </div>
        <JednotkyField form={form} />
        <TechnikaField form={form} />
        <DescriptionField form={form} />
        <ImagesField form={form} />
      </div>
      <DialogFooter>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              disabled={!canSubmit}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Vytvořit výjezd"
              )}
            </Button>
          )}
        ></form.Subscribe>
      </DialogFooter>
    </form>
  );
};
export default VyjezdForm;
