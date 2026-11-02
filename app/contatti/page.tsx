import type { Metadata } from "next";
import { BookingSection, ContactCard, MapEmbed } from "../components/sections";
import { HoursList } from "../components/site-footer";
import { Heading, PageHero } from "../components/ui";
import g4 from "../../public/images/gallery-4.jpg";

export const metadata: Metadata = {
    title: "Contatti e prenotazioni",
    description:
        "Prenota un tavolo al Ristorante Pizzeria Il Veliero di Castellanza: modulo online, telefono, WhatsApp, orari di apertura e mappa.",
    alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
    return (
        <>
            <PageHero
                kicker="Contatti"
                title="Prenota o vieni a trovarci"
                text="Siamo aperti a pranzo e a cena, tutti i giorni tranne il martedì. Il lunedì solo a pranzo."
                image={g4}
            />

            <section className="px-6 py-28">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.5fr]">
                    <div className="space-y-8">
                        <ContactCard />
                        <div className="rounded-xl border border-ink/10 bg-white p-8 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">
                                Orari di apertura
                            </p>
                            <HoursList className="mt-4 text-sm text-ink/70" />
                        </div>
                    </div>
                    <MapEmbed />
                </div>
            </section>

            <BookingSection />

            <section className="px-6 py-28 text-center">
                <Heading kicker="Domande?" title="Scrivici quando vuoi" />
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/60">
                    Testo segnaposto: informazioni su eventi privati, menù per
                    gruppi, allergie e richieste particolari.
                </p>
            </section>
        </>
    );
}
