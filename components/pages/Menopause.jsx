"use client";

import {
  Thermometer,
  Moon,
  Scale,
  Zap,
  Brain,
  Droplets,
  ShieldCheck,
  Heart,
  Flame,
  Leaf,
} from "lucide-react";
import ConditionPage from "@/components/site/ConditionPage";
import { IMG } from "@/lib/constants";

export default function Menopause() {
  return (
    <ConditionPage
      overline="Santé hormonale féminine · Ménopause & Périménopause"
      h1="Ménopause : retrouver énergie, confort et sérénité naturellement"
      heroImg={IMG.menopause}
      heroAlt="Ménopause et nutrition : accompagnement bienveillant par Apolline à Bouillante, Guadeloupe"
      intro="La ménopause est une transition naturelle, pas une maladie. Pourtant, bouffées de chaleur, prise de poids, troubles du sommeil, fatigue… ces symptômes peuvent vraiment impacter la qualité de vie. Mon accompagnement t'aide à traverser cette période avec plus d'outils concrets, de douceur et d'écoute."
      symptomsTitle="Ce que tu vis peut-être en ce moment"
      symptomsLead="Périménopause et ménopause se manifestent différemment d'une femme à l'autre. Ces symptômes sont réels et méritent une attention adaptée — pas des injonctions à «bien vieillir»."
      symptoms={[
        {
          icon: Thermometer,
          label: "Bouffées de chaleur",
          desc: "Des montées de chaleur soudaines, parfois nocturnes, qui perturbent le sommeil et le quotidien.",
        },
        {
          icon: Moon,
          label: "Sommeil perturbé",
          desc: "Difficultés à s'endormir, réveils fréquents, sueurs nocturnes — la fatigue s'installe progressivement.",
        },
        {
          icon: Scale,
          label: "Prise de poids abdominale",
          desc: "Un ventre qui change sans modification du régime alimentaire, résistant aux efforts habituels.",
        },
        {
          icon: Zap,
          label: "Fatigue & brouillard mental",
          desc: "Un manque d'énergie persistant et des difficultés de concentration qui peuvent surprendre.",
        },
        {
          icon: Brain,
          label: "Sautes d'humeur",
          desc: "Une irritabilité, une anxiété ou une tristesse qui semblent disproportionnées — et qui ont une cause hormonale.",
        },
        {
          icon: Droplets,
          label: "Changements physiques",
          desc: "Sécheresse, palpitations, douleurs articulaires liées à la chute d'œstrogènes — des signaux qui méritent d'être accompagnés.",
        },
      ]}
      symptomsCallout="Cette transition mérite un accompagnement doux et personnalisé — pas des généralités ni des régimes punitifs."
      quote="La ménopause n'est pas une fin. C'est une invitation à prendre soin de soi autrement, avec plus de connaissance et d'écoute."
      mechanismTitle="Quel rôle peut jouer l'alimentation pendant la ménopause ?"
      mechanismParagraphs={[
        "L'alimentation ne supprime pas les symptômes de la ménopause. Mais elle peut soutenir ton corps dans cette transition en agissant sur plusieurs leviers essentiels.",
        "À la ménopause, la sensibilité à l'insuline change, les besoins en calcium et en vitamine D augmentent, le risque cardiovasculaire évolue. Adapter l'alimentation à ces changements, c'est agir concrètement sur ce qui se passe dans ton corps.",
        "L'approche n'est pas un régime restrictif. C'est une façon de nourrir ton corps pour qu'il traverse cette période avec le plus de vitalité et de confort possible.",
      ]}
      levers={[
        {
          icon: ShieldCheck,
          title: "Santé osseuse",
          desc: "Calcium, vitamine D, magnésium — protéger les os face à la chute d'œstrogènes, souvent sous-estimée.",
        },
        {
          icon: Heart,
          title: "Santé cardiovasculaire",
          desc: "Le risque cardio augmente après la ménopause — l'alimentation est un outil majeur pour le gérer.",
        },
        {
          icon: Scale,
          title: "Glycémie & poids",
          desc: "La sensibilité à l'insuline change — adapter les repas évite la prise de poids résistante.",
        },
        {
          icon: Flame,
          title: "Réduire l'inflammation",
          desc: "Un terrain anti-inflammatoire peut atténuer certaines bouffées de chaleur et douleurs articulaires.",
        },
        {
          icon: Moon,
          title: "Sommeil & système nerveux",
          desc: "Magnésium, rythme des repas, plantes — des alliés concrets pour retrouver un sommeil récupérateur.",
        },
        {
          icon: Leaf,
          title: "Phytoœstrogènes",
          desc: "Lin, soja fermenté, légumineuses — certains aliments peuvent soutenir la transition hormonale naturellement.",
        },
      ]}
      workTitle="Ce que nous pouvons travailler ensemble"
      workItems={[
        {
          title: "Adapter ton alimentation à cette transition",
          desc: "Les besoins changent à la ménopause — on ajuste l'alimentation pour y répondre concrètement.",
        },
        {
          title: "Soutenir ton énergie au quotidien",
          desc: "Comprendre et corriger ce qui cause la fatigue et le brouillard mental, souvent sous-estimés.",
        },
        {
          title: "Améliorer ton sommeil",
          desc: "Magnésium, timing alimentaire, rituels du soir — des outils concrets pour retrouver un sommeil de qualité.",
        },
        {
          title: "Gérer les variations de poids sans régime",
          desc: "Sans restriction ni frustration — en comprenant ce qui change dans ton métabolisme et comment y répondre.",
        },
        {
          title: "Prendre soin de ta santé osseuse",
          desc: "Calcium, vitamine D, protéines — des bases essentielles face à la chute d'œstrogènes.",
        },
        {
          title: "Soutenir ta santé cardiovasculaire",
          desc: "Le risque cardio augmente après la ménopause — l'alimentation est un levier que peu de femmes exploitent.",
        },
        {
          title: "Retrouver une relation apaisée à ton corps",
          desc: "Cette transition peut être une renaissance. On l'aborde avec bienveillance et sans jugement.",
        },
      ]}
      faq={[
        {
          q: "L'alimentation peut-elle vraiment réduire les bouffées de chaleur ?",
          a: "Certains ajustements alimentaires peuvent contribuer à les atténuer chez certaines femmes — notamment réduire les excitants, stabiliser la glycémie et soutenir le système nerveux. Les résultats varient selon les personnes.",
        },
        {
          q: "Faut-il prendre des compléments alimentaires pendant la ménopause ?",
          a: "Pas systématiquement. On fait le point ensemble sur tes besoins réels avant de recommander quoi que ce soit. Certains compléments (magnésium, vitamine D) sont souvent utiles, d'autres non.",
        },
        {
          q: "Cet accompagnement est-il compatible avec un traitement hormonal ?",
          a: "Oui. Si tu prends un traitement hormonal substitutif, cela ne contre-indique pas un accompagnement en nutrition — les deux se complètent bien.",
        },
        {
          q: "Puis-je être accompagnée en métropole ?",
          a: "Oui, les consultations en visio sont disponibles partout en France avec la même qualité de suivi.",
        },
        {
          q: "À partir de quand commencer l'accompagnement — dès la périménopause ?",
          a: "Idéalement dès les premiers signes de périménopause, pour anticiper les changements plutôt que les subir. Mais il n'est jamais trop tard pour commencer.",
        },
      ]}
      ctaTitle="Cette transition mérite un accompagnement à ta mesure."
    />
  );
}
