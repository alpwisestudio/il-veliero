import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Gallery, MenuGrid } from "../components/sections";
import { Feature, Heading, PageHero } from "../components/ui";
import { Torn } from "../decor";
import { LOREM, LOREM_SHORT, menuBy } from "../info";
import hero from "../../public/images/hero.jpg";
import margherita from "../../public/images/margherita.jpg";
import pizza from "../../public/images/pizza.jpg";
import g1 from "../../public/images/gallery-1.jpg";
import g2 from "../../public/images/gallery-2.jpg";
import g6 from "../../public/images/gallery-6.jpg";

export const metadata: Metadata = {
    title: "Pizzeria con forno a legna",
    description:
        "Oltre 60 pizze cotte nel forno a legna al Veliero di Castellanza: classiche, speciali e creazioni della casa. Prenota il tuo tavolo.",
    alternates: { canonical: "/pizzeria" },
};

const STEPS = [
    { title: "L'impasto", text: LOREM_SHORT },
    { title: "La lievitazione", text: LOREM_SHORT },
    { title: "Il forno a legna", text: LOREM_SHORT },
];

export default function PizzeriaPage() {
    return (
        <>
            <PageHero
                kicker="La pizzeria"
                title="Oltre 60 pizze nel forno a legna"
                text="Dalle classiche della tradizione alle creazioni della casa: scegli la tua tra più di sessanta varianti."
                image={hero}
            />

            <section className="px-6 py-28">
                <Feature
                    kicker="Il forno a legna"
                    title="Il cuore della nostra pizzeria"
                    image={margherita}
                    alt="Pizza margherita appena sfornata"
                >
                    <p>{LOREM}</p>
                    <p>
                        Nulla facilisi. Vivamus luctus urna sed urna ultricies
                        ac tempor dui sagittis. In condimentum facilisis porta.
                    </p>
                </Feature>
            </section>

            <section className="chalk relative z-10 px-6 py-24 text-white">
                <Torn side="top" seed={17} />
                <div className="relative">
                    <Heading kicker="Come nasce" title="La nostra pizza" light />
                    <div className="mx-auto mt-14 grid max-w-5xl gap-10 text-center md:grid-cols-3">
                        {STEPS.map((s, i) => (
                            <div key={s.title}>
                                <p className="font-serif text-5xl font-black text-coral">
                                    0{i + 1}
                                </p>
                                <h3 className="mt-3 font-serif text-xl font-bold">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Torn side="bottom" seed={31} />
            </section>

            <section className="px-6 py-28">
                <Heading kicker="Dal forno" title="Le nostre pizze" />
                <p className="mx-auto mt-4 max-w-md text-center text-sm text-ink/60">
                    Una selezione dalla carta: chiedi al personale l&apos;elenco
                    completo delle oltre 60 varianti.
                </p>
                <div className="mt-14">
                    <MenuGrid categories={menuBy("pizze-classiche", "pizze-speciali")} />
                </div>
                <div className="mt-12 text-center">
                    <Link href="/menu" className="btn btn-coral">
                        Vedi il menù completo
                    </Link>
                </div>
            </section>

            <section className="bg-ink/[0.03] px-6 py-28">
                <Heading kicker="Galleria" title="Appena sfornate" />
                <div className="mt-12">
                    <Gallery
                        images={[
                            { img: g6, alt: "Pizza margherita" },
                            { img: pizza, alt: "Pizza a spicchi" },
                            { img: g1, alt: "Pizza con pomodorini e funghi" },
                            { img: margherita, alt: "Margherita nel forno a legna" },
                            { img: hero, alt: "Pizza davanti al forno a legna" },
                            { img: g2, alt: "Ingredienti freschi" },
                        ]}
                    />
                </div>
            </section>

            <CtaBand
                title="Voglia di pizza?"
                text="Prenota il tuo tavolo o chiamaci: il forno è acceso a pranzo e a cena, tutti i giorni tranne il martedì."
            />
        </>
    );
}
