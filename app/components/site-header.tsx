"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sail } from "../decor";
import { INFO, NAV } from "../info";
import { Logo } from "./ui";

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Header trasparente sopra l'hero, pieno appena si scorre la pagina.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Blocca lo scroll della pagina e chiude con Esc mentre il menu è aperto.
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.documentElement.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.documentElement.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    open
                        ? "bg-transparent"
                        : scrolled
                          ? "bg-coal/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-lg"
                          : "bg-transparent"
                }`}
            >
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 md:h-20">
                    <Link href="/" aria-label="Il Veliero — Home" onClick={close}>
                        <Logo className="h-12 w-auto md:h-16" />
                    </Link>
                    <nav className="hidden gap-7 text-xs font-semibold tracking-wide lg:flex">
                        {NAV.map((n) => (
                            <Link
                                key={n.href}
                                href={n.href}
                                aria-current={pathname === n.href ? "page" : undefined}
                                className={`transition-colors hover:text-coral ${
                                    pathname === n.href ? "text-coral" : "text-white/75"
                                }`}
                            >
                                {n.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/contatti#prenota"
                            className="btn btn-compact btn-coral !px-5 !py-2.5 !text-[0.65rem] max-lg:hidden!"
                        >
                            Prenota
                        </Link>
                        <button
                            type="button"
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            aria-label={open ? "Chiudi menu" : "Apri menu"}
                            className={`relative flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                                open
                                    ? "border-coral bg-coral text-white"
                                    : "border-white/20 text-white hover:border-white/50"
                            }`}
                        >
                            {/* Hamburger che si trasforma in X */}
                            <span aria-hidden className="relative block h-3.5 w-5">
                                <span
                                    className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                                        open ? "translate-y-[6px] rotate-45" : ""
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-[6px] h-0.5 rounded bg-current transition-all duration-300 ${
                                        open ? "w-0 opacity-0" : "w-3.5 opacity-100"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition-transform duration-300 ${
                                        open ? "-translate-y-[6px] -rotate-45" : ""
                                    }`}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu mobile a schermo intero */}
            <div
                id="mobile-nav"
                aria-hidden={!open}
                inert={!open}
                className={`chalk fixed inset-0 z-40 flex flex-col overflow-y-auto px-6 pb-8 pt-24 text-white transition-[opacity,clip-path] duration-500 ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${
                    open
                        ? "opacity-100 [clip-path:circle(150%_at_calc(100%-2.75rem)_2rem)]"
                        : "pointer-events-none opacity-0 [clip-path:circle(0%_at_calc(100%-2.75rem)_2rem)]"
                }`}
            >
                {/* Decorazioni */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-coral/20 blur-3xl"
                />
                <Sail className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 text-white/[0.04]" />

                <nav aria-label="Menu principale" className="relative flex-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-white/40">
                        Menu
                    </p>
                    <ul className="mt-4">
                        {NAV.map((n, i) => {
                            const active = pathname === n.href;
                            return (
                                <li
                                    key={n.href}
                                    style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                                    className={`border-b border-white/10 transition-all duration-500 ${
                                        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                    }`}
                                >
                                    <Link
                                        href={n.href}
                                        onClick={close}
                                        aria-current={active ? "page" : undefined}
                                        className="group flex items-center gap-4 py-4"
                                    >
                                        <span
                                            className={`w-6 font-serif text-xs font-bold ${
                                                active ? "text-coral" : "text-white/30"
                                            }`}
                                        >
                                            0{i + 1}
                                        </span>
                                        <span
                                            className={`flex-1 font-serif text-3xl font-bold tracking-wide transition-colors sm:text-4xl ${
                                                active ? "text-coral" : "text-white group-hover:text-coral"
                                            }`}
                                        >
                                            {n.label}
                                        </span>
                                        <span
                                            aria-hidden
                                            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                                                active
                                                    ? "border-coral bg-coral text-white"
                                                    : "border-white/15 text-white/50 group-hover:translate-x-1 group-hover:border-coral group-hover:text-coral"
                                            }`}
                                        >
                                            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div
                    style={{ transitionDelay: open ? `${150 + NAV.length * 60}ms` : "0ms" }}
                    className={`relative mt-10 space-y-4 transition-all duration-500 ${
                        open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                >
                    <Link href="/contatti#prenota" onClick={close} className="btn btn-coral w-full">
                        Prenota un tavolo
                    </Link>
                    <div className="flex items-center justify-between pt-4 text-xs text-white/50">
                        <span>
                            {INFO.street}, {INFO.city}
                        </span>
                        <div className="flex gap-4">
                            <a href={INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                Instagram
                            </a>
                            <a href={INFO.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
