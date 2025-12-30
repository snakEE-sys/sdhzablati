import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { getCategoryColor } from "@/utils/category-color";
import { Intervention } from "../types";

export function InterventionCard({
  intervention,
}: {
  intervention: Intervention;
}) {
  return (
    <Card
      key={intervention.id}
      className="overflow-hidden rounded-2xl border-none shadow-lg hover:shadow-xl transition-shadow"
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 bg-slate-50 p-6 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-slate-100">
            <div className="text-4xl font-bold text-red-600 mb-1">
              #{intervention.id} //Vyjezd - kolikaty v roce UPRAVIT
            </div>
            <div className="text-lg font-medium">{intervention.date}</div>
            <div className="text-slate-500">{intervention.time}</div>
            <Badge
              className={`${getCategoryColor(intervention.category)} rounded-full mt-4`}
            >
              {intervention.category}
            </Badge>
          </div>
          <div className="md:w-3/4 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-slate-500">Kategorie</div>
                <div className="font-medium">
                  {intervention.category} - {intervention.subCategory}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Místo</div>
                <div className="font-medium flex items-center">
                  <MapPin className="h-4 w-4 text-red-600 mr-1" />
                  {intervention.address}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Technika</div>
                <div className="font-medium">
                  {intervention.technique.join(", ")}
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-500">Jednotky</div>
                <div className="font-medium">
                  {intervention.units.join(", ")}
                </div>
              </div>
            </div>
            <p className="text-slate-700">{intervention.description}</p>

            {/* Fotogalerie výjezdu */}
            <div className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {vyjezd.fotky.map((fotka, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden aspect-[4/3] relative group"
                  >
                    <Image
                      src={fotka || "/placeholder.svg"}
                      alt={`Výjezd ${vyjezd.id} - fotka ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
