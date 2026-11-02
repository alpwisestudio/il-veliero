// Elementi grafici decorativi: bordi "strappati", vela, pomodori, basilico, rametti.

function tornPath(seed: number) {
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const pts: string[] = [];
  for (let x = 0; x <= 1200; x += 6 + rand() * 14) {
    const y = 10 + rand() * 14 + Math.sin(x / 90 + seed) * 5;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M0,40 L0,18 L${pts.join(" L")} L1200,16 L1200,40 Z`;
}

/** Bordo irregolare della sezione scura, posizionato fuori dal suo lato superiore o inferiore. */
export function Torn({ side, seed = 7 }: { side: "top" | "bottom"; seed?: number }) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 h-6 w-full text-coal md:h-9 ${
        side === "top" ? "bottom-[calc(100%-1px)]" : "top-[calc(100%-1px)] -scale-y-100"
      }`}
    >
      <path d={tornPath(seed)} fill="currentColor" />
    </svg>
  );
}

export function Sail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden>
      <path d="M32 6v44M32 10c10 8 16 20 16 34H32M32 16c-7 7-11 16-12 28h12" strokeLinejoin="round" />
      <path d="M10 52c6 4 14 6 22 6s16-2 22-6" strokeLinecap="round" />
    </svg>
  );
}

export function Tomato({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <radialGradient id="tg" cx="35%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ff7a5c" />
          <stop offset=".55" stopColor="#d9261c" />
          <stop offset="1" stopColor="#8e0f0b" />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="56" rx="42" ry="38" fill="url(#tg)" />
      <ellipse cx="34" cy="40" rx="10" ry="6" fill="#fff" opacity=".35" transform="rotate(-30 34 40)" />
      <path
        d="M50 22l6-12 2 13 13-4-9 10 12 6-14 1-10 0-10 0-14-1 12-6-9-10 13 4 2-13z"
        fill="#3f8f2f"
        stroke="#2b6b1f"
        strokeWidth="1"
      />
      <path d="M50 18c0-6 2-10 6-12" stroke="#2b6b1f" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Basil({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6cc04a" />
          <stop offset="1" stopColor="#2e7d2a" />
        </linearGradient>
      </defs>
      <path d="M8 60C30 10 85 0 112 18 92 52 46 76 8 60z" fill="url(#bg)" />
      <path d="M10 59C40 44 70 30 110 19" stroke="#1f5e1c" strokeWidth="2" fill="none" />
      <path
        d="M35 48l-4-14M55 40l-3-16M75 32l-2-14M45 44l6 10M66 36l7 9M86 27l7 7"
        stroke="#1f5e1c"
        strokeWidth="1.2"
        opacity=".6"
      />
    </svg>
  );
}

export function Sprig({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 200" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M40 196C42 140 38 80 44 6" />
      {[30, 55, 80, 105, 130, 155].map((y, i) => (
        <g key={y}>
          <path d={`M${42 - i * 0.2} ${y}c-14-6-24-2-30 6c12 4 22 2 30-6z`} />
          <path d={`M${42 - i * 0.2} ${y + 10}c14-6 24-2 30 6c-12 4-22 2-30-6z`} />
        </g>
      ))}
    </svg>
  );
}
