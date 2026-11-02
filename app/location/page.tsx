import type { Metadata } from "next";
import { CtaBand, Gallery, MapEmbed } from "../components/sections";
import { Feature, Heading, PageHero } from "../components/ui";
import { Torn } from "../decor";
import { INFO, LOREM_SHORT } from "../info";
import sala from "../../public/images/sala.jpg";
import chef from "../../public/images/chef.jpg";
import g2 from "../../public/images/gallery-2.jpg";
import g3 from "../../public/images/gallery-3.jpg";
import g4 from "../../public/images/gallery-4.jpg";
import g5 from "../../public/images/gallery-5.jpg";

export const metadata: Metadata = {
    title: "Location: sale interne e giardino",
    description:
        "Il Veliero a Castellanza: edificio ristrutturato con pietra a vista e travi in legno, due sale climatizzate e un giardino estivo con tettoia in legno.",
    alternates: { canonical: "/location" },
};

const SPACES = [
    { n: "2", title: "Sale interne", text: "Climatizzate d'estate e riscaldate d'inverno." },
    { n: "1", title: "Giardino estivo", text: "Tavoli all'aperto sotto la tettoia in legno." },
    { n: "00", title: "Coperti", text: "Numero di posti a sedere da indicare." },
];

export default function LocationPage() {
    return (
        <>
            <PageHero
                kicker="La location"
                title="Pietra, legno e un giardino"
                text="Un edificio da poco ristrutturato nel cuore di Castellanza, con due sale accoglienti e un giardino per le serate d'estate."
                image={g3}
            />

            <section className="space-y-28 px-6 py-28">
                <Feature
                    kicker="Le sale"
                    title="Pietra a vista e travi in legno"
                    image={sala}
                    alt="Sala interna del ristorante"
                >
                    <p>
                        Due sale accoglienti, climatizzate d&apos;estate e
                        riscaldate d&apos;inverno, ideali per pranzi di lavoro,
                        cene in famiglia e serate tra amici.
                    </p>
                    <p>{LOREM_SHORT}</p>
                </Feature>
                <Feature
                    kicker="Il giardino"
                    title="A cena sotto le stelle"
                    image={g3}
                    alt="Tavoli in giardino"
                    reverse
                >
                    <p>
                        Nella bella stagione si cena all&apos;aperto, nel
                        giardino coperto da una tettoia in legno spiovente.
                    </p>
                    <p>{LOREM_SHORT}</p>
                </Feature>
                <Feature
                    kicker="Eventi e gruppi"
                    title="Feste, compleanni e cene aziendali"
                    image={g4}
                    alt="Gruppo di persone a cena"
                >
                    <p>
                        Testo segnaposto: descrivere qui la disponibilità per
                        eventi privati, menù dedicati e prenotazioni di gruppo.
                    </p>
                    <p>{LOREM_SHORT}</p>
                </Feature>
            </section>

            <section className="chalk relative z-10 px-6 py-24 text-white">
                <Torn side="top" seed={19} />
                <div className="relative mx-auto grid max-w-5xl gap-10 text-center md:grid-cols-3">
                    {SPACES.map((s) => (
                        <div key={s.title}>
                            <p className="font-serif text-5xl font-black text-coral">{s.n}</p>
                            <h3 className="mt-3 font-serif text-xl font-bold">{s.title}</h3>
                            <p className="mt-2 text-sm text-white/65">{s.text}</p>
                        </div>
                    ))}
                </div>
                <Torn side="bottom" seed={37} />
            </section>

            <section className="px-6 py-28">
                <Heading kicker="Galleria" title="Uno sguardo al Veliero" />
                <div className="mt-12">
                    <Gallery
                        images={[
                            { img: sala, alt: "Tavola apparecchiata" },
                            { img: g3, alt: "Il giardino" },
                            { img: g4, alt: "Clienti a cena" },
                            { img: g2, alt: "Antipasto" },
                            { img: g5, alt: "Lo chef impiatta" },
                            { img: chef, alt: "La cucina" },
                        ]}
                    />
                </div>
            </section>

            <section className="bg-ink/[0.03] px-6 py-28">
                <Heading kicker="Come raggiungerci" title="Dove siamo" />
                <p className="mx-auto mt-4 max-w-md text-center text-sm text-ink/60">
                    {INFO.street}, {INFO.zip} {INFO.city} ({INFO.province}).
                    Testo segnaposto: indicazioni su parcheggio e mezzi
                    pubblici.
                </p>
                <div className="mx-auto mt-12 max-w-5xl">
                    <MapEmbed />
                </div>
            </section>

            <CtaBand
                title="Vieni a trovarci"
                text="Prenota un tavolo in sala o in giardino."
            />
        </>
    );
}
