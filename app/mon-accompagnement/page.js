import Accompagnement from "@/components/pages/Accompagnement";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb, SITE_BASE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Accompagnement Santé Féminine & Nutrition",
  description:
    "Accompagnement personnalisé en nutrition et santé hormonale féminine : bilan, suivi, cabinet à Bouillante, Guadeloupe ou visio France entière.",
  path: "/mon-accompagnement",
  keywords: [
    "accompagnement santé féminine",
    "santé hormonale féminine",
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
    "Accompagnement personnalisé en nutrition holistique et santé féminine : bilan initial, suivi individuel, programmes SOPK, endométriose, ménopause, fatigue. Cabinet à Bouillante, Guadeloupe et visio partout en France.",
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
      name: "Bilan initial",
      description: "Séance bilan complète de 90 minutes pour établir un programme personnalisé.",
      price: "90",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Séance de suivi",
      description: "Séance de suivi individuelle d'une heure.",
      price: "50",
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
