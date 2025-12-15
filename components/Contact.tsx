import Image from "next/image";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <>
      <section id="kontakt" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Kontaktujte nás
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden h-full">
                <Image
                  src="/images/landing.jpeg"
                  alt="Mapa s umístěním hasičské zbrojnice"
                  width={800}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Adresa</h3>
                    <p className="text-slate-600">
                      Sokolská 208
                      <br />
                      735 52 Bohumín
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-slate-600">+420 731 130 689</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">E-mail</h3>
                    <p className="text-slate-600">info@sdhzablati.cz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Building2 className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">IČO</h3>
                    <p className="text-slate-600">64630722</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
