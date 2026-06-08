"use client";

import {
  Zap,
  Activity,
  Sparkles,
  TrendingDown,
  Scale,
  Brain,
  Flame,
  Leaf,
  Moon,
  Heart,
} from "lucide-react";
import ConditionPage from "@/components/site/ConditionPage";
import { IMG } from "@/lib/constants";

export default function SOPK() {
  return (
    <ConditionPage
      overline="Santé hormonale féminine · SMOP"
      h1="SMOP (anciennement SOPK) et Alimentation : soutenir son équilibre hormonal naturellement"
      heroImg={IMG.sopk}
      heroAlt="SMOP et alimentation : accompagnement nutritionnel par Apolline à Bouillante, Guadeloupe"
      intro="Le SOPK (Syndrome des Ovaires Polykystiques) a été officiellement renommé SMOP (Syndrome Métabolique Ovarien Polyendocrinien) en mai 2026. Cette page adopte progressivement cette nouvelle nomenclature. Cycles irréguliers, fatigue persistante, acné hormonale, fringales intenses… Le SMOP impacte bien plus que le seul cycle menstruel. L'alimentation est l'un des leviers les plus puissants pour retrouver plus de confort et de stabilité — sans régime, sans liste d'interdits."
      symptomsTitle="Ce que tu vis peut-être"
      symptomsLead="Le SMOP se manifeste différemment d'une femme à l'autre. Ces symptômes sont réels — et ils méritent une attention concrète, pas des explications vagues."
      symptoms={[
        {
          icon: Zap,
          label: "Fatigue persistante",
          desc: "Même après une nuit complète, l'énergie ne revient pas vraiment. Une fatigue lourde, difficile à expliquer.",
        },
        {
          icon: Activity,
          label: "Cycles irréguliers ou absents",
          desc: "Des règles imprévisibles, très espacées ou absentes qui rendent le cycle difficile à vivre et à anticiper.",
        },
        {
          icon: Sparkles,
          label: "Acné hormonale",
          desc: "Des boutons récurrents sur le menton, les joues ou le dos, qui reviennent en rythme avec le cycle.",
        },
        {
          icon: TrendingDown,
          label: "Glycémie instable",
          desc: "Fringales intenses, coups de barre après les repas, envies de sucre difficiles à contrôler.",
        },
        {
          icon: Scale,
          label: "Poids difficile à gérer",
          desc: "Une prise de poids résistante aux efforts, souvent concentrée au niveau du ventre, sans explication claire.",
        },
        {
          icon: Brain,
          label: "Charge mentale et humeur",
          desc: "Irritabilité accrue, tête toujours pleine, fatigue mentale avant même que la journée commence.",
        },
      ]}
      symptomsCallout="Ces symptômes ne sont pas dans ta tête. Tu n'as pas à les minimiser, ni à les subir seule."
      quote="Le SOPK n'est pas une condamnation. C'est un message de ton corps qui demande plus d'attention, pas moins."
      mechanismTitle="Comment l'alimentation peut soutenir ton équilibre"
      mechanismParagraphs={[
        "L'alimentation ne guérit pas le SMOP. Mais elle peut agir sur plusieurs mécanismes qui influencent directement tes symptômes.",
        "La résistance à l'insuline est présente chez 50 à 70 % des femmes avec un SOPK — et elle amplifie le déséquilibre hormonal. Stabiliser la glycémie est souvent le premier levier concret.",
        "L'objectif n'est pas un régime strict ou une liste d'aliments à bannir. C'est de comprendre ce dont ton corps a besoin pour retrouver plus d'équilibre — et de le mettre en place sans pression.",
      ]}
      levers={[
        {
          icon: TrendingDown,
          title: "Glycémie & insuline",
          desc: "Composer les repas pour réduire les pics d'insuline, premier perturbateur hormonal dans le SMOP.",
        },
        {
          icon: Flame,
          title: "Inflammation chronique",
          desc: "Un terrain moins inflammatoire soutient la régulation hormonale globale et réduit certains symptômes.",
        },
        {
          icon: Leaf,
          title: "Microbiote intestinal",
          desc: "L'intestin participe à la régulation des œstrogènes et des androgènes — on en prend soin concrètement.",
        },
        {
          icon: Zap,
          title: "Énergie & vitalité",
          desc: "Des repas bien construits qui soutiennent l'énergie tout au long de la journée, sans montagnes russes.",
        },
        {
          icon: Heart,
          title: "Précurseurs hormonaux",
          desc: "Protéines, bons gras et micronutriments essentiels à la synthèse et à l'équilibre hormonal.",
        },
        {
          icon: Moon,
          title: "Stress & sommeil",
          desc: "Le cortisol chronique perturbe les hormones sexuelles — on travaille les deux leviers ensemble.",
        },
      ]}
      workTitle="Ce que nous pouvons travailler ensemble"
      workItems={[
        {
          title: "Comprendre ton fonctionnement hormonal",
          desc: "On décrypte ensemble ce qui se passe dans ton corps, sans jargon médical superflu.",
        },
        {
          title: "Stabiliser ton énergie au quotidien",
          desc: "Identifier ce qui cause les coups de barre et mettre en place des solutions réalistes.",
        },
        {
          title: "Réduire les variations de glycémie",
          desc: "Composer tes repas pour moins de fringales et moins de fatigue post-repas.",
        },
        {
          title: "Soutenir ta digestion et ton microbiote",
          desc: "L'intestin joue un rôle dans l'équilibre hormonal — on en prend soin concrètement.",
        },
        {
          title: "Apaiser les fringales",
          desc: "En comprenant les déclencheurs et en y répondant mieux — pas en imposant des interdits.",
        },
        {
          title: "Retrouver une relation sereine à la nourriture",
          desc: "Moins de culpabilité, plus de plaisir — apprendre à manger avec bienveillance.",
        },
        {
          title: "Remettre du cadre sans rigidité",
          desc: "La régularité plutôt que la perfection. Un cadre qui soutient sans contraindre.",
        },
        {
          title: "Construire des habitudes durables",
          desc: "Des changements progressifs et réalistes, adaptés à ta vie en Guadeloupe.",
        },
      ]}
      faq={[
        {
          q: "L'alimentation peut-elle vraiment changer les choses avec le SMOP ?",
          a: "Oui, l'alimentation est un levier essentiel, elle aide à soutenir l'équilibre hormonal, réduire l'inflammation et améliorer le confort au quotidien. Beaucoup de femmes constatent des améliorations sur la fatigue, les fringales et la régularité du cycle après quelques semaines.",
        },
        {
          q: "Faut-il arrêter le gluten ou les produits laitiers ?",
          a: "Tout dépend de ton terrain de base, ces questions se traitent au cas par cas selon ta situation et tes symptômes. Malgré tout, je vois souvent les symptômes des femmes soulagés lorsqu'on réduit ces produits. Dans mon approche, je ne bannis rien, mais quand c'est nécessaire on vient limiter ces aliments.",
        },
        {
          q: "Cet accompagnement remplace-t-il mon suivi gynécologique ?",
          a: "Non. Mon accompagnement est complémentaire à ton suivi médical, jamais en remplacement. Les deux sont nécessaires — et ils se complètent bien.",
        },
        {
          q: "Puis-je être accompagnée si je suis en métropole ?",
          a: "Oui, les consultations en visio sont disponibles partout en France, avec la même qualité d'écoute et de suivi.",
        },
        {
          q: "Combien de temps avant de voir des résultats ?",
          a: "Chaque femme est différente. Cependant, on observe souvent des premières améliorations après entre la première et deuxième séance notamment concernant l'énergie et les fringales. C'est pourquoi je propose un accompagnement sur plusieurs séances, pour vraiment ancrer les changements et faire en sorte que les bénéfices restent après l'accompagnement.",
        },
      ]}
      ctaTitle="Prête à prendre soin de ton équilibre hormonal ?"
    />
  );
}
