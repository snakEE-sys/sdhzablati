export type HistoryEvent = {
  rok: string;
  nazev: string;
  popis: string;
  obrazek?: string;
};

export const historyEvents: HistoryEvent[] = [
  {
    rok: "1925",
    nazev: "Založení sboru",
    popis:
      "Sbor dobrovolných hasičů byl založen 15. června 1925 z iniciativy starosty obce a několika místních občanů. Prvním velitelem byl zvolen Josef Novotný. Sbor měl při založení 20 členů a disponoval pouze ruční stříkačkou.",
  },
  {
    rok: "1932",
    nazev: "První motorová stříkačka",
    popis:
      "Díky finanční sbírce mezi občany a příspěvku obce byla zakoupena první motorová stříkačka značky Stratílek. Tato událost výrazně zvýšila akceschopnost sboru a umožnila efektivnější zásahy při požárech.",
  },
  {
    rok: "1945",
    nazev: "Obnova po válce",
    popis:
      "Po skončení druhé světové války došlo k obnově činnosti sboru, který byl během okupace značně omezen. Sbor získal nové vybavení z přebytků armády a začal se aktivně podílet na obnově obce.",
  },
  {
    rok: "1953",
    nazev: "Výstavba hasičské zbrojnice",
    popis:
      "Byla zahájena výstavba nové hasičské zbrojnice, která nahradila původní nevyhovující prostory. Stavba byla dokončena v roce 1955 a slouží s několika úpravami dodnes. Na výstavbě se podíleli všichni členové sboru svépomocí.",
  },
  {
    rok: "1968",
    nazev: "První automobilová cisterna",
    popis:
      "Sbor získal první automobilovou cisternu Škoda 706 RTH, která výrazně zlepšila mobilitu a akceschopnost jednotky. Vozidlo bylo slavnostně předáno do užívání za účasti představitelů obce a okresu.",
  },
  {
    rok: "1975",
    nazev: "50. výročí založení sboru",
    popis:
      "Oslavy 50. výročí založení sboru byly spojeny s okrskovou soutěží v požárním sportu a slavnostním průvodem obcí. Při této příležitosti byli oceněni zakládající členové a byla vydána pamětní brožura mapující historii sboru.",
  },
  {
    rok: "1985",
    nazev: "Založení družstva mladých hasičů",
    popis:
      "Bylo založeno družstvo mladých hasičů, které se začalo pravidelně účastnit soutěží hry Plamen. Práce s mládeží se stala důležitou součástí činnosti sboru a zajistila přísun nových členů do budoucna.",
  },
  {
    rok: "1997",
    nazev: "Zásahy při povodních",
    popis:
      "Jednotka se aktivně podílela na záchranných a likvidačních pracích během ničivých povodní, které zasáhly Moravu. Za tuto činnost obdržela poděkování od hejtmana kraje a ministra vnitra.",
  },
  {
    rok: "2005",
    nazev: "Modernizace techniky",
    popis:
      "Díky dotaci z Evropské unie a příspěvku obce byla pořízena nová cisternová automobilová stříkačka na podvozku Tatra a další moderní vybavení pro zásahovou činnost.",
  },
  {
    rok: "2015",
    nazev: "Rekonstrukce hasičské zbrojnice",
    popis:
      "Proběhla kompletní rekonstrukce hasičské zbrojnice, která zahrnovala zateplení budovy, výměnu oken, modernizaci sociálního zařízení a vytvoření nového zázemí pro členy jednotky.",
  },
  {
    rok: "2025",
    nazev: "100. výročí založení sboru",
    popis:
      "Sbor se připravuje na oslavy 100. výročí založení, které budou spojeny s řadou kulturních a sportovních akcí. Plánuje se vydání knihy o historii sboru a slavnostní předání nového praporu.",
  },
];

export const historyStats = [
  { value: "1925", label: "Rok založení" },
  { value: "100", label: "Let tradice (2025)" },
  { value: "70+", label: "Aktivních členů" },
] as const;
