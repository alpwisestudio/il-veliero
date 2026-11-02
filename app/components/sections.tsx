import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { BookingForm } from "../booking-form";
import { Basil, Sprig, Tomato, Torn } from "../decor";
import { INFO, LOREM, REVIEWS } from "../info";
import { Heading } from "./ui";

export { MenuGrid } from "./menu-grid";

export function Gallery({
    images,
}: {
    images: { img: StaticImageData; alt: string }[];
}) {
    return (
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {images.map((g, i) => (
                <div
                    key={g.alt}
                    className={`group relative aspect-square overflow-hidden rounded-xl ${
                        i === 0
                            ? "col-span-2 md:row-span-2"
                            : i === images.length - 1
                              ? "hidden md:block"
                              : ""
                    }`}
                >
                    <Image
                        src={g.img}
                        alt={g.alt}
                        fill
                        sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                        placeholder="blur"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            ))}
        </div>
    );
}

export function ReviewsSection() {
    return (
        <section className="relative overflow-hidden bg-coral px-6 py-24 text-white">
            <Sprig className="absolute -left-4 top-6 h-56 -rotate-12 text-white/20" />
            <Sprig className="absolute -right-2 bottom-0 h-48 rotate-[200deg] text-white/20" />
            <Heading kicker="Dicono di noi" title="Le recensioni dei clienti" light />
            <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
                {REVIEWS.map((r, i) => (
                    <figure key={i} className="rounded-xl bg-white p-8 text-ink shadow-xl">
                        <div className="text-lg tracking-widest text-coral" aria-label="5 stelle su 5">
                            ★★★★★
                        </div>
                        <blockquote className="mt-4 text-sm leading-relaxed text-ink/70">
                            “{LOREM}”
                        </blockquote>
                        <figcaption className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-sm">
                            <span className="font-serif font-bold">{r.name}</span>
                            <span className="text-xs text-ink/50">{r.source}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export function BookingSection() {
    return (
        <section id="prenota" className="chalk relative z-10 scroll-mt-16 px-6 py-24 text-white">
            <Torn side="top" seed={41} />
            <div className="relative mx-auto max-w-5xl">
                <Heading kicker="Prenotazioni" title="Prenota il tuo tavolo" light />
                <p className="mx-auto mt-4 max-w-md text-center text-sm text-white/70">
                    Compila il modulo: la richiesta arriva su WhatsApp e ti
                    confermiamo la disponibilità in breve tempo.
                </p>
                <div className="relative mx-auto mt-12 max-w-xl">
                    <Tomato className="absolute -left-20 -top-8 hidden w-20 drop-shadow-2xl md:block" />
                    <Basil className="absolute -right-24 bottom-10 hidden w-32 -rotate-12 drop-shadow-2xl md:block" />
                    <div className="relative rounded-2xl bg-white p-8 text-ink shadow-2xl md:p-10">
                        <BookingForm />
                    </div>
                </div>
            </div>
            <Torn side="bottom" seed={57} />
        </section>
    );
}

export function ContactCard() {
    return (
        <address className="space-y-5 rounded-xl border border-ink/10 bg-white p-8 not-italic shadow-sm">
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Indirizzo</p>
                <p className="mt-1 font-serif text-lg font-bold leading-snug">
                    {INFO.street}
                    <br />
                    {INFO.zip} {INFO.city} ({INFO.province})
                </p>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Telefono</p>
                <a href={INFO.phoneHref} className="mt-1 block font-semibold hover:text-coral">
                    {INFO.phone}
                </a>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">WhatsApp</p>
                <a
                    href={`https://wa.me/${INFO.whatsapp}`}
                    className="mt-1 block font-semibold hover:text-coral"
                >
                    {INFO.whatsappLabel}
                </a>
            </div>
            <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">Email</p>
                <a
                    href={`mailto:${INFO.email}`}
                    className="mt-1 block break-all font-semibold hover:text-coral"
                >
                    {INFO.email}
                </a>
            </div>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(INFO.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-coral mt-2"
            >
                Indicazioni
            </a>
        </address>
    );
}

export function MapEmbed() {
    return (
        <div className="min-h-80 overflow-hidden rounded-xl shadow-md">
            <iframe
                title={`Mappa — ${INFO.fullName}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(INFO.mapsQuery)}&z=16&output=embed`}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

/** Fascia finale con invito all'azione. */
export function CtaBand({ title, text }: { title: string; text: string }) {
    return (
        <section className="px-6 py-24 text-center">
            <Heading title={title} />
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/60">{text}</p>
            <div className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-4">
                <Link href="/contatti#prenota" className="btn btn-coral">
                    Prenota un tavolo
                </Link>
                <a href={INFO.phoneHref} className="btn btn-leaf">
                    Chiamaci ora
                </a>
            </div>
        </section>
    );
}
