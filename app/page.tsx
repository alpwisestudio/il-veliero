import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { delay } from "./components/delay";
import { CountUp } from "./components/motion";
import { BookingSection, ReviewsSection } from "./components/sections";
import { Feature, Heading } from "./components/ui";
import { Basil, Sprig, Tomato, Torn } from "./decor";
import { INFO, LOREM } from "./info";
import hero from "../public/images/hero.jpg";
import margherita from "../public/images/margherita.jpg";
import pizza from "../public/images/pizza.jpg";
import pesce from "../public/images/pesce.jpg";
import paella from "../public/images/paella.jpg";
import tagliata from "../public/images/tagliata.jpg";
import sala from "../public/images/sala.jpg";
import chef from "../public/images/chef.jpg";

export const metadata: Metadata = {
    alternates: { canonical: "/" },
};

const SPECIALS = [
    { img: pizza, label: "Pizza", alt: "Pizza cotta nel forno a legna", href: "/pizzeria" },
    { img: pesce, label: "Pesce", alt: "Piatto di pesce fresco", href: "/menu?categoria=mare" },
    { img: paella, label: "Paella", alt: "Paella valenciana", href: "/menu?categoria=mare" },
    { img: tagliata, label: "Carne", alt: "Tagliata di manzo", href: "/menu?categoria=terra" },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="chalk relative z-10 px-6 pb-48 pt-36 text-center text-white md:pb-64 md:pt-44">
                {/* Contenitore che ritaglia lo zoom dello sfondo senza tagliare pizza e bordo strappato */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={hero}
                        alt=""
                        fill
                        priority
                        placeholder="blur"
                        sizes="100vw"
                        className="animate-ken-burns object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-coal/65" />
                <div className="absolute inset-0 bg-linear-to-b from-coal/30 via-transparent to-coal" />
                <Sprig className="absolute left-4 top-24 hidden h-56 -rotate-12 text-white/15 md:block" />

                <div className="relative mx-auto max-w-3xl">
                    <p className="hero-in text-sm font-bold tracking-wide text-white/85">
                        Ristorante · Pizzeria il Veliero di Castellanza
                    </p>
                    <h1 style={delay(1)} className="hero-in mt-4 font-serif text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-6xl">
                        Pizza nel forno a legna,
                        <br />
                        mare e terra
                    </h1>
                    <p style={delay(2)} className="hero-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75">
                        Oltre 60 pizze, pesce fresco, carni selezionate e la
                        nostra paella valenciana. Cucina mediterranea
                        tradizionale con un tocco contemporaneo.
                    </p>
                    <div style={delay(3)} className="hero-in mt-10 flex flex-wrap justify-center gap-4">
                        <Link href="/contatti#prenota" className="btn btn-coral">
                            Prenota un tavolo
                        </Link>
                        <Link
                            href="/menu"
                            className="btn border border-white/40 !shadow-none hover:bg-white/10"
                        >
                            Scopri il menù
                        </Link>
                    </div>
                </div>

                {/* Pizza che "esce" dalla sezione */}
                <div className="absolute bottom-0 left-1/2 z-20 w-[min(78vw,26rem)] -translate-x-1/2 translate-y-1/2">
                    <div className="relative aspect-square">
                        <Image
                            src={margherita}
                            alt="Pizza margherita cotta nel forno a legna"
                            fill
                            sizes="(max-width: 640px) 78vw, 26rem"
                            placeholder="blur"
                            className="animate-spin-in rounded-full object-cover shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
                        />
                        <Basil className="absolute -left-14 top-[38%] w-24 -rotate-12 animate-float drop-shadow-lg md:-left-20 md:w-32" />
                        <Basil className="absolute -left-6 top-[55%] w-16 rotate-[30deg] animate-float drop-shadow-lg [animation-delay:-2s] md:-left-10 md:w-20" />
                        <Tomato className="absolute -right-6 top-[30%] w-16 animate-float drop-shadow-xl [animation-delay:-1s] md:-right-14 md:w-20" />
                        <Tomato className="absolute -right-12 top-[48%] w-14 rotate-45 animate-float drop-shadow-xl [animation-delay:-3.5s] md:-right-24 md:w-16" />
                    </div>
                </div>
                <Torn side="bottom" seed={3} />
            </section>

            {/* Specialità */}
            <section className="relative px-6 pb-24 pt-[min(52vw,17rem)] md:pt-72">
                <Sprig className="absolute right-6 top-40 hidden h-48 rotate-[20deg] text-ink/[0.07] md:block" />
                <Heading title="Le nostre specialità" />
                <p data-reveal style={delay(1)} className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-ink/60">
                    Ingredienti freschi e di stagione, dal forno a legna alla
                    griglia. Ogni giorno, a pranzo e a cena.
                </p>
                <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 md:grid-cols-4">
                    {SPECIALS.map((s, i) => (
                        <Link key={s.label} href={s.href} data-reveal style={delay(i + 1)} className="group text-center">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md transition-shadow duration-300 group-hover:shadow-2xl">
                                <Image
                                    src={s.img}
                                    alt={s.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 240px"
                                    placeholder="blur"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <p className="mt-4 font-serif text-lg font-bold underline decoration-2 underline-offset-4 transition-colors group-hover:text-coral">
                                {s.label}
                            </p>
                        </Link>
                    ))}
                </div>
                <div data-reveal className="mt-12 text-center">
                    <a href={INFO.phoneHref} className="btn btn-leaf">
                        Chiamaci ora
                    </a>
                </div>
            </section>

            {/* Ristorante (anteprima) */}
            <section className="px-6 pb-28 pt-8">
                <Feature
                    kicker="Il ristorante"
                    title="Passione per la cucina mediterranea dal 19XX"
                    image={chef}
                    alt="Lo chef al lavoro in cucina"
                    cta={{ href: "/ristorante", label: "Scopri il ristorante" }}
                >
                    <p>{LOREM}</p>
                </Feature>
            </section>

            {/* Location (anteprima) */}
            <section className="chalk relative z-10 px-6 py-24 text-white md:py-28">
                <Torn side="top" seed={11} />
                <Sprig className="absolute left-6 top-10 hidden h-44 rotate-12 text-white/10 md:block" />
                <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                    <div data-reveal="left" className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl md:-rotate-2">
                        <Image
                            src={sala}
                            alt="Tavola apparecchiata al ristorante"
                            fill
                            sizes="(max-width: 768px) 100vw, 560px"
                            placeholder="blur"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                    <div data-reveal="right" style={delay(1)} className="text-center md:text-left">
                        <p className="mb-3 text-sm font-bold text-coral">La location</p>
                        <h2 className="font-serif text-3xl font-bold leading-snug tracking-wide md:text-4xl">
                            Pietra a vista, travi in legno e un giardino per
                            l&apos;estate
                        </h2>
                        <p className="mt-6 leading-relaxed text-white/70">
                            Un edificio da poco ristrutturato con due sale
                            accoglienti, climatizzate d&apos;estate e riscaldate
                            d&apos;inverno. Nella bella stagione si cena
                            all&apos;aperto, nel giardino sotto la tettoia in
                            legno.
                        </p>
                        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8">
                            {[
                                ["60+", "Pizze"],
                                ["2", "Sale"],
                                ["1", "Giardino"],
                            ].map(([n, l]) => (
                                <div key={l}>
                                    <dt className="font-serif text-4xl font-black text-coral">
                                        <CountUp value={n} />
                                    </dt>
                                    <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                        {l}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <Link href="/location" className="btn btn-coral mt-10">
                            Scopri la location
                        </Link>
                    </div>
                </div>
                <Torn side="bottom" seed={23} />
            </section>

            <div className="h-12" />
            <ReviewsSection />
            <BookingSection />
            <div className="h-12" />
        </>
    );
}
