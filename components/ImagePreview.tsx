import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ImagePreview({
  file,
  onRemove,
}: {
  file: File;
  onRemove: () => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <div className="relative aspect-square rounded-md border bg-muted overflow-hidden">
      {preview ? (
        <Image
          src={preview}
          width={100}
          height={70}
          alt="Preview"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <ImageIcon className="h-6 w-6 text-muted-foreground" />
        </div>
      )}
      <button
        type="button"
        onClick={onRemove}
        className="absolute right-1 top-1 rounded-full bg-destructive p-1 text-white opacity-100 transition-opacity hover:opacity-100 shadow-sm"
      >
        <X className="h-3 w-3" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-[10px] text-white truncate px-2">
        {file.name}
      </div>
    </div>
  );
}
