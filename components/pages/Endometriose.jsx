"use client";

import {
  Flame,
  Zap,
  Wind,
  Activity,
  Heart,
  Brain,
  Leaf,
  TrendingDown,
  Moon,
} from "lucide-react";
import ConditionPage from "@/components/site/ConditionPage";
import { IMG } from "@/lib/constants";

export default function Endometriose() {
  return (
    <ConditionPage
      overline="Santé hormonale féminine · Endométriose"
      h1="Endométriose et Alimentation : accompagner son corps avec douceur"
      heroImg={IMG.endo}
      heroAlt="Endométriose et alimentation anti-inflammatoire : accompagnement par Apolline à Bouillante, Guadeloupe"
      intro="Douleurs chroniques, fatigue profonde, troubles digestifs, inflammation — vivre avec l'endométriose, c'est composer avec un corps exigeant au quotidien. Mon accompagnement ne remplace pas ton suivi médical. Il vient en complément, pour t'aider à mieux soutenir ton corps et retrouver plus de confort."
      symptomsTitle="Ce que tu vis peut-être"
      symptomsLead="L'endométriose touche environ 1 femme sur 10 en âge de procréer. Ces symptômes peuvent varier enormément — et méritent d'être pris au sérieux, pas banalisés."
      symptoms={[
        {
          icon: Flame,
          label: "Douleurs menstruelles intenses",
          desc: "Des crampes invalidantes qui ne ressemblent pas à de simples règles douloureuses — parfois au point d'empêcher d'aller travailler.",
        },
        {
          icon: Zap,
          label: "Fatigue chronique profonde",
          desc: "Une fatigue qui ne part pas avec le repos, souvent aggravée pendant les règles ou les périodes d'inflammation.",
        },
        {
          icon: Wind,
          label: "Troubles digestifs récurrents",
          desc: "Ballonnements importants, transit perturbé, inconfort intestinal — souvent aggravés à certaines phases du cycle.",
        },
        {
          icon: Activity,
          label: "Douleurs pelviennes chroniques",
          desc: "Des douleurs diffuses au niveau du bas-ventre, du dos ou du bassin, présentes en dehors des règles.",
        },
        {
          icon: Heart,
          label: "Douleurs intimes",
          desc: "Des douleurs pendant les rapports qui pèsent sur la vie intime et la confiance en soi — elles sont réelles et traitables.",
        },
        {
          icon: Brain,
          label: "Épuisement mental",
          desc: "Vivre avec la douleur et l'incertitude use profondément l'énergie mentale, en plus de l'énergie physique.",
        },
      ]}
      symptomsCallout="Tu n'as pas à souffrir en silence. Tu n'as pas à entendre que c'est normal. Ces symptômes méritent une prise en charge réelle."
      quote="Vivre avec l'endométriose ne veut pas dire se battre contre son corps. Ça peut aussi être apprendre à l'écouter autrement."
      mechanismTitle="Quel est le lien entre alimentation et endométriose ?"
      mechanismParagraphs={[
        "L'alimentation ne guérit pas l'endométriose. Mais elle peut soutenir certains terrains qui influencent directement ton confort au quotidien.",
        "L'endométriose est une maladie inflammatoire chronique. Agir sur l'inflammation via l'alimentation n'est pas accessoire — c'est l'un des leviers les plus concrets disponibles en dehors du traitement médical.",
        "L'approche est individualisée : ce qui aide une femme peut ne pas aider une autre. On part de ta situation, de tes symptômes réels — pas d'un protocole universel.",
      ]}
      levers={[
        {
          icon: Flame,
          title: "Inflammation chronique",
          desc: "Identifier et réduire les aliments et habitudes qui nourrissent l'inflammation — premier levier.",
        },
        {
          icon: Wind,
          title: "Confort digestif",
          desc: "Ballonnements, transit, perméabilité intestinale — des symptômes fréquents avec l'endo qu'on travaille concrètement.",
        },
        {
          icon: Leaf,
          title: "Microbiote intestinal",
          desc: "Un microbiote équilibré régule mieux les œstrogènes et réduit l'inflammation systémique.",
        },
        {
          icon: Zap,
          title: "Énergie & récupération",
          desc: "Des apports nutritionnels ciblés pour lutter contre la fatigue chronique liée à l'inflammation.",
        },
        {
          icon: TrendingDown,
          title: "Glycémie & insuline",
          desc: "La stabilisation glycémique réduit les pics inflammatoires et améliore l'énergie globale.",
        },
        {
          icon: Moon,
          title: "Sommeil & stress",
          desc: "Le sommeil récupérateur et la gestion du stress sont des alliés puissants contre la douleur chronique.",
        },
      ]}
      workTitle="Ce que nous pouvons travailler ensemble"
      workItems={[
        {
          title: "Réduire les facteurs inflammatoires",
          desc: "Identifier et agir sur les aliments et habitudes qui nourrissent l'inflammation au quotidien.",
        },
        {
          title: "Améliorer ton confort digestif",
          desc: "Ballonnements, transit, inconfort intestinal — des symptômes souvent ignorés mais qu'on peut vraiment soulager.",
        },
        {
          title: "Identifier tes sensibilités individuelles",
          desc: "Gluten, produits laitiers, FODMAPs… selon tes symptômes, pas de règle universelle — juste ta situation.",
        },
        {
          title: "Gérer la fatigue profonde",
          desc: "Comprendre ce qui épuise ton corps et ajuster l'alimentation et le rythme de vie pour récupérer mieux.",
        },
        {
          title: "Soutenir ton sommeil",
          desc: "Le sommeil récupérateur est un allié puissant contre la douleur et l'inflammation — on travaille dessus.",
        },
        {
          title: "Organiser ton quotidien autour du cycle",
          desc: "Adapter l'alimentation et l'énergie à chaque phase pour ne plus être prise au dépourvu.",
        },
        {
          title: "Soutenir les jours difficiles",
          desc: "Des stratégies nutritionnelles pour les périodes de douleur intense — sans ajouter de pression supplémentaire.",
        },
        {
          title: "Te reconnecter à ton corps avec douceur",
          desc: "Apprendre à l'écouter plutôt qu'à le combattre — une relation qui change vraiment les choses.",
        },
      ]}
      faq={[
        {
          q: "Dois-je manger sans gluten avec l'endométriose ?",
          a: "Certaines femmes constatent un mieux-être en réduisant le gluten, d'autres non. Cela se travaille au cas par cas selon tes symptômes digestifs et tes sensibilités. Pas de règle universelle — on part de ta situation.",
        },
        {
          q: "L'alimentation anti-inflammatoire, c'est compliqué à mettre en place ?",
          a: "Non. On commence par des ajustements progressifs et réalistes, adaptés à ta vie en Guadeloupe. L'objectif n'est pas la perfection — c'est le mieux-être durable, à ton rythme.",
        },
        {
          q: "Cet accompagnement remplace-t-il mon suivi médical ?",
          a: "Non. Mon accompagnement est complémentaire à ton suivi gynécologique et médical, jamais en remplacement. Les deux sont nécessaires et ils se complètent.",
        },
        {
          q: "Puis-je être accompagnée si je suis en métropole ?",
          a: "Oui, les consultations en visio sont disponibles partout en France avec la même qualité de suivi et d'écoute.",
        },
        {
          q: "Est-ce que ça peut vraiment m'aider si j'ai une forme sévère ?",
          a: "L'alimentation peut apporter un soutien complémentaire quelle que soit la sévérité de l'endométriose. Elle ne remplace pas le traitement médical, mais elle peut améliorer le confort de vie au quotidien — même dans les formes avancées.",
        },
      ]}
      ctaTitle="Envie de prendre soin de ton corps avec plus de douceur ?"
    />
  );
}
