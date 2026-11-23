import Tarifs from "@/components/pages/Tarifs";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tarifs & réservation — santé féminine Guadeloupe",
  description:
    "Tarifs et réservation en ligne : appel découverte gratuit · 2 séances bilan de 2h à 110€ · 3 séances de suivi de 1h30 à 80€. Cabinet à Bouillante, Guadeloupe ou visioconférence partout en France.",
  path: "/tarifs",
  keywords: [
    "tarif nutritionniste Guadeloupe",
    "prix consultation santé féminine",
    "appel découverte gratuit",
    "prendre rendez-vous santé féminine Guadeloupe",
    "réservation visio nutrition",
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
