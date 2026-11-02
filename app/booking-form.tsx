"use client";

import { useState } from "react";
import { HOURS, INFO } from "./info";

const LUNCH_SLOTS = ["12:00", "12:30", "13:00", "13:30", "14:00"];
const DINNER_SLOTS = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

const field =
  "mt-1.5 w-full rounded border border-ink/15 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-ink/35 focus:border-coral focus:ring-2 focus:ring-coral/20 disabled:bg-ink/5";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="text-xs font-semibold text-ink/70">
      {children}
      {required && <span className="text-coral"> *</span>}
    </span>
  );
}

export function BookingForm() {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const weekday = date ? new Date(`${date}T12:00:00`).getDay() : null;
  const rule = weekday === null ? null : HOURS.find((h) => h.idx === weekday);
  const slots = rule
    ? [...(rule.lunch ? LUNCH_SLOTS : []), ...(rule.dinner ? DINNER_SLOTS : [])]
    : [...LUNCH_SLOTS, ...DINNER_SLOTS];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (rule && slots.length === 0) {
      setError("Il martedì siamo chiusi: scegli un altro giorno.");
      return;
    }
    setError("");
    const [y, m, d] = String(data.get("date")).split("-");
    const text = [
      `Ciao! Vorrei prenotare un tavolo al Veliero.`,
      `Nome: ${data.get("name")}`,
      `Data: ${d}/${m}/${y} alle ${data.get("time")}`,
      `Persone: ${data.get("guests")}`,
      data.get("notes") ? `Note: ${data.get("notes")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${INFO.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 text-left sm:grid-cols-2">
      <label className="sm:col-span-2">
        <Label required>Nome e cognome</Label>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label>
        <Label required>Data</Label>
        <input
          name="date"
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={field}
        />
      </label>
      <label>
        <Label required>Orario</Label>
        <select name="time" required disabled={slots.length === 0} className={field} defaultValue="">
          <option value="" disabled>
            {slots.length === 0 ? "Chiuso" : "Seleziona"}
          </option>
          {slots.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="sm:col-span-2">
        <Label required>Numero di persone</Label>
        <select name="guests" required className={field} defaultValue="2">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n}>{n}</option>
          ))}
          <option>Più di 12</option>
        </select>
      </label>
      <label className="sm:col-span-2">
        <Label>Note</Label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Tavolo in giardino, seggiolone, allergie…"
          className={`${field} resize-none`}
        />
      </label>

      {error && <p className="text-sm font-semibold text-coral sm:col-span-2">{error}</p>}

      <div className="flex flex-col items-start gap-3 pt-1 sm:col-span-2">
        <button type="submit" className="btn btn-leaf">
          Invia su WhatsApp
        </button>
        <p className="text-xs text-ink/50">
          Oppure chiama il{" "}
          <a href={INFO.phoneHref} className="font-semibold text-ink underline underline-offset-2">
            {INFO.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
