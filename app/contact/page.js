import Contact from "@/components/pages/Contact";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Appel découverte gratuit — Santé Féminine Guadeloupe",
  description:
    "Réservez votre appel découverte gratuit de 15 min avec Apolline. Cabinet à Bouillante, domicile ou visio France entière. Sans engagement.",
  path: "/contact",
  keywords: [
    "appel découverte gratuit",
    "prendre rendez-vous santé féminine Guadeloupe",
    "SOPK rendez-vous",
    "contact Bouillante",
    "réservation visio",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        id="jsonld-bc-contact"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Prendre rendez-vous", path: "/contact" },
        ])}
      />
      <Contact />
    </>
  );
}
