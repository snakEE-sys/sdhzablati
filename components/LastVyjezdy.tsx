"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Clock, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/utils/category-color";
import DeleteDialog from "@/components/DeleteDialog";
import AddVyjezdDialog from "@/components/AddVyjezdDialog";
import Link from "next/link";
import { useGetDashboardVyjezdy } from "@/app/hooks/useGetDashboardVyjezdy";
import { useSuspenseQuery } from "@tanstack/react-query";
import { VyjezdSchema } from "@/utils/vyjezd-schema";
import { useDate } from "@/app/hooks/useDate";
import { useTime } from "@/app/hooks/useTime";

export function LastVyjezdy() {
  const { data: vyjezdy } = useSuspenseQuery({
    queryKey: ["last-three-vyjezdy"],
    queryFn: useGetDashboardVyjezdy,
  });

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Poslední výjezdy</CardTitle>
            <AddVyjezdDialog />
          </div>
          <CardDescription>Nedávné zásahy jednotky</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-4">
            {vyjezdy.map((vyjezd: VyjezdSchema) => (
              <div key={vyjezd.id} className="border rounded-lg p-3">
                <div className="flex justify-between items-start mb-1">
                  <Badge
                    className={`${getCategoryColor(vyjezd.category)} rounded-full`}
                  >
                    {vyjezd.category}
                  </Badge>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-slate-500 hover:text-slate-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <DeleteDialog type={"vyjezdy"} itemIdSlug={vyjezd.id}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 text-slate-500 hover:text-slate-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </DeleteDialog>
                  </div>
                </div>
                <h4 className="font-medium mb-1">{vyjezd.subcategory}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>{useDate(vyjezd.date)}</span>
                  <Clock className="h-3 w-3 ml-2" />
                  <span>{useTime(vyjezd.time)}</span>
                </div>
                <p className="text-xs text-slate-500">{vyjezd.address}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full gap-1">
            <Link href="/dashboard/vyjezdy">Zobrazit všechny</Link>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
