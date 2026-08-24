import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="o-nas"
      className="min-h-screen overflow-hidden py-12 md:py-18 lg:py-24 bg-custom-blue rounded-3xl m-2 md:m-4"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="mb-16 md:mb-24">
          <h3 className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
            O nás
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 md:mb-12">
            Poznejte nás více
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <Image
                src="/images/landing.jpeg"
                alt="O našem sboru"
                width={900}
                height={500}
                className="rounded-2xl drop-shadow-lg w-full object-cover h-[250px] md:h-[400px]"
              />
            </div>
            <div className="order-2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 md:mb-8 text-custom-medium-grey leading-tight">
                Dobrovolně. Pro obec. Pro vás. Už celé generace.
              </h2>
              <p className="text-custom-light-grey font-light text-base mb-8 max-w-prose">
                Náš sbor není jen o technice a červených autech, ale především o
                lidech, kteří jsou ochotni nezištně obětovat svůj volný čas pro
                bezpečnost ostatních. Navazujeme na bohatou historii našich
                předků a s hrdostí rozvíjíme hasičské řemeslo v naší obci. Jsme
                tu pro vás v dobrém i ve zlém – při zásazích, kulturních akcích
                i práci s mládeží.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-8">
                <div className="flex flex-col flex-1 min-w-[140px] gap-1 bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-2xl md:text-3xl font-bold">70+</h4>
                  <span className="text-custom-medium-grey font-light text-sm md:text-base">
                    Počet členů
                  </span>
                </div>
                <div className="flex flex-col flex-1 min-w-[140px] gap-1 bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="text-2xl md:text-3xl font-bold">136 let</h4>
                  <span className="text-custom-medium-grey font-light text-sm md:text-base">
                    Jsme zde již
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-custom-medium-grey leading-tight">
                Od historických stříkaček k moderní technice.
              </h2>
              <p className="text-custom-light-grey font-light text-base mb-8 md:mb-12 max-w-prose">
                Už více než 130 let jsme pevnou součástí života v naší obci.
                Prošli jsme si časy dobrými i zlými, modernizovali výbavu i
                zázemí, ale naše základní hodnoty – čest a odvaha – zůstávají
                neměnné. S úctou k minulosti hledíme vstříc budoucnosti a další
                generaci hasičů.
              </p>
              <Button
                variant="whiteCapsule"
                className="w-full sm:w-auto h-12 xl:h-15 font-medium text-base xl:text-lg px-6 group flex items-center justify-between sm:justify-start"
              >
                <span>Více z naší historie</span>
                <div className="flex h-8 w-8 xl:h-10 xl:w-10 ml-4 -mr-3 items-center justify-center rounded-full bg-custom-dark-red text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/landing.jpeg"
                alt="Historie sboru"
                width={900}
                height={500}
                className="rounded-2xl drop-shadow-lg w-full object-cover h-[250px] md:h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
