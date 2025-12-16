"use client";

import { Label } from "@/components/ui/label";
import { TiptapEditor } from "../richTextEditor/Tiptap";
import { useState } from "react";

export const ContentField = ({ form }) => {
  const [content, setContent] = useState("Zde napiš obsah příspěvku..");
  return (
    <form.Field
      name="content"
      children={(field) => (
        <>
          <Label htmlFor="content">Obsah</Label>
          <TiptapEditor
            content={content}
            onChange={(newContent) => {
              setContent(newContent);
              field.handleChange(newContent);
            }}
          />
          {field.state.meta.errors.map((error: Error) => (
            <div className="text-destructive text-sm" key={error?.message}>
              {error?.message}
            </div>
          ))}
        </>
      )}
    />
  );
};
