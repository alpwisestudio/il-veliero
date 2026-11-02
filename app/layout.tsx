import type { Metadata } from "next";
import { Merriweather, Raleway } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { INFO } from "./info";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ristoranteilveliero.net"),
  title: {
    default: "Il Veliero Castellanza | Pizzeria con forno a legna e ristorante di pesce",
    template: "%s | Il Veliero Castellanza",
  },
  description:
    "Ristorante Pizzeria Il Veliero a Castellanza (VA): oltre 60 pizze nel forno a legna, pesce fresco, carne e paella valenciana. Giardino estivo. Prenota online il tuo tavolo.",
  keywords: [
    "pizzeria Castellanza",
    "ristorante Castellanza",
    "pizza forno a legna Varese",
    "ristorante di pesce Castellanza",
    "paella Castellanza",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Il Veliero",
    title: "Il Veliero — Ristorante Pizzeria a Castellanza",
    description: "Pizza nel forno a legna, pesce fresco e cucina mediterranea. Prenota il tuo tavolo.",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: INFO.fullName,
  url: "https://www.ristoranteilveliero.net",
  image: "https://www.ristoranteilveliero.net/images/hero.jpg",
  menu: "https://www.ristoranteilveliero.net/menu",
  telephone: INFO.phone,
  email: INFO.email,
  servesCuisine: ["Pizza", "Pesce", "Mediterranea"],
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: INFO.street,
    addressLocality: INFO.city,
    postalCode: INFO.zip,
    addressRegion: INFO.province,
    addressCountry: "IT",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "14:30" },
    ...["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].flatMap((d) => [
      { "@type": "OpeningHoursSpecification", dayOfWeek: d, opens: "12:00", closes: "14:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: d, opens: "19:00", closes: "23:00" },
    ]),
  ],
  sameAs: [INFO.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${raleway.variable} ${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-clip font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
