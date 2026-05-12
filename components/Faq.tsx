import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak se mohu stát členem sboru?",
    answer:
      "Stačí nás kontaktovat přes kontaktní formulář na webu nebo telefonicky. Rádi vás pozveme na schůzku, kde vám vše podrobně vysvětlíme. Členství je otevřené pro všechny zájemce z obce i okolí.",
  },
  {
    question: "Jaké jsou požadavky pro vstup?",
    answer:
      "Základní požadavky jsou zdravotní způsobilost a věk minimálně 18 let u zásahové jednotky. Hasičské zkušenosti nejsou nutné — vše potřebné vás naučíme během výcviku. Důležitá je chuť pomáhat a týmový duch.",
  },
  {
    question: "Musím mít hasičské zkušenosti?",
    answer:
      "Ne, vítáme i úplné začátečníky. Zajistíme vám výcvik včetně teorie, praxe, první pomoci a dalšího vzdělávání. Zkušení členové vás provedou celým procesem krok za krokem.",
  },
  {
    question: "Kolik času musím hasičině věnovat?",
    answer:
      "Dobrovolné působení se přizpůsobí vašim možnostem. Obvykle jde o pravidelný výcvik a účast na akcích sboru; u pohotovosti platí domluvený rozpis. Rozumíme, že máte práci i rodinu.",
  },
] as const;

export function Faq() {
  return (
    <section
      id="faq"
      className="overflow-hidden py-12 md:py-18 lg:py-24 bg-white rounded-3xl m-2 md:m-4"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-10 md:mb-14 text-center">
            <h3 className="text-custom-red text-lg md:text-xl font-normal mb-2 md:mb-4">
              FAQ
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 md:mb-4">
              Často kladené otázky
            </h2>
            <p className="text-custom-light-grey font-light text-base max-w-prose mx-auto">
              Odpovědi na nejčastější dotazy ohledně členství a fungování sboru.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-0 rounded-2xl bg-custom-pink/60 px-1 md:px-3 data-[state=open]:bg-custom-pink/90 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-custom-medium-grey hover:no-underline py-5 px-3 md:px-4 [&_svg]:text-custom-red [&_svg]:size-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-custom-light-grey font-light text-base leading-relaxed px-3 md:px-4 pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
