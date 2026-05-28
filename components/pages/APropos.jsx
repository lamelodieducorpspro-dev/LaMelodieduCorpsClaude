import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Sun, Moon, BookOpen, Star } from "lucide-react";
import { IMG, TESTIMONIALS } from "@/lib/constants";

export default function APropos() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-44">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="overline mb-5">À propos</p>
            <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] tracking-tight mb-6">
              <em className="text-terracotta">Apolline Maysounabe</em> — Praticienne en Nutrition et Santé féminine à Bouillante, Guadeloupe
            </h1>
            <p className="text-lg text-[#4A5D54] leading-relaxed">
              Praticienne certifiée en nutrition et santé féminine et professeure de yoga à Bouillante, Guadeloupe.
              Certification Hygie Pro · Kundalini Yoga · Yin Yoga.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Image src={IMG.about} alt="Apolline Maysounabe, praticienne en nutrition holistique à Bouillante Guadeloupe" width={560} height={700} className="w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-8">Mon parcours</h2>
          <div className="space-y-4 text-[#4A5D54] leading-relaxed">
            <p>
              Ingénieure de formation, j'ai d'abord travaillé dans la protection de l'environnement —
              un domaine qui comptait pour moi, mais dans lequel je ressentais un manque d'alignement
              profond entre mes valeurs et mon rythme de vie.
            </p>
            <p>
              Avec le temps, j'ai ressenti un besoin fort de réalignement : revenir à plus de sens,
              de présence et de cohérence entre ce que je vivais et ce que je ressentais vraiment.
            </p>
            <p>
              Ce chemin m'a amenée jusqu'en Guadeloupe. Ici, j'ai appris à ralentir, à écouter,
              à me reconnecter à mon corps, à la nature, à ce qui m'animait réellement.
            </p>
            <p>
              Aujourd'hui, je travaille à Bouillante, entourée de la mer des Caraïbes, de la forêt tropicale
              et d'une communauté qui partage ces valeurs d'équilibre et de conscience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Ma formation</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { icon: GraduationCap, t: "Certification Hygie Pro", d: "Formation complète en nutrition santé préventive et holistique — Lisa Salis. Approche globale par l'alimentation, l'hygiène de vie et la prévention." },
              { icon: Sun, t: "Professeure de Kundalini Yoga", d: "Pratique axée sur l'énergie, la respiration, la méditation et la conscience corporelle." },
              { icon: Moon, t: "Professeure de Yin Yoga", d: "Pratique profonde et méditative pour libérer les tensions et rééquilibrer le système nerveux." },
              { icon: BookOpen, t: "Formation continue", d: "Je me forme régulièrement sur la santé hormonale féminine, la nutrition fonctionnelle et les médecines douces." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.t} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-cream-2 border border-[#E2DCD0] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-forest mb-1.5 font-medium">{c.t}</h3>
                    <p className="text-[0.9375rem] text-[#4A5D54] leading-relaxed">{c.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 bg-[#FAF4EF] border border-[#DFC5B4] rounded-2xl px-7 py-5">
            <p className="overline mb-2">Transparence</p>
            <p className="text-[0.9375rem] text-[#4A5D54] leading-relaxed">
              Je suis praticienne en nutrition santé holistique, non diététicienne-nutritionniste au sens légal du terme (diplôme d'État).
              Mon approche est préventive et complémentaire au suivi médical.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Ce en quoi je crois profondément</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { t: "L'autonomie avant tout", d: "Mon objectif n'est pas que tu aies besoin de moi pour toujours. C'est que tu comprennes ton corps assez bien pour faire tes propres choix en conscience." },
              { t: "La douceur plutôt que la restriction", d: "Je ne crois pas aux régimes drastiques ni aux listes d'aliments interdits. Je crois en des ajustements progressifs, réalistes et durables." },
              { t: "La globalité plutôt que le symptôme", d: "Une douleur, une fatigue, un déséquilibre hormonal — ce sont des signaux, pas des ennemis. Mon travail est de comprendre ce que ton corps essaie de te dire." },
              { t: "La présence et l'écoute", d: "Chaque personne que j'accompagne a une histoire unique. Je prends le temps de vraiment comprendre la tienne avant de proposer quoi que ce soit." },
            ].map((v) => (
              <div key={v.t}>
                <h3 className="font-serif text-2xl text-forest mb-3 font-medium">{v.t}</h3>
                <p className="text-[0.9375rem] text-[#4A5D54] leading-relaxed max-w-prose">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <Image src={IMG.life3} alt="Apolline en méditation au coucher du soleil sur l'océan en Guadeloupe — moment de reconnexion à soi" width={480} height={560} className="rounded-[2rem] w-full object-cover" />
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">La Guadeloupe comme terrain de vie</h2>
            <div className="space-y-4 text-[#4A5D54] leading-relaxed">
              <p>
                Bouillante, c'est la Côte-sous-le-Vent. La mer turquoise, la Réserve Cousteau à deux pas,
                la forêt tropicale qui descend jusqu'à la mer.
              </p>
              <p>
                Connaître la réalité guadeloupéenne me permet de proposer des recommandations adaptées
                aux produits locaux, au mode de vie caribéen et aux défis spécifiques de l'île.
                Pas de conseils déconnectés de ta réalité quotidienne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 text-center">Ce qu'en disent celles qui m'ont fait confiance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 border border-[#E2DCD0]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-terracotta text-terracotta" />)}
                </div>
                <p className="font-serif text-lg text-forest italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm text-[#4A5D54]">— {t.name} · {t.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Tu veux savoir si mon accompagnement est fait pour toi ?</h2>
          <p className="text-[#4A5D54] mb-8">Le meilleur moyen de le savoir, c'est de se parler.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary" data-testid="apropos-cta-primary">
              Réserver mon appel découverte <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mon-accompagnement" className="btn-secondary">Découvrir mon accompagnement</Link>
          </div>
        </div>
      </section>
    </>
  );
}
