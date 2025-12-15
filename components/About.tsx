import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <>
      <section id="o-nas" className="py-16 bg-red-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">O našem sboru</h2>
              <p className="text-slate-700 mb-4">
                Náš sbor dobrovolných hasičů byl založen v roce 1925 a od té
                doby nepřetržitě slouží občanům naší obce. Jsme hrdí na naši
                tradici a zároveň se snažíme držet krok s moderními
                technologiemi a postupy.
              </p>
              <p className="text-slate-700 mb-6">
                Naším posláním je ochrana životů, zdraví a majetku obyvatel před
                požáry a poskytování pomoci při živelných pohromách a jiných
                mimořádných událostech.
              </p>
              <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white">
                Naše historie <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="md:w-1/2 rounded-2xl overflow-hidden">
              <Image
                src="/images/landing.jpeg"
                alt="Hasičská zbrojnice"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
