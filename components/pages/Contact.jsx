"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { MapPin, Phone, Mail, MessageCircle, Send, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL, ADDRESS } from "@/lib/constants";

const API = "/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Appel découverte gratuit", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot — champ caché, rempli uniquement par les bots
  const formRenderedAt = useState(() => Date.now())[0];

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (website) {
      // Bot détecté via le honeypot : on simule un envoi réussi sans rien faire.
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "Appel découverte gratuit", message: "" });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website, elapsed_ms: Date.now() - formRenderedAt }),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
      toast.success("Message envoyé ! Je reviens vers toi très vite 🌿");
      setForm({ name: "", email: "", phone: "", subject: "Appel découverte gratuit", message: "" });
    } catch (err) {
      toast.error("Une erreur est survenue, réessaie ou contacte-moi par WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-12 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">Contact · La Mélodie du Corps</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            <em className="text-terracotta">Écris-moi</em> — Nutrition & Santé féminine, Guadeloupe
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Écris-moi via le formulaire, par WhatsApp ou par email — je te réponds sous 48h.
            Pour réserver directement un créneau, rendez-vous sur la page Tarifs & Réservation.
          </p>
        </div>
      </section>

      {/* Renvoi vers la page de réservation */}
      <section className="pb-16" data-testid="booking-pointer">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-forest text-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-sand" />
                <p className="text-xs uppercase tracking-[0.2em] text-sand font-medium">Réservation en ligne</p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl !text-white mb-2 leading-tight">
                Tu veux réserver une séance ?
              </h2>
              <p className="text-[#D5C8B5] leading-relaxed">
                Les tarifs et la réservation d'un créneau se trouvent sur la page Tarifs & Réservation —
                appel découverte gratuit, séance bilan et séances de suivi.
              </p>
            </div>
            <div className="md:flex-shrink-0">
              <Link href="/tarifs" className="btn-primary !bg-white !text-forest whitespace-nowrap" data-testid="contact-to-booking">
                Voir les tarifs & réserver <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coordonnées + formulaire */}
      <section className="pb-32 bg-cream-2 pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mb-12">
            <p className="overline mb-5">Autre moyen de me joindre</p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest leading-tight">
              Tu préfères m'écrire ?
            </h2>
            <p className="text-[#4A5D54] mt-3">
              Le formulaire ci-dessous m'envoie directement un email. Je te réponds sous 48h.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="bg-forest text-white rounded-[2rem] p-10 sticky top-28">
                <h3 className="font-serif text-3xl !text-white mb-6">Coordonnées</h3>
                <ul className="space-y-5 text-[#D5C8B5]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                    <span>{ADDRESS}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white">{WHATSAPP_DISPLAY}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-terracotta flex-shrink-0 mt-1" />
                    <a href={`mailto:${EMAIL}`} className="hover:text-white break-all">{EMAIL}</a>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-[#D5C8B5] mb-4">Le canal de contact le plus rapide :</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="contact-whatsapp-cta"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa53] text-white px-6 py-3.5 rounded-full font-medium transition-all w-full justify-center">
                    <MessageCircle className="w-4 h-4" /> Discuter sur WhatsApp
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-sm text-[#D5C8B5] leading-relaxed">
                  <p className="mb-2 font-medium text-white">Horaires</p>
                  <p>Lundi au vendredi · 8h-17h</p>
                  <p className="mt-3 italic">Consultations en visio disponibles partout en France.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {sent ? (
                <div className="bg-white rounded-[2rem] p-12 border border-[#E2DCD0] text-center">
                  <div className="w-16 h-16 rounded-full bg-cream-2 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-7 h-7 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-3xl text-forest mb-4">Message bien reçu 🌿</h3>
                  <p className="text-[#4A5D54] mb-6">
                    Tu vas recevoir un email de confirmation. Je reviens vers toi dans les 48h.
                  </p>
                  <button onClick={() => setSent(false)} data-testid="contact-new-msg" className="btn-secondary">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#E2DCD0] space-y-5">
                  <h3 className="font-serif text-3xl text-forest mb-2">Formulaire de contact</h3>
                  <p className="text-sm text-[#4A5D54] mb-6">Décris-moi ta situation, je reviens vers toi sous 48h.</p>

                  {/* Honeypot anti-spam : champ invisible pour les humains, masqué visuellement et du lecteur d'écran */}
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
                    <label htmlFor="website">Site web</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Prénom</label>
                      <input required value={form.name} onChange={handle("name")} data-testid="contact-name"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Email</label>
                      <input required type="email" value={form.email} onChange={handle("email")} data-testid="contact-email"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition-colors" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Téléphone (optionnel)</label>
                      <input type="tel" value={form.phone} onChange={handle("phone")} data-testid="contact-phone"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Sujet</label>
                      <select value={form.subject} onChange={handle("subject")} data-testid="contact-subject"
                        className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 appearance-none focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition-colors">
                        <option>Appel découverte gratuit</option>
                        <option>SMOP (anciennement SOPK) / Endométriose / Ménopause</option>
                        <option>Cours de yoga</option>
                        <option>Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-sage mb-2">Ton message</label>
                    <textarea required rows={6} value={form.message} onChange={handle("message")} data-testid="contact-message"
                      placeholder="Parle-moi de ta situation, de ce que tu cherches…"
                      className="w-full px-4 py-3 rounded-2xl border border-[#E2DCD0] bg-cream-2/40 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition-colors resize-none" />
                  </div>

                  <button type="submit" disabled={loading} data-testid="contact-submit"
                    className="btn-primary w-full justify-center disabled:opacity-60">
                    {loading ? "Envoi…" : "Envoyer mon message"} <Send className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-[#4A5D54] text-center">
                    En envoyant ce message, tu acceptes d'être recontactée par email ou téléphone.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
