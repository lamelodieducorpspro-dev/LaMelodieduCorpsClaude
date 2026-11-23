import Link from "next/link";
import { ArrowRight, Check, Calendar } from "lucide-react";
import BookingCards from "@/components/site/BookingCards";

export default function Tarifs() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">Tarifs & réservation · La Mélodie du Corps</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] tracking-tight mb-6">
            Tarifs & <em className="text-terracotta">réservation</em> — Nutrition & Santé féminine à Bouillante
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Les tarifs en toute transparence, et la réservation de ta séance au même endroit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-5">
            <Calendar className="w-5 h-5 text-terracotta" />
            <p className="overline">Accompagnement nutrition holistique</p>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-4 max-w-2xl">
            Choisis ton type de séance et réserve ton créneau
          </h2>
          <p className="text-[#4A5D54] leading-relaxed mb-10 max-w-2xl">
            L'accompagnement se construit sur une base de 5 séances : 2 séances bilan pour poser
            les fondations, puis 3 séances de suivi pour ancrer les changements.
          </p>

          <BookingCards />

          <div className="mt-10 bg-cream-2 rounded-[2rem] p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h3 className="font-serif text-2xl text-forest mb-2">L'accompagnement complet</h3>
              <p className="text-[#4A5D54] leading-relaxed">
                2 séances bilan (2h · 110€) puis 3 séances de suivi (1h30 · 80€), sur 3 à 4 mois.
                Si besoin, des séances de suivi supplémentaires peuvent s'ajouter à ton rythme.
                Cabinet à Bouillante ou visio partout en France.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="text-sm text-sage uppercase tracking-[0.2em] mb-1">5 séances</p>
              <p className="font-serif text-4xl text-terracotta">460€</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl text-forest mb-8">Cours de yoga</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[#E2DCD0]">
            <div className="grid grid-cols-12 bg-cream-2 px-6 py-4 text-xs uppercase tracking-[0.2em] text-sage font-medium">
              <div className="col-span-4">Cours</div>
              <div className="col-span-4">Horaire</div>
              <div className="col-span-2 text-right">Séance</div>
              <div className="col-span-2 text-right">10 cours</div>
            </div>
            {[
              { c: "Kundalini Yoga", h: "Lundi 18h–19h30", s: "15€", p: "130€" },
              { c: "Yin Yoga", h: "Mercredi 18h–19h", s: "12€", p: "100€" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 px-6 py-6 border-t border-[#E2DCD0] items-center">
                <div className="col-span-4 font-serif text-xl text-forest">{row.c}</div>
                <div className="col-span-4 text-sm text-[#4A5D54]">{row.h}</div>
                <div className="col-span-2 text-right text-forest font-medium">{row.s}</div>
                <div className="col-span-2 text-right text-forest font-medium">{row.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl text-forest mb-8">Notes importantes</h2>
          <ul className="space-y-3">
            {[
              "Paiement par carte en ligne (Stripe), par virement ou en espèces au cabinet",
              "Certaines mutuelles remboursent partiellement — renseigne-toi auprès de la tienne",
              "Mon accompagnement est complémentaire au suivi médical, jamais en remplacement",
              "Aucun forfait imposé — on règle séance par séance",
            ].map((n, i) => (
              <li key={i} className="flex gap-3 items-start bg-cream-2 rounded-2xl p-5">
                <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-[#1A2421]">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Une question avant de réserver ?</h2>
          <p className="text-[#4A5D54] mb-8">
            Écris-moi, je te réponds sous 48h. Et si tu préfères en parler de vive voix,
            l'appel découverte de 15 minutes ci-dessus est gratuit et sans engagement.
          </p>
          <Link href="/contact" className="btn-primary" data-testid="tarifs-cta">
            Me poser une question <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
