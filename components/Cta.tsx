import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-24 bg-linear-to-br from-primary via-accent to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-6">
          <h2 className="heading-xl text-white drop-shadow-lg">
            Připojte se k nám!
          </h2>
          <p className="body-lg text-white/95 max-w-2xl mx-auto drop-shadow">
            Hledáme nové členy do naší výjezdové jednotky. Pokud máte zájem
            pomáhat ostatním a stát se součástí naší hasičské rodiny, čeká vás
            výcvik, skvělá parta a nezapomenutelné zážitky.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-10 h-14 text-lg font-bold shadow-2xl"
            >
              Kontaktujte nás
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
