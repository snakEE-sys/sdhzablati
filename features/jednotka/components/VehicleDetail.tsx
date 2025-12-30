import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Vehicle } from "../types";

export function VehicleDetail({
  data,
  color,
}: {
  data: Vehicle;
  color: "red" | "blue" | "green";
}) {
  const colorClass =
    color === "red" ? "red" : color === "blue" ? "blue" : "green";

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">{data.name}</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge
              className={`bg-${colorClass}-100 text-${colorClass}-800 rounded-full`}
            >
              {data.manufacter}
            </Badge>
            <Badge className="bg-slate-100 text-slate-800 rounded-full">
              Rok výroby: {data.manufacter_year}
            </Badge>
          </div>
          <p className="text-slate-700 mb-6">{data.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">Technické parametry</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                {data.parameters.map((p: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className={`text-${colorClass}-600 mr-2`}>•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Vybavení</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                {data.equipment.map((e: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className={`text-${colorClass}-600 mr-2`}>•</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="relative aspect-square lg:aspect-auto">
          <Image
            src={data.pictures[0] || "/placeholder.svg"}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-8 border-t">
        <h4 className="font-bold mb-4">Fotogalerie</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.pictures.slice(1).map((picture: string, i: number) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-video">
              <Image
                src={picture || "/placeholder.svg"}
                alt={data.name}
                width={400}
                height={225}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
