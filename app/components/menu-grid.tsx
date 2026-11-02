import type { MenuCategory } from "../info";
import { delay } from "./delay";

export function MenuGrid({
    categories,
    single,
}: {
    categories: MenuCategory[];
    /** Una sola colonna più larga, per la vista filtrata. */
    single?: boolean;
}) {
    return (
        <div
            className={`mx-auto grid items-start gap-6 ${single ? "max-w-2xl" : "max-w-5xl md:grid-cols-2"}`}
        >
            {categories.map((cat, i) => (
                <div key={cat.id} data-reveal style={delay(i % 2)}>
                <div className="h-full rounded-xl border border-ink/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-xl">
                    <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-2xl font-bold">{cat.title}</h3>
                        <span className="h-px flex-1 bg-coral/40" />
                    </div>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-coral">
                        {cat.note}
                    </p>
                    <ul className="mt-5 space-y-4">
                        {cat.items.map((it, i) => (
                            <li key={i} className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-bold">{it.name}</p>
                                    <p className="text-sm text-ink/60">{it.desc}</p>
                                </div>
                                <span className="shrink-0 font-serif font-bold text-coral">
                                    {it.price ?? "€ 00"}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
            ))}
        </div>
    );
}
