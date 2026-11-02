import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, MenuGrid } from "../components/sections";
import { Feature, Heading, PageHero } from "../components/ui";
import { Torn } from "../decor";
import { LOREM, LOREM_SHORT, menuBy } from "../info";
import sala from "../../public/images/sala.jpg";
import chef from "../../public/images/chef.jpg";
import pesce from "../../public/images/pesce.jpg";
import tagliata from "../../public/images/tagliata.jpg";
import paella from "../../public/images/paella.jpg";

export const metadata: Metadata = {
    title: "Ristorante di pesce e carne",
    description:
        "La cucina del Veliero a Castellanza: pesce fresco, grigliate, paella valenciana e carni selezionate. Cucina mediterranea tradizionale con un tocco contemporaneo.",
    alternates: { canonical: "/ristorante" },
};

const VALUES = [
    { title: "Ingredienti freschi", text: LOREM_SHORT },
    { title: "Ricette della tradizione", text: LOREM_SHORT },
    { title: "Un tocco contemporaneo", text: LOREM_SHORT },
];

export default function RistorantePage() {
    return (
        <>
            <PageHero
                kicker="Il ristorante"
                title="Cucina di mare e di terra"
                text="Piatti della tradizione mediterranea preparati con ingredienti freschi e di stagione, con un tocco di creatività contemporanea."
                image={sala}
            />

            <section className="px-6 py-28">
                <Feature
                    kicker="La nostra storia"
                    title="Passione per la cucina mediterranea dal 19XX"
                    image={chef}
                    alt="Lo chef al lavoro in cucina"
                >
                    <p>{LOREM}</p>
                    <p>
                        Nulla facilisi. Vivamus luctus urna sed urna ultricies
                        ac tempor dui sagittis. In condimentum facilisis porta.
                        Sed nec diam eu diam mattis viverra.
                    </p>
                    <p className="font-serif text-xl font-bold italic text-ink">
                        — Nome dello chef
                    </p>
                </Feature>
            </section>

            <section className="chalk relative z-10 px-6 py-24 text-white">
                <Torn side="top" seed={13} />
                <div className="relative mx-auto grid max-w-5xl gap-10 text-center md:grid-cols-3">
                    {VALUES.map((v, i) => (
                        <div key={v.title}>
                            <p className="font-serif text-5xl font-black text-coral">
                                0{i + 1}
                            </p>
                            <h3 className="mt-3 font-serif text-xl font-bold">{v.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
                        </div>
                    ))}
                </div>
                <Torn side="bottom" seed={29} />
            </section>

            <section className="space-y-28 px-6 py-28">
                <Feature
                    kicker="Il mare"
                    title="Pesce fresco e grigliate"
                    image={pesce}
                    alt="Piatto di pesce"
                    reverse
                >
                    <p>
                        Tartare di tonno, grigliate di pesce e piatti di mare
                        preparati secondo il pescato del giorno.
                    </p>
                    <p>{LOREM_SHORT}</p>
                </Feature>
                <Feature
                    kicker="La novità"
                    title="Paella valenciana"
                    image={paella}
                    alt="Paella valenciana"
                >
                    <p>
                        L&apos;ultima arrivata in carta: la paella valenciana,
                        da condividere a tavola.
                    </p>
                    <p>{LOREM_SHORT}</p>
                </Feature>
                <Feature
                    kicker="La terra"
                    title="Carni selezionate"
                    image={tagliata}
                    alt="Tagliata di manzo"
                    reverse
                >
                    <p>
                        Tagliata ai funghi porcini, filetto al pepe verde e
                        altre proposte di carne per chi preferisce la terra.
                    </p>
                    <p>{LOREM_SHORT}</p>
                </Feature>
            </section>

            <section className="bg-ink/[0.03] px-6 py-28">
                <Heading kicker="Dalla cucina" title="Alcuni piatti in carta" />
                <div className="mt-14">
                    <MenuGrid categories={menuBy("antipasti", "primi", "mare", "terra")} />
                </div>
                <div className="mt-12 text-center">
                    <Link href="/menu" className="btn btn-coral">
                        Vedi il menù completo
                    </Link>
                </div>
            </section>

            <CtaBand
                title="Ti aspettiamo a tavola"
                text="Prenota online o chiamaci: a pranzo e a cena, tutti i giorni tranne il martedì."
            />
        </>
    );
}
