"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Laptop, Plus, Minus } from "lucide-react";
import { GOOGLE_REVIEW_COUNT, GOOGLE_REVIEW_RATING } from "@/lib/constants";

export default function ConditionPage({
  overline,
  h1,
  heroImg,
  heroAlt,
  intro,
  symptomsTitle,
  symptomsLead,
  symptoms,
  symptomsCallout,
  quote,
  mechanismTitle,
  mechanismParagraphs,
  levers,
  workTitle,
  workItems,
  faq,
  ctaTitle,

}) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24" data-testid="condition-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="overline mb-5">{overline}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] tracking-tight mb-6">
              {h1}
            </h1>
            <p className="text-lg text-[#4A5D54] leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/contact" className="btn-primary" data-testid="condition-cta-hero">
                Réserver mon appel découverte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/mon-accompagnement" className="btn-secondary">
                Mon accompagnement
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-[#4A5D54]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sage" /> Cabinet à Bouillante
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage" /> À domicile Côte-sous-le-Vent
              </span>
              <span className="inline-flex items-center gap-2">
                <Laptop className="w-4 h-4 text-sage" /> Visio France entière
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src={heroImg}
                alt={heroAlt}
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SYMPTÔMES ─────────────────────────────────────── */}
      <section className="py-20 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-3 od-reveal">
            {symptomsTitle}
          </h2>
          {symptomsLead && (
            <p className="text-[#4A5D54] mb-10 text-lg leading-relaxed max-w-2xl">
              {symptomsLead}
            </p>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#E2DCD0] flex flex-col gap-4"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF0E9] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-forest mb-2 font-medium">{s.label}</p>
                    <p className="text-[0.9375rem] text-[#4A5D54] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {symptomsCallout && (
            <div className="mt-8 bg-[#FAF4EF] border border-[#DFC5B4] rounded-2xl px-7 py-5">
              <p className="text-[#1A2421] leading-relaxed italic">{symptomsCallout}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── PULLQUOTE ────────────────────────────────────── */}
      <section className="py-20 bg-forest">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div
            className="font-serif text-7xl text-terracotta leading-none mb-4 opacity-70"
            aria-hidden="true"
          >
            "
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-[1.75]">
            {quote}
          </blockquote>
          <div className="mt-8 w-12 h-px bg-sand/40 mx-auto" />
          <p className="mt-5 text-sand text-xs tracking-[0.25em] uppercase">
            Apolline Maysounabe · Praticienne en nutrition
          </p>
        </div>
      </section>

      {/* ── MÉCANISME + LEVIERS ──────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6 leading-tight">
                {mechanismTitle}
              </h2>
              <div className="space-y-4 text-[#4A5D54] leading-relaxed max-w-prose">
                {mechanismParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {levers.map((l, i) => {
                  const Icon = l.icon;
                  return (
                    <div key={i} className="bg-cream-2 rounded-2xl p-5 flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-xl bg-[#EDF3EF] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-sage" />
                      </div>
                      <div>
                        <p className="font-medium text-forest text-sm mb-1">{l.title}</p>
                        <p className="text-sm text-[#4A5D54] leading-relaxed">{l.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE QU'ON TRAVAILLE ───────────────────────────── */}
      <section className="py-20 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 od-reveal">{workTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {workItems.map((item, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 border border-[#E2DCD0] overflow-hidden od-reveal"
              >
                {/* Watermark number */}
                <div
                  className="absolute top-2 right-4 font-serif text-7xl text-[#DDB99F] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative pr-14">
                  <p className="font-medium text-forest mb-2">
                    {typeof item === "string" ? item : item.title}
                  </p>
                  {typeof item !== "string" && item.desc && (
                    <p className="text-sm text-[#4A5D54] leading-relaxed">{item.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSUS ────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-12">
            Comment se passe l'accompagnement ?
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Appel découverte",
                price: "Gratuit · 15 min",
                desc: "On se parle de ta situation, de ce que tu traverses et de comment je peux t'aider. Sans pression, sans engagement.",
              },
              {
                title: "Séance bilan",
                price: "2h · 90€ cabinet/visio",
                desc: "Bilan complet : alimentation, cycle, énergie, sommeil, stress, digestion. Un plan d'action co-construit selon ta situation.",
              },
              {
                title: "Séances de suivi",
                price: "1h · 50€ cabinet/visio",
                desc: "Minimum 4 séances sur 3 à 4 mois pour vraiment ancrer les changements. On ajuste ensemble au fil du temps.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-[1.5rem] p-7 border border-[#E2DCD0]"
              >
                <span className="overline">Étape {i + 1}</span>
                <h3 className="font-serif text-2xl text-forest mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-terracotta font-medium mb-3">{s.price}</p>
                <p className="text-sm text-[#4A5D54] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#4A5D54]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sage" /> Cabinet à Bouillante
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4 text-sage" /> À domicile Côte-sous-le-Vent
            </span>
            <span className="inline-flex items-center gap-2">
              <Laptop className="w-4 h-4 text-sage" /> Visio France entière
            </span>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 bg-cream-2">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#E2DCD0] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-cream-2/60 transition-colors"
                  >
                    <span className="font-serif text-lg text-forest">{item.q}</span>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-terracotta flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <Plus className="w-5 h-5 text-terracotta flex-shrink-0" aria-hidden="true" />
                    )}
                  </button>
                  {/* Toujours rendu dans le DOM → indexable par Google. CSS masque visuellement. */}
                  <div className={isOpen ? "px-6 pb-6 pt-2 text-sm text-[#4A5D54] leading-relaxed border-t border-[#F3EFE6]" : "hidden"}>
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-forest mb-6 leading-tight">
            {ctaTitle}
          </h2>
          <p className="text-[#4A5D54] mb-10 text-lg">
            L'appel découverte est gratuit et sans engagement. 15 minutes pour se connaître.
          </p>
          <Link href="/contact" className="btn-primary" data-testid="condition-cta-final">
            Réserver mon appel découverte <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "Appel gratuit · 15 min",
              "Sans engagement",
              "Cabinet · Domicile · Visio",
              `${GOOGLE_REVIEW_COUNT} avis 5 étoiles`,
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-[0.15em] text-sage border border-[#E2DCD0] rounded-full px-4 py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
