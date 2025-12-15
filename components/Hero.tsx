import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/landing.jpeg"
        alt="Modern background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-4">
          Sbor dobrovolných hasičů Bohumín - Záblatí
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8">
          Jsme sbor fungující od roku xxxx
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white">
            O našem sboru <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
