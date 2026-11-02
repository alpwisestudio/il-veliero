import type { Metadata } from "next";
import { Suspense } from "react";
import { CtaBand } from "../components/sections";
import { PageHero } from "../components/ui";
import { MenuFilter, MenuFilterFallback } from "./menu-filter";
import paella from "../../public/images/paella.jpg";

export const metadata: Metadata = {
    title: "Menù",
    description:
        "Il menù del Ristorante Pizzeria Il Veliero di Castellanza: antipasti, primi, secondi di mare e di terra, pizze nel forno a legna, dolci e vini.",
    alternates: { canonical: "/menu" },
};

export default function MenuPage() {
    return (
        <>
            <PageHero
                kicker="Il menù"
                title="Dal forno e dalla cucina"
                text="Antipasti, primi, secondi di mare e di terra, oltre 60 pizze, dolci fatti in casa e una selezione di vini italiani."
                image={paella}
            />

            <Suspense fallback={<MenuFilterFallback />}>
                <MenuFilter />
            </Suspense>

            <p className="mx-auto max-w-xl px-6 text-center text-xs text-ink/50">
                Prezzi e piatti indicativi: il menù può variare in base alla
                stagione e al mercato. Segnala al personale eventuali allergie o
                intolleranze alimentari.
            </p>

            <CtaBand
                title="Hai già scelto?"
                text="Prenota il tuo tavolo online o chiamaci per ordinare."
            />
        </>
    );
}
