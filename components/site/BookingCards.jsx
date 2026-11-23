import { ArrowRight } from "lucide-react";
import { SETMORE_SERVICES } from "@/lib/setmore";

// Cartes de réservation Setmore — source unique, utilisée par la page Tarifs & Réservation.
export default function BookingCards() {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SETMORE_SERVICES.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            data-testid={`setmore-${s.id}`}
            className={`group block rounded-[1.5rem] p-7 border transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${
              s.highlight
                ? "bg-forest text-white border-forest"
                : "bg-white border-[#E2DCD0] hover:border-sage"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs uppercase tracking-[0.2em] font-medium ${s.highlight ? "text-sand" : "text-sage"}`}>
                {s.duration}
              </span>
              <span className={`font-serif text-2xl ${s.highlight ? "text-white" : "text-terracotta"}`}>
                {s.price}
              </span>
            </div>
            <h3 className={`font-serif text-xl mb-3 leading-tight ${s.highlight ? "!text-white" : "text-forest"}`}>
              {s.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 ${s.highlight ? "text-[#D5C8B5]" : "text-[#4A5D54]"}`}>
              {s.desc}
            </p>
            <span className={`inline-flex items-center gap-2 text-sm font-medium ${s.highlight ? "text-white" : "text-forest"}`}>
              Réserver <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        ))}
      </div>

      <p className="text-center text-xs text-[#4A5D54] mt-8 italic">
        La réservation s'ouvre dans une nouvelle fenêtre sur la plateforme sécurisée Setmore.
      </p>
    </>
  );
}
