import Link from "next/link";
import { Torn } from "../decor";
import { DINNER, HOURS, INFO, LUNCH, NAV } from "../info";
import { Logo } from "./ui";

export function HoursList({ className = "" }: { className?: string }) {
    return (
        <ul className={`space-y-1.5 ${className}`}>
            {HOURS.map((h) => (
                <li key={h.day} className="flex gap-3">
                    <span className="w-20 shrink-0 font-semibold">{h.day}</span>
                    <span>
                        {!h.lunch && !h.dinner ? (
                            <span className="font-semibold text-coral">Chiuso</span>
                        ) : (
                            [h.lunch && LUNCH, h.dinner && DINNER]
                                .filter(Boolean)
                                .join(" · ")
                        )}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export function SiteFooter() {
    return (
        <footer className="chalk relative overflow-x-clip px-6 pb-10 pt-20 text-white">
            <Torn side="top" seed={77} />
            <div className="relative mx-auto grid max-w-6xl gap-12 text-center md:grid-cols-4 md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <Logo className="h-20 w-auto md:h-24" />
                    <p className="mt-4 text-xs leading-relaxed text-white/60">
                        {INFO.street}
                        <br />
                        {INFO.zip} {INFO.city} ({INFO.province})
                    </p>
                </div>
                <div>
                    <h3 className="font-serif text-lg font-bold">Pagine</h3>
                    <ul className="mt-4 space-y-1.5 text-xs text-white/70">
                        {NAV.map((n) => (
                            <li key={n.href}>
                                <Link href={n.href} className="hover:text-coral">
                                    {n.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-serif text-lg font-bold">Orari di apertura</h3>
                    <HoursList className="mt-4 text-left text-xs text-white/70" />
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <a
                        href={INFO.phoneHref}
                        className="font-serif text-2xl font-bold hover:text-coral"
                    >
                        {INFO.phone}
                    </a>
                    <Link href="/contatti#prenota" className="btn btn-coral mt-5">
                        Prenota ora
                    </Link>
                </div>
            </div>
            <div className="relative mx-auto mt-14 flex max-w-6xl flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:justify-between">
                <div className="flex items-center gap-5">
                    <a
                        href={INFO.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                            <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />
                        </svg>
                    </a>
                    <a
                        href={INFO.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-white"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden
                        >
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                    </a>
                    <span>© {INFO.fullName}</span>
                </div>
                <span>P.IVA {INFO.vat}</span>
            </div>
        </footer>
    );
}
