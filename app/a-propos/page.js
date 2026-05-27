import APropos from "@/components/pages/APropos";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, personJsonLd, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Apolline Maysounabe — Praticienne Santé Féminine",
  description:
    "Apolline Maysounabe, praticienne certifiée en nutrition et santé féminine, professeure de yoga à Bouillante, Guadeloupe. Parcours et approche.",
  path: "/a-propos",
  type: "profile",
  keywords: [
    "Apolline Maysounabe",
    "praticienne santé féminine",
    "professeure de yoga",
    "Kundalini Yoga",
    "Yin Yoga",
    "Bouillante",
    "Guadeloupe",
    "santé hormonale féminine",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData id="jsonld-person-apropos" data={personJsonLd} />
      <StructuredData
        id="jsonld-bc-apropos"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
        ])}
      />
      <APropos />
    </>
  );
}
