import Tarifs from "@/components/pages/Tarifs";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tarifs — santé féminine Guadeloupe",
  description:
    "Appel découverte gratuit · Bilan initial 90€ · Séance de suivi 50€. Consultations en cabinet à Bouillante, Guadeloupe, à domicile ou en visioconférence partout en France.",
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
