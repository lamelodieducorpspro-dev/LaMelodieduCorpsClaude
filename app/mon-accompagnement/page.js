import Accompagnement from "@/components/pages/Accompagnement";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb, SITE_BASE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accompagnement santé féminine",
  description:
    "Accompagnement personnalisé en nutrition et santé hormonale féminine : 2 séances bilan puis 3 séances de suivi, SMOP, endométriose, ménopause. Cabinet à Bouillante, Guadeloupe ou visio France entière.",
  path: "/mon-accompagnement",
  keywords: [
    "accompagnement santé féminine",
    "santé hormonale féminine",
    "SMOP",
    "SOPK",
    "endométriose",
    "ménopause",
    "fatigue chronique",
    "troubles digestifs",
    "nutrition",
    "Bouillante",
    "Guadeloupe",
    "visio",
  ],
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_BASE_URL}/mon-accompagnement#service`,
  name: "Accompagnement en nutrition et santé hormonale féminine",
  description:
    "Accompagnement personnalisé en nutrition holistique et santé féminine, sur une base de 5 séances : 2 séances bilan puis 3 séances de suivi. Programmes SMOP, endométriose, ménopause, fatigue. Cabinet à Bouillante, Guadeloupe et visio partout en France.",
  provider: { "@id": `${SITE_BASE_URL}/#localbusiness` },
  serviceType: "Nutrition holistique et santé féminine",
  areaServed: ["Guadeloupe", "France"],
  offers: [
    {
      "@type": "Offer",
      name: "Appel découverte",
      description: "Appel découverte gratuit de 15 minutes pour faire le point sur ta situation.",
      price: "0",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Séance bilan",
      description:
        "Séance bilan complète de 2 heures. L'accompagnement en comprend 2 pour établir un programme personnalisé.",
      price: "110",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Séance de suivi",
      description:
        "Séance de suivi individuelle de 1h30. L'accompagnement en comprend 3, avec la possibilité d'en ajouter.",
      price: "80",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Accompagnement complet (5 séances)",
      description:
        "Accompagnement de référence : 2 séances bilan de 2h puis 3 séances de suivi de 1h30, sur 3 à 4 mois.",
      price: "460",
      priceCurrency: "EUR",
    },
  ],
};

export default function Page() {
  return (
    <>
      <StructuredData
        id="jsonld-bc-accompagnement"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Mon accompagnement", path: "/mon-accompagnement" },
        ])}
      />
      <StructuredData id="jsonld-service" data={serviceJsonLd} />
      <Accompagnement />
    </>
  );
}
