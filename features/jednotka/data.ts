import { Member, Vehicle } from "./types";

export const members: Member[] = [
    {
      name: "Jan Plasgura",
      role: "Velitel jednotky",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Stanislav Tyrala",
      role: "Velitel družstva",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Tomáš Ključik",
      role: "Strojník",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Marek Ključik",
      role: "Strojník",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Lukáš Korčík",
      role: "Hasič",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Andrzej Grabowski",
      role: "Hasič",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "David Olík",
      role: "Hasič",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Daniel Bogdanowicz",
      role: "Hasič",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Tomáš Laubr",
      role: "Velitel družstva",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Michal Dadík",
      role: "Hasič",
      picture: "/images/user_placeholder.png",
    },
    {
      name: "Jan Carbol",
      role: "Hasič",
      picture: "/images/user_placeholder.png"
    }
  ];
  
  // Údaje o technice
export const technique: Record<string, Vehicle> = {
    engine: {
      name: "Cisternová automobilová stříkačka",
      manufacter: "Renault Midlum 4x4",
      manufacter_year: 2006,
      description:
        "Cisternová automobilová stříkačka Renault Midlum je určena pro přepravu požárního družstva 1+5 a hasebních prostředků pro požární zásah vodou nebo pěnou při použití nízkého nebo vysokého tlaku vody. Vozidlo je vybaveno požárním čerpadlem o výkonu 2400 l/min a nádrží na vodu o objemu 2500 litrů.",
      parameters: [
        "Objem nádrže na vodu: 2500 litrů",
        "Objem nádrže na pěnidlo: 250 litrů",
        "Čerpací zařízení: odstředivé, dvoustupňové",
        "Jmenovitý průtok: 2400 l/min při 10 bar",
        "Maximální sací výška: 7,5 m",
        "Posádka: 1+5 osob",
        "Rozměry (d×š×v): 7900×2550×3300 mm",
        "Hmotnost: 14 000 kg",
      ],
      equipment: [
        "Vysokotlaké hasicí zařízení",
        "Asanační lišta",
        "Osvětlovací stožár",
        "Elektrocentrála",
        "Motorová řetězová pila",
        "Rozbrušovací pila",
        "Dýchací přístroje",
        "Prostředky pro likvidaci hmyzu",
      ],
      pictures: [
        "/images/technika/cas/cas_1.jpeg",
        "/images/technika/cas/cas_2.jpeg",
        "/images/technika/cas/cas_3.jpeg",
        "/images/technika/cas/cas_4.jpeg",
      ],
    },
    vehicle: {
      name: "Dopravní automobil",
      manufacter: "VW Crafter",
      manufacter_year: 2015,
      description:
        "Dopravní automobil VW Crafter slouží k přepravě hasičů k místu zásahu a pro logistickou podporu zásahů. Vozidlo je vybaveno základním hasičským vybavením pro prvotní zásah a speciálními prostředky pro technické zásahy.",
      parameters: [
        "Motor: 2.0 TDI 110 kW",
        "Pohon: 4×2",
        "Posádka: 1+8 osob",
        "Rozměry (d×š×v): 6700×2100×2800 mm",
        "Hmotnost: 3500 kg",
      ],
      equipment: [
        "Přenosná motorová stříkačka",
        "Elektrocentrála",
        "Osvětlovací technika",
        "Základní hasební prostředky",
        "Lékárnička",
        "Ruční vyprošťovací nástroje",
        "Radiostanice",
      ],
      pictures: [
        "/images/technika/da/da_1.jpeg",
        "/images/technika/da/da_2.jpeg",
        "/images/technika/da/da_3.jpeg",
        "/images/technika/da/da_4.jpeg",
      ],
    },
    boat: {
      name: "Záchranářský člun",
      manufacter: "Marine 450U",
      manufacter_year: 2021,
      description:
        "Záchranářský člun Marine 450U je určen pro zásahy na vodní hladině, zejména při povodních a záchraně tonoucích osob. Člun je vybaven výkonným motorem a základním záchranářským vybavením.",
      parameters: [
        "Délka: 4,5 m",
        "Šířka: 1,9 m",
        "Hmotnost: 120 kg",
        "Nosnost: 700 kg nebo 6 osob",
        "Motor: Yamaha 50 HP",
        "Materiál: Hypalon/Neopren",
      ],
      equipment: [
        "Záchranné vesty",
        "Házecí pytlíky",
        "Záchranné lano",
        "Pádla",
        "Kotva",
        "Čerpadlo pro odčerpávání vody",
        "Lékárnička",
      ],
      pictures: [
        "/placeholder.svg?height=600&width=800&text=Člun 1",
        "/placeholder.svg?height=600&width=800&text=Člun 2",
        "/placeholder.svg?height=600&width=800&text=Člun 3",
      ],
    },
  };