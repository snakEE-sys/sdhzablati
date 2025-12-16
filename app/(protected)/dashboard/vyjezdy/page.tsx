"use client";

import { useGetVyjezdy } from "@/app/hooks/useGetVyjezdy";
import VyjezdAddDialog from "@/components/AddVyjezdDialog";
import DeleteDialog from "@/components/DeleteDialog";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { getCategoryColor } from "@/utils/category-color";
import { VyjezdSchema } from "@/utils/vyjezd-schema";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Calendar,
  ChevronRight,
  Clock,
  Edit,
  MapPin,
  Search,
  Trash2,
} from "lucide-react";
import { useDate } from "@/app/hooks/useDate";
import { useTime } from "@/app/hooks/useTime";

const DashboardVyjezdy = () => {
  const {
    data: vyjezdy,
    /*error,*/
    /*isPending,*/
  } = useSuspenseQuery({
    queryKey: ["vyjezdy"],
    queryFn: useGetVyjezdy,
  });
  return (
    <div className="flex min-h-[100dvh] bg-slate-50">
      <Sidebar />
      <div className="flex-1 md:ml-64 pt-16 md:pt-0">
        <main className="p-4 md:p-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Výjezdy</h1>
              <VyjezdAddDialog />
            </div>
          </div>
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input placeholder="Hledat výjezdy..." className="pl-9" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Všechny kategorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Všechny kategorie</SelectItem>
                      <SelectItem value="pozar">Požár</SelectItem>
                      <SelectItem value="technicka-pomoc">
                        Technická pomoc
                      </SelectItem>
                      <SelectItem value="zachrana">
                        Záchrana osob a zvířat
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Řazení" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Nejnovější</SelectItem>
                      <SelectItem value="oldest">Nejstarší</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {vyjezdy.map((vyjezd: VyjezdSchema) => (
              <Card key={vyjezd.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          className={`${getCategoryColor(vyjezd.category)} rounded-full`}
                        >
                          {vyjezd.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {useDate(vyjezd.date)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {useTime(vyjezd.time)}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 uppercase">
                        {vyjezd.subcategory}
                      </h3>
                      <div className="flex items-start gap-1 text-slate-600">
                        <MapPin className="h-4 w-4 mt-0.5 text-slate-400" />
                        <span>{vyjezd.address}</span>
                      </div>
                    </div>
                    <div className="flex md:flex-col gap-2 md:justify-center">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Edit className="h-4 w-4" />
                        <span className="hidden sm:inline">Upravit</span>
                      </Button>
                      <DeleteDialog type={"vyjezdy"} itemIdSlug={vyjezd.id || ""}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 gap-1"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="hidden sm:inline">Smazat</span>
                        </Button>
                      </DeleteDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="gap-1">
              Načíst další
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default DashboardVyjezdy;
