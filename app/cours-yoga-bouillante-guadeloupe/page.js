import Yoga from "@/components/pages/Yoga";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Yoga Bouillante — Yin & Kundalini Yoga",
  description:
    "Cours de Kundalini Yoga (lundi) et Yin Yoga (mercredi) à Bouillante, Guadeloupe. Yoga'Niti Studio. Dès 12€. Réservation par WhatsApp.",
  path: "/cours-yoga-bouillante-guadeloupe",
  type: "website",
  keywords: [
    "cours yoga Bouillante",
    "Yin Yoga Guadeloupe",
    "Kundalini Yoga Bouillante",
    "yoga Guadeloupe",
    "Yoga'Niti Studio",
    "santé féminine",
    "équilibre hormonal",
    "stress",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        id="jsonld-bc-yoga"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Yoga à Bouillante", path: "/cours-yoga-bouillante-guadeloupe" },
        ])}
      />
      <Yoga />
    </>
  );
}
