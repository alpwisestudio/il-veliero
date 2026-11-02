import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Sprig, Torn } from "../decor";
import logo from "../../public/images/il-veliero-logo.png";
import { delay } from "./delay";

/** Logo originale, con scritta bianca per i fondi scuri. */
export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
    return (
        <Image
            src={logo}
            alt="Il Veliero — Ristorante Pizzeria"
            priority
            sizes="240px"
            className={className}
        />
    );
}

export function Heading({
    kicker,
    title,
    light,
}: {
    kicker?: string;
    title: string;
    light?: boolean;
}) {
    return (
        <div data-reveal className="text-center">
            {kicker && (
                <p
                    className={`mb-3 text-sm font-bold ${light ? "text-white/80" : "text-coral"}`}
                >
                    {kicker}
                </p>
            )}
            <h2
                className={`font-serif text-3xl font-bold tracking-wide md:text-4xl ${light ? "text-white" : "text-ink"}`}
            >
                {title}
            </h2>
        </div>
    );
}

/** Testata scura delle pagine interne. */
export function PageHero({
    kicker,
    title,
    text,
    image,
}: {
    kicker: string;
    title: string;
    text?: string;
    image: StaticImageData;
}) {
    return (
        <section className="chalk relative z-10 px-6 pb-24 pt-36 text-center text-white md:pb-32 md:pt-44">
            {/* Contenitore che ritaglia lo zoom dello sfondo senza tagliare il bordo strappato */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    fill
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    className="animate-ken-burns object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-coal/70" />
            <div className="absolute inset-0 bg-linear-to-b from-coal/30 via-transparent to-coal" />
            <Sprig className="absolute left-4 top-20 hidden h-48 -rotate-12 text-white/15 md:block" />
            <Sprig className="absolute bottom-6 right-6 hidden h-40 rotate-[200deg] text-white/15 md:block" />
            <div className="relative mx-auto max-w-3xl">
                <p className="hero-in text-sm font-bold tracking-wide text-coral">
                    {kicker}
                </p>
                <h1 style={delay(1)} className="hero-in mt-4 font-serif text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-6xl">
                    {title}
                </h1>
                {text && (
                    <p style={delay(2)} className="hero-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75">
                        {text}
                    </p>
                )}
            </div>
            <Torn side="bottom" seed={title.length * 7} />
        </section>
    );
}

/** Blocco testo + foto affiancati. */
export function Feature({
    kicker,
    title,
    children,
    image,
    alt,
    reverse,
    cta,
}: {
    kicker: string;
    title: string;
    children: React.ReactNode;
    image: StaticImageData;
    alt: string;
    reverse?: boolean;
    cta?: { href: string; label: string };
}) {
    return (
        <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-2">
            <div
                data-reveal={reverse ? "right" : "left"}
                className={`group relative mx-auto w-full max-w-md ${reverse ? "md:order-2" : ""}`}
            >
                <div
                    className={`absolute -bottom-4 h-full w-full rounded-xl bg-coral ${reverse ? "-left-4" : "-right-4"}`}
                />
                <div className="relative aspect-[5/4] overflow-hidden rounded-xl shadow-xl">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 448px"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>
            </div>
            <div data-reveal style={delay(1)} className="text-center md:text-left">
                <p className="mb-3 text-sm font-bold text-coral">{kicker}</p>
                <h2 className="font-serif text-3xl font-bold leading-snug tracking-wide md:text-4xl">
                    {title}
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed text-ink/65">
                    {children}
                </div>
                {cta && (
                    <Link href={cta.href} className="btn btn-coral mt-8">
                        {cta.label}
                    </Link>
                )}
            </div>
        </div>
    );
}
