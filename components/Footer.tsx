import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="m-2 md:m-4 bg-custom-dark-grey text-white p-6 md:p-12 rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 z-10 mt-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.svg" alt="logo" height={24} width={140} />
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Jsme sbor dobrovolných hasičů Bohumín - Záblatí působící na úseku
            požární ochrany od roku 1892.
          </p>
        </div>
        <div>
          <h4 className="text-custom-red font-semibold mb-4">Sbor</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition">
                O nás
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Galerie
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Sport
              </Link>
            </li>
          </ul>
        </div>

        {/* Links: Užitečné odkazy */}
        <div>
          <h4 className="text-custom-red font-semibold mb-4">
            Užitečné odkazy
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition">
                HZS MSK
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                SH ČMS
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Město Bohumín
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Socials */}
        <div>
          <h4 className="text-custom-red font-semibold mb-4">Kontaktuje nás</h4>
          <div className="text-sm text-gray-300 space-y-3">
            <p>info@sdhzablati.cz</p>
            <p>Sokolská 208, Bohumín - Záblatí</p>
            <p>+420 731 130 689</p>
          </div>
        </div>
        <div>
          <h4 className="text-custom-red font-semibold mb-2">Sociální sítě</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white transition">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="mt-12 select-none pointer-events-none">
        <h2 className="font-big-heading uppercase text-center tracking-wide text-transparent font-medium text-[clamp(3rem,10vw,13rem)] [-webkit-text-stroke:1px_#f63131]">
          ZÁBLATÍ
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-300">
        <div className="flex gap-4 mt-3">
          <Link href="https://www.facebook.com/SDHBohuminZablati">
            <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
          </Link>
          <Link href="https://www.instagram.com/sdhzablati/">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <p className="text-sm mt-3">
          © 2026 SDH Bohumín - Záblatí. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
