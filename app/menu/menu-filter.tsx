"use client";

import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { MenuGrid } from "../components/menu-grid";
import { MENU } from "../info";

const TOTAL = MENU.reduce((n, c) => n + c.items.length, 0);

function Pill({
    active,
    label,
    count,
    onClick,
}: {
    active: boolean;
    label: string;
    count: number;
    onClick?: (el: HTMLButtonElement) => void;
}) {
    return (
        <button
            type="button"
            aria-pressed={active}
            onClick={(e) => onClick?.(e.currentTarget)}
            className={`group flex shrink-0 snap-center items-center gap-2 rounded-full border py-2 pl-3 pr-2 text-sm font-semibold transition-all duration-200 ${
                active
                    ? "border-coral bg-coral text-white shadow-lg shadow-coral/30"
                    : "border-ink/10 bg-white text-ink/70 hover:-translate-y-0.5 hover:border-coral/60 hover:text-ink"
            }`}
        >
            <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                    active ? "border-white bg-white text-coral" : "border-ink/25 group-hover:border-coral"
                }`}
                aria-hidden
            >
                {active && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M2.5 6.2l2.3 2.3 4.7-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </span>
            {label}
            <span
                className={`min-w-6 rounded-full px-1.5 py-0.5 text-center text-[0.65rem] font-bold ${
                    active
                        ? "bg-white/25 text-white"
                        : "bg-ink/5 text-ink/50 group-hover:bg-coral/10 group-hover:text-coral"
                }`}
            >
                {count}
            </span>
        </button>
    );
}

function FilterBar({
    selected,
    onToggle,
    onClear,
}: {
    selected: string[];
    onToggle?: (id: string, el: HTMLButtonElement) => void;
    onClear?: () => void;
}) {
    return (
        <div className="sticky top-16 z-40 border-b border-ink/10 bg-white/90 backdrop-blur-md">
            <div
                role="group"
                aria-label="Filtra le categorie del menù"
                className="mx-auto flex max-w-6xl snap-x gap-2.5 overflow-x-auto px-6 py-4 lg:flex-wrap lg:justify-center lg:overflow-visible lg:mask-none mask-[linear-gradient(to_right,transparent,#000_24px,#000_calc(100%-24px),transparent)] scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
                <Pill active={selected.length === 0} label="Tutto" count={TOTAL} onClick={onClear} />
                <span className="my-1 w-px shrink-0 bg-ink/10" aria-hidden />
                {MENU.map((c) => (
                    <Pill
                        key={c.id}
                        active={selected.includes(c.id)}
                        label={c.short ?? c.title}
                        count={c.items.length}
                        onClick={(el) => onToggle?.(c.id, el)}
                    />
                ))}
            </div>
        </div>
    );
}

function MenuPanel({ selected }: { selected: string[] }) {
    const categories = selected.length ? MENU.filter((c) => selected.includes(c.id)) : MENU;
    return (
        <div id="menu-panel" aria-live="polite" className="px-6 py-16">
            <div key={selected.join()} className="animate-menu-in">
                <MenuGrid categories={categories} single={categories.length === 1} />
            </div>
        </div>
    );
}

/**
 * Filtro del menù a selezione multipla: mostra solo le categorie scelte
 * (`?categoria=mare,terra`). Nessuna selezione = tutto il menù.
 */
export function MenuFilter() {
    const params = useSearchParams();
    const selected = (params.get("categoria") ?? "")
        .split(",")
        .filter((id) => MENU.some((c) => c.id === id));
    const rootRef = useRef<HTMLDivElement>(null);

    function apply(next: string[]) {
        window.history.replaceState(null, "", next.length ? `/menu?categoria=${next.join(",")}` : "/menu");
        // Se la barra è agganciata in alto, riporta la lista all'inizio.
        const top = rootRef.current?.getBoundingClientRect().top ?? 0;
        if (top < 0) window.scrollBy({ top, behavior: "smooth" });
    }

    function toggle(id: string, el: HTMLButtonElement) {
        const next = selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id];
        // Mantiene l'ordine del menù indipendentemente dall'ordine dei clic.
        apply(MENU.map((c) => c.id).filter((c) => next.includes(c)));
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    return (
        <div ref={rootRef} className="mt-6 md:mt-9">
            <FilterBar selected={selected} onToggle={toggle} onClear={() => apply([])} />
            <MenuPanel selected={selected} />
        </div>
    );
}

/** Versione statica mostrata durante il prerender, prima di leggere l'URL. */
export function MenuFilterFallback() {
    return (
        <div className="mt-6 md:mt-9">
            <FilterBar selected={[]} />
            <MenuPanel selected={[]} />
        </div>
    );
}
