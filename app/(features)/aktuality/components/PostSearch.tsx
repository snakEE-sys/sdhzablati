"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function PostSearch({
  onSearchTermChange,
}: {
  onSearchTermChange?: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(
    () => onSearchTermChange?.(searchTerm),
    [searchTerm, onSearchTermChange]
  );
  return (
    <>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
      <Input
        placeholder="Hledat v aktualitách..."
        className="pl-10 rounded-full border-slate-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}
