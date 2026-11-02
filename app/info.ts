export const INFO = {
  name: "Il Veliero",
  fullName: "Ristorante Pizzeria Il Veliero",
  street: "Viale Don G. Minzoni, 49",
  city: "Castellanza",
  zip: "21053",
  province: "VA",
  phone: "+39 0331 500405",
  phoneHref: "tel:+390331500405",
  whatsapp: "393409253571",
  whatsappLabel: "+39 340 925 3571",
  email: "ilvelierocastellanza@gmail.com",
  instagram: "https://www.instagram.com/ristoranteilvelierocastellanza",
  // TODO: sostituire con l'URL della pagina Facebook ufficiale del locale
  // (quello sul sito attuale punta a un profilo non pertinente).
  facebook: "https://www.facebook.com/search/top?q=Ristorante%20Pizzeria%20Il%20Veliero%20Castellanza",
  vat: "02375550122",
  mapsQuery: "Ristorante Pizzeria Il Veliero, Viale Don Minzoni 49, Castellanza",
};

// 0 = domenica … 6 = sabato
export const HOURS: { day: string; idx: number; lunch: boolean; dinner: boolean }[] = [
  { day: "Lunedì", idx: 1, lunch: true, dinner: false },
  { day: "Martedì", idx: 2, lunch: false, dinner: false },
  { day: "Mercoledì", idx: 3, lunch: true, dinner: true },
  { day: "Giovedì", idx: 4, lunch: true, dinner: true },
  { day: "Venerdì", idx: 5, lunch: true, dinner: true },
  { day: "Sabato", idx: 6, lunch: true, dinner: true },
  { day: "Domenica", idx: 0, lunch: true, dinner: true },
];

export const LUNCH = "12:00 – 14:30";
export const DINNER = "19:00 – 23:00";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/ristorante", label: "Ristorante" },
  { href: "/pizzeria", label: "Pizzeria" },
  { href: "/menu", label: "Menù" },
  { href: "/location", label: "Location" },
  { href: "/contatti", label: "Contatti" },
];

// Contenuti segnaposto: da sostituire con testi reali del locale.
export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin urna sed dapibus fringilla. Integer posuere erat a ante venenatis dapibus.";
export const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export const REVIEWS = [
  { name: "Nome Cognome", source: "Google" },
  { name: "Nome Cognome", source: "TripAdvisor" },
  { name: "Nome Cognome", source: "Google" },
];

export type MenuItem = { name: string; desc: string; price?: string };
export type MenuCategory = { id: string; title: string; short?: string; note: string; items: MenuItem[] };

// I prezzi "€ 00" e le voci "Nome del piatto" sono segnaposto.
export const MENU: MenuCategory[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    note: "Per iniziare",
    items: [
      { name: "Tartare di tonno", desc: "Tonno crudo, agrumi, olio extravergine" },
      { name: "Nome del piatto", desc: LOREM_SHORT },
      { name: "Nome del piatto", desc: LOREM_SHORT },
    ],
  },
  {
    id: "primi",
    title: "Primi",
    note: "Pasta e risotti",
    items: [
      { name: "Nome del piatto", desc: LOREM_SHORT },
      { name: "Nome del piatto", desc: LOREM_SHORT },
      { name: "Nome del piatto", desc: LOREM_SHORT },
    ],
  },
  {
    id: "mare",
    title: "Secondi di mare",
    short: "Pesce",
    note: "Pesce fresco, secondo il mercato",
    items: [
      { name: "Grigliata di pesce", desc: "Selezione del giorno alla brace" },
      { name: "Paella valenciana", desc: "La nostra ultima novità" },
      { name: "Nome del piatto", desc: LOREM_SHORT },
    ],
  },
  {
    id: "terra",
    title: "Secondi di terra",
    short: "Carne",
    note: "Carni selezionate",
    items: [
      { name: "Tagliata ai funghi porcini", desc: "Manzo, porcini, rucola" },
      { name: "Filetto al pepe verde", desc: "Filetto di manzo, salsa al pepe verde" },
      { name: "Nome del piatto", desc: LOREM_SHORT },
    ],
  },
  {
    id: "pizze-classiche",
    title: "Pizze classiche",
    note: "Cotte nel forno a legna",
    items: [
      { name: "Marinara", desc: "Pomodoro, aglio, origano, olio extravergine" },
      { name: "Margherita", desc: "Pomodoro, fior di latte, basilico" },
      { name: "Diavola", desc: "Pomodoro, fior di latte, salame piccante" },
      { name: "Capricciosa", desc: "Pomodoro, fior di latte, prosciutto cotto, funghi, carciofi, olive" },
      { name: "Quattro stagioni", desc: "Prosciutto cotto, funghi, carciofi e olive in quattro spicchi" },
      { name: "Quattro formaggi", desc: "Fior di latte, gorgonzola, fontina, grana" },
    ],
  },
  {
    id: "pizze-speciali",
    title: "Pizze speciali",
    note: "Le creazioni della casa",
    items: [
      { name: "Nome della pizza", desc: LOREM_SHORT },
      { name: "Nome della pizza", desc: LOREM_SHORT },
      { name: "Nome della pizza", desc: LOREM_SHORT },
      { name: "Nome della pizza", desc: LOREM_SHORT },
    ],
  },
  {
    id: "dolci",
    title: "Dolci",
    note: "Fatti in casa",
    items: [
      { name: "Nome del dolce", desc: LOREM_SHORT },
      { name: "Nome del dolce", desc: LOREM_SHORT },
      { name: "Nome del dolce", desc: LOREM_SHORT },
    ],
  },
  {
    id: "cantina",
    title: "Cantina e bevande",
    short: "Vini e bevande",
    note: "Bianchi e rossi da cantine italiane",
    items: [
      { name: "Vini bianchi", desc: "Al calice o in bottiglia" },
      { name: "Vini rossi", desc: "Al calice o in bottiglia" },
      { name: "Birre", desc: LOREM_SHORT },
      { name: "Bibite e acqua", desc: LOREM_SHORT },
    ],
  },
];

export const menuBy = (...ids: string[]) => MENU.filter((c) => ids.includes(c.id));
