"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "../info";
import { Logo } from "./ui";

export function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-coal/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
                <Link href="/" aria-label="Il Veliero — Home" onClick={() => setOpen(false)}>
                    <Logo className="h-12 w-auto" />
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
                        className="btn btn-compact btn-coral !px-5 !py-2.5 !text-[0.65rem]"
                    >
                        Prenota
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label={open ? "Chiudi menu" : "Apri menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden
                        >
                            {open ? (
                                <path d="M6 6l12 12M18 6L6 18" />
                            ) : (
                                <path d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <nav
                    id="mobile-nav"
                    className="chalk border-t border-white/10 px-6 pb-6 pt-2 lg:hidden"
                >
                    <ul className="divide-y divide-white/10">
                        {NAV.map((n) => (
                            <li key={n.href}>
                                <Link
                                    href={n.href}
                                    onClick={() => setOpen(false)}
                                    aria-current={pathname === n.href ? "page" : undefined}
                                    className={`block py-4 font-serif text-lg font-bold ${
                                        pathname === n.href ? "text-coral" : "text-white"
                                    }`}
                                >
                                    {n.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
