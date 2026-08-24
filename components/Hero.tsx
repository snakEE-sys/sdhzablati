import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen lg:min-h-screen overflow-hidden bg-custom-pink flex items-center justify-center rounded-3xl m-2 md:m-4">
      <div className="container relative px-8 mt-8 md:mt-0">
        <h1 className="relative z-0 font-big-heading uppercase tracking-wide text-transparent font-medium text-[clamp(3rem,13vw,21rem)] [-webkit-text-stroke:1px_#f63131] xl:mt-8">
          Hasiči
        </h1>
        <h1 className="relative z-20 font-big-heading uppercase tracking-wide text-custom-red drop-shadow-2xl font-medium text-[clamp(3rem,13vw,18rem)] leading-[0.7]">
          Záblatí
        </h1>
        <div className="md:absolute bottom-[2%] right-[5%] z-10 w-1/2 mx-auto xl:w-[40%] max-w-[500px] min-w-[200px] pt-8 sm:pt-0">
          <Image
            className="pointer-events-none"
            src="/hero.png"
            layout="responsive"
            width={100}
            height={100}
            alt="hero"
          />
        </div>
        <p className="lg:text-lg max-w-md text-custom-light-grey mt-8">
          Hasičský sbor Zablatí je zřízen obcí a je určen k hašení požárů,
          provádění záchranných prací při živelních pohromách a jiných
          mimořádných událostech.
        </p>
        <div className="mt-8">
          <Button
            variant="whiteCapsule"
            className="h-12 xl:h-15 font-medium text-base xl:text-lg px-8 group"
          >
            <span>Více informací</span>
            <div className="flex xl:h-10 xl:w-10 h-8 w-8 -mr-6 ml-2 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-14 w-14" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
