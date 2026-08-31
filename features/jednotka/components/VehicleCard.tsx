import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type VehicleCardProps = {
  vehicle: {
    slug: string;
    name: string;
    type: string;
    description: string;
    image: string;
  };
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link
      href={`/jednotka/technika/${vehicle.slug}`}
      className="group relative block min-h-[420px] overflow-hidden rounded-2xl"
    >
      <Image
        src={vehicle.image}
        alt={vehicle.name}
        fill
        className="object-cover brightness-75 transition duration-500 group-hover:scale-[1.03] group-hover:brightness-[0.6]"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute right-5 top-5 rounded-full bg-custom-dark-red p-3">
        <ArrowUpRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <p className="mb-2 text-sm font-light text-white/70">{vehicle.type}</p>

        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          {vehicle.name}
        </h2>

        <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-white/80">
          {vehicle.description}
        </p>
      </div>
    </Link>
  );
}
