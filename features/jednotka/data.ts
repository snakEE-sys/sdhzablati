// features/unit/data/vehicles.ts

export const vehicles = [
  {
    slug: "cas-20-tatra",
    name: "CAS 20 TATRA",
    type: "Hasičský automobilový žebřík",

    description:
      "Hlavní zásahové vozidlo jednotky určené pro široké spektrum mimořádných událostí.",

    image: "/images/vehicles/cas-tatra/hero.jpg",

    images: [
      "/images/vehicles/cas-tatra/1.jpg",
      "/images/vehicles/cas-tatra/2.jpg",
      "/images/vehicles/cas-tatra/3.jpg",
      "/images/vehicles/cas-tatra/4.jpg",
    ],

    specifications: [
      {
        label: "Podvozek",
        value: "TATRA",
      },
      {
        label: "Typ",
        value: "CAS 20",
      },
      {
        label: "Primární využití",
        value: "Požáry a technické zásahy",
      },
    ],
  },

  {
    slug: "da-vw-crafter",
    name: "DA Volkswagen Crafter",
    type: "Dopravní automobil",

    description:
      "Dopravní automobil určený především pro přepravu osob a materiálu.",

    image: "/images/vehicles/crafter/hero.jpg",

    images: [
      "/images/vehicles/crafter/1.jpg",
      "/images/vehicles/crafter/2.jpg",
      "/images/vehicles/crafter/3.jpg",
      "/images/vehicles/crafter/4.jpg",
    ],

    specifications: [
      {
        label: "Podvozek",
        value: "Volkswagen Crafter",
      },
      {
        label: "Typ",
        value: "DA",
      },
      {
        label: "Primární využití",
        value: "Přeprava osob a materiálu",
      },
    ],
  },

  {
    slug: "zachranny-clun",
    name: "Záchranný člun",
    type: "Vodní záchrana",

    description:
      "Plavidlo určené pro zásahy na vodních plochách a záchranu osob při povodních.",

    image: "/images/vehicles/boat/hero.jpg",

    images: [
      "/images/vehicles/boat/1.jpg",
      "/images/vehicles/boat/2.jpg",
      "/images/vehicles/boat/3.jpg",
      "/images/vehicles/boat/4.jpg",
    ],

    specifications: [
      {
        label: "Kategorie",
        value: "Záchranné plavidlo",
      },
      {
        label: "Využití",
        value: "Vodní záchrana",
      },
      {
        label: "Nasazení",
        value: "Povodně a záchranné práce",
      },
    ],
  },
];
