"use client";

import { useEffect, useRef } from "react";

/**
 * Osserva tutti gli elementi `[data-reveal]` (anche quelli aggiunti dopo,
 * es. cambio pagina o filtro del menù) e aggiunge `data-shown` quando entrano
 * nel viewport. Lo stile è in globals.css.
 */
export function RevealObserver() {
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (!e.isIntersecting) continue;
                    e.target.setAttribute("data-shown", "");
                    io.unobserve(e.target);
                }
            },
            { rootMargin: "0px 0px -8% 0px" },
        );
        const scan = (root: ParentNode) =>
            root
                .querySelectorAll("[data-reveal]:not([data-shown])")
                .forEach((el) => io.observe(el));

        scan(document);
        const mo = new MutationObserver((mutations) => {
            for (const m of mutations) {
                m.addedNodes.forEach((n) => {
                    if (!(n instanceof Element)) return;
                    if (n.matches("[data-reveal]:not([data-shown])")) io.observe(n);
                    scan(n);
                });
            }
        });
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            io.disconnect();
            mo.disconnect();
        };
    }, []);

    return null;
}

/** Numero che conta da 0 al valore quando entra nel viewport (es. "60+"). */
export function CountUp({ value, duration = 1600 }: { value: string; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        const match = value.match(/^(\d+)(.*)$/);
        if (!el || !match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const target = Number(match[1]);
        const suffix = match[2];
        let frame = 0;

        el.textContent = `0${suffix}`;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            const start = performance.now();
            const tick = (now: number) => {
                const t = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - t, 4);
                el.textContent = `${Math.round(target * eased)}${suffix}`;
                if (t < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        });
        io.observe(el);

        return () => {
            io.disconnect();
            cancelAnimationFrame(frame);
            el.textContent = value;
        };
    }, [value, duration]);

    return <span ref={ref}>{value}</span>;
}
