export type PodiumResult = {
  poradi: 1 | 2 | 3;
  tym: string;
  cas?: string;
};

export type CompetitionYear = {
  rok: string;
  datum: string;
  vysledky: PodiumResult[];
};

export type CompetitionCategory = {
  id: string;
  nazev: string;
  popis: string;
  rocniky: CompetitionYear[];
};

export type Competition = {
  id: string;
  nazev: string;
  popis: string;
  datum: string;
  misto: string;
  kategorie: CompetitionCategory[];
};

export const detskaSoutez: Competition = {
  id: "detska-soutez",
  nazev: "Dětská hasičská soutěž",
  popis:
    "Tradiční soutěž mladých hasičů podle pravidel hry Plamen. Soutěží se v požárním útoku, štafetě 4×60 m a dalších disciplínách. Je vyvrcholením celoroční práce s mládeží a každoročně ji navštíví desítky družstev z okolí.",
  datum: "Poslední sobota v červnu",
  misto: "Hasičské hřiště, Bohumín – Záblatí",
  kategorie: [
    {
      id: "mladsi",
      nazev: "Mladší žáci",
      popis: "Kategorie mladších žáků (6–11 let).",
      rocniky: [
        {
          rok: "2024",
          datum: "23. června 2024",
          vysledky: [
            { poradi: 1, tym: "SDH Bohumín – Vrbice", cas: "32,41 s" },
            { poradi: 2, tym: "SDH Bohumín – Šunychl", cas: "33,08 s" },
            { poradi: 3, tym: "SDH Bohumín – Skřečoň", cas: "34,22 s" },
          ],
        },
        {
          rok: "2023",
          datum: "18. června 2023",
          vysledky: [
            { poradi: 1, tym: "SDH Chotěbuz", cas: "31,95 s" },
            { poradi: 2, tym: "SDH Bohumín – Kopytov", cas: "32,67 s" },
            { poradi: 3, tym: "SDH Karviná – Hranice", cas: "33,44 s" },
          ],
        },
        {
          rok: "2022",
          datum: "26. června 2022",
          vysledky: [
            { poradi: 1, tym: "SDH Dolní Ves", cas: "33,12 s" },
            { poradi: 2, tym: "SDH Nová Víska", cas: "33,89 s" },
            { poradi: 3, tym: "SDH Horní Lhota", cas: "34,55 s" },
          ],
        },
      ],
    },
    {
      id: "starsi",
      nazev: "Starší žáci",
      popis: "Kategorie starších žáků (11–15 let), probíhá souběžně s mladší kategorií.",
      rocniky: [
        {
          rok: "2024",
          datum: "23. června 2024",
          vysledky: [
            { poradi: 1, tym: "SDH Bohumín – Skřečoň", cas: "28,76 s" },
            { poradi: 2, tym: "SDH Bohumín – Vrbice", cas: "29,34 s" },
            { poradi: 3, tym: "SDH Petrovice – Závada A", cas: "30,01 s" },
          ],
        },
        {
          rok: "2023",
          datum: "18. června 2023",
          vysledky: [
            { poradi: 1, tym: "SDH Bohumín – Skřečoň", cas: "28,45 s" },
            { poradi: 2, tym: "SDH Horní Suchá", cas: "29,12 s" },
            { poradi: 3, tym: "SDH Chotěbuz", cas: "29,88 s" },
          ],
        },
        {
          rok: "2022",
          datum: "26. června 2022",
          vysledky: [
            { poradi: 1, tym: "SDH Horní Lhota", cas: "29,03 s" },
            { poradi: 2, tym: "SDH Dolní Ves", cas: "29,67 s" },
            { poradi: 3, tym: "SDH Prostřední Lhota", cas: "30,24 s" },
          ],
        },
      ],
    },
  ],
};

export const memorialBlahovec: Competition = {
  id: "memorial-blahovec",
  nazev: "Memoriál Lukáše Blahovce",
  popis:
    "Noční hasičská soutěž v požárním útoku na počest našeho dlouholetého člena Lukáše Blahovce. Probíhá za tmy s osvětlením základny a terčů — jedinečná atmosféra, která každoročně přitahuje družstva mužů i žen z širokého okolí.",
  datum: "První sobota v srpnu",
  misto: "Hasičské hřiště, Bohumín – Záblatí",
  kategorie: [
    {
      id: "muzi",
      nazev: "Muži",
      popis: "Kategorie mužských družstev v požárním útoku.",
      rocniky: [
        {
          rok: "2024",
          datum: "3. srpna 2024",
          vysledky: [
            { poradi: 1, tym: "SDH Horní Lhota", cas: "17,23 s" },
            { poradi: 2, tym: "SDH Dolní Ves", cas: "17,89 s" },
            { poradi: 3, tym: "SDH Nová Víska", cas: "18,45 s" },
          ],
        },
        {
          rok: "2023",
          datum: "5. srpna 2023",
          vysledky: [
            { poradi: 1, tym: "SDH Nová Víska", cas: "16,78 s" },
            { poradi: 2, tym: "SDH Horní Lhota", cas: "17,12 s" },
            { poradi: 3, tym: "SDH Prostřední Lhota", cas: "17,98 s" },
          ],
        },
        {
          rok: "2022",
          datum: "6. srpna 2022",
          vysledky: [
            { poradi: 1, tym: "SDH Dolní Ves", cas: "17,05 s" },
            { poradi: 2, tym: "SDH Nová Víska", cas: "17,56 s" },
            { poradi: 3, tym: "SDH Horní Lhota", cas: "18,12 s" },
          ],
        },
      ],
    },
    {
      id: "zeny",
      nazev: "Ženy",
      popis: "Kategorie ženských družstev v požárním útoku.",
      rocniky: [
        {
          rok: "2024",
          datum: "3. srpna 2024",
          vysledky: [
            { poradi: 1, tym: "SDH Prostřední Lhota", cas: "19,87 s" },
            { poradi: 2, tym: "SDH Nová Víska", cas: "20,34 s" },
            { poradi: 3, tym: "SDH Horní Lhota", cas: "21,12 s" },
          ],
        },
        {
          rok: "2023",
          datum: "5. srpna 2023",
          vysledky: [
            { poradi: 1, tym: "SDH Nová Víska", cas: "19,23 s" },
            { poradi: 2, tym: "SDH Prostřední Lhota", cas: "19,87 s" },
            { poradi: 3, tym: "SDH Dolní Ves", cas: "20,45 s" },
          ],
        },
        {
          rok: "2022",
          datum: "6. srpna 2022",
          vysledky: [
            { poradi: 1, tym: "SDH Horní Lhota", cas: "19,56 s" },
            { poradi: 2, tym: "SDH Nová Víska", cas: "20,12 s" },
            { poradi: 3, tym: "SDH Prostřední Lhota", cas: "20,78 s" },
          ],
        },
      ],
    },
  ],
};
