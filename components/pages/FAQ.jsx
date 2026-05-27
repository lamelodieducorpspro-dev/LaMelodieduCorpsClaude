"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { faqCategories } from "@/lib/faq-data";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">FAQ</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            Questions fréquentes sur la nutrition, le <em className="text-terracotta">SOPK</em> et l&apos;endométriose
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Les questions qu&apos;on me pose le plus souvent — et leurs réponses.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-12">
          {faqCategories.map((cat, ci) => (
            <div key={cat.title}>
              <h2 className="font-serif text-2xl md:text-3xl text-forest mb-6">{cat.title}</h2>
              <div className="space-y-3">
                {cat.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="bg-white rounded-2xl border border-[#E2DCD0] overflow-hidden">
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        data-testid={`faq-toggle-${id}`}
                        className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-cream-2 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-lg text-forest">{item.q}</span>
                        {isOpen
                          ? <Minus className="w-5 h-5 text-terracotta flex-shrink-0" aria-hidden="true" />
                          : <Plus className="w-5 h-5 text-terracotta flex-shrink-0" aria-hidden="true" />
                        }
                      </button>
                      {/* Toujours rendu dans le DOM → indexable par Google. CSS masque visuellement. */}
                      <div className={isOpen ? "px-6 pb-6 text-sm text-[#4A5D54] leading-relaxed" : "hidden"}>
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Une autre question ?</h2>
          <p className="text-[#4A5D54] mb-8">Le mieux, c&apos;est qu&apos;on en parle directement.</p>
          <Link href="/contact" className="btn-primary" data-testid="faq-cta">
            Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
