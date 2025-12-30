import { Button } from "@/components/ui/button";

export const Cta = () => {
  return (
    <>
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container text-center mx-auto">
          <h2 className="text-3xl font-bold mb-6">Staňte se jedním z nás</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Hledáme nové členy do naší výjezdové jednotky. Pokud máte zájem
            pomáhat ostatním a stát se součástí naší hasičské rodiny, neváhejte
            nás kontaktovat.
          </p>
          <Button className="rounded-full bg-white text-red-600 hover:bg-white/90 px-8">
            Kontaktujte nás
          </Button>
        </div>
      </section>
    </>
  );
};
