import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryColor } from "@/utils/category-color";
import { PostSidebarProps } from "../types";

export function PostSidebar({ author, category }: PostSidebarProps) {
  return (
    <div className="sticky top-24">
      <h3 className="text-xl font-bold mb-4">Autor</h3>
      <Card className="border-none shadow-md rounded-2xl mb-8">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="rounded-full overflow-hidden w-16 h-16 bg-slate-100 flex items-center justify-center">
              <User className="h-8 w-8 text-slate-400" />
            </div>
            <div>
              <h4 className="font-bold">{author.name}</h4>
              <p className="text-sm text-slate-500">Člen SDH</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Autor článků o činnosti našeho sboru a technickém vybavení.
          </p>
        </CardContent>
      </Card>

      <h3 className="text-xl font-bold mb-4">Kategorie</h3>
      <div className="flex flex-wrap gap-2 mb-8">
        <Badge className={`${getCategoryColor(category.name)} rounded-full`}>
          {category.name}
        </Badge>
      </div>
    </div>
  );
}
