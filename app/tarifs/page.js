import Tarifs from "@/components/pages/Tarifs";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tarifs — Nutrition & Santé Féminine, Guadeloupe",
  description:
    "Appel découverte gratuit · Bilan 90€ · Suivi 50€/h. Cabinet Bouillante, domicile Côte-sous-le-Vent ou visio. Certaines mutuelles remboursent partiellement.",
  path: "/tarifs",
  keywords: [
    "tarif nutritionniste Guadeloupe",
    "prix consultation santé féminine",
    "appel découverte gratuit",
    "bilan nutrition Bouillante",
    "mutuelle nutrition",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        id="jsonld-bc-tarifs"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Tarifs", path: "/tarifs" },
        ])}
      />
      <Tarifs />
    </>
  );
}
