import { MapPin, Phone, Mail, AlertTriangle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ReactNode } from "react";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <MainContent>
        <EmergencyContact />
        <ContactInformation />
      </MainContent>
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktujte nás</h1>
        <p className="text-lg max-w-3xl text-white/90">
          Máte dotaz nebo potřebujete pomoc? Neváhejte nás kontaktovat. Jsme tu
          pro vás.
        </p>
      </div>
    </section>
  );
};

const EmergencyContact = () => {
  return (
    <div className="mb-16">
      <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-red-200">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/6 flex justify-center">
            <div className="bg-red-100 p-6 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <div className="md:w-5/6">
            <h2 className="text-2xl font-bold mb-4">Tísňové volání</h2>
            <p className="text-slate-700 mb-6">
              V případě požáru, nehody nebo jiné mimořádné události volejte
              tísňovou linku hasičů.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white text-xl py-8 !px-6">
                <Phone className="mr-2 h-6 w-6" /> 150
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-red-600 text-red-600 hover:bg-red-100 text-xl py-8 !px-6"
              >
                <Phone className="mr-2 h-6 w-6" /> 112
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const MainContent = ({ children }: { children: ReactNode }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};
const ContactInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <Card className="border-none shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-4">Adresa</h3>
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <MapPin className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="text-slate-700">
                Sbor dobrovolných hasičů Bohumín - Záblatí
                <br />
                Sokolská 208
                <br />
                735 52 Bohumín
              </p>
            </div>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <Image
              src="/images/mapa.png"
              alt="Mapa s umístěním hasičské zbrojnice"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="border-none shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-4">Kontakty</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Phone className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Telefon</p>
                <p className="text-slate-700">+420 731 130 689</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Mail className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium">E-mail</p>
                <p className="text-slate-700">info@sdhzablati.cz</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Building2 className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="font-medium">IČO</p>
                <p className="text-slate-700">64630722</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-none shadow-lg rounded-2xl">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-4">Vedení sboru</h3>
          <div className="space-y-6">
            <div>
              <p className="font-medium">Starosta sboru</p>
              <p className="text-slate-700">Jan Plasgura</p>
              <p className="text-slate-700">info@sdhzablati.cz</p>
              <p className="text-slate-700">+420 731 130 689</p>
            </div>
            <div>
              <p className="font-medium">Velitel jednotky</p>
              <p className="text-slate-700">Jan Plasgura</p>
              <p className="text-slate-700">info@sdhzablati.cz</p>
              <p className="text-slate-700">+420 731 130 689</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
