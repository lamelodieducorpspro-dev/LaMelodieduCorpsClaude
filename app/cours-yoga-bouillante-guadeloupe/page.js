import Yoga from "@/components/pages/Yoga";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb, SITE_BASE_URL } from "@/lib/seo";

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

const yogaLocation = {
  "@type": "Place",
  name: "Yoga'Niti Studio",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Village de Bouillante",
    addressLocality: "Bouillante",
    postalCode: "97125",
    addressRegion: "Guadeloupe",
    addressCountry: "FR",
  },
};

const kundaliniEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Cours de Kundalini Yoga — Yoga'Niti Studio Bouillante",
  description:
    "Cours collectif de Kundalini Yoga chaque lundi à Bouillante, Guadeloupe. Accessible à tous niveaux. Énergie, respiration et mouvement.",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: yogaLocation,
  organizer: { "@id": `${SITE_BASE_URL}/#localbusiness` },
  offers: {
    "@type": "Offer",
    price: "15",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${SITE_BASE_URL}/cours-yoga-bouillante-guadeloupe`,
  },
  eventSchedule: {
    "@type": "Schedule",
    byDay: "https://schema.org/Monday",
    startTime: "18:00",
    endTime: "19:30",
    scheduleTimezone: "America/Guadeloupe",
    repeatFrequency: "P1W",
  },
};

const yinYogaEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Cours de Yin Yoga — Yoga'Niti Studio Bouillante",
  description:
    "Cours collectif de Yin Yoga avec Apolline chaque mercredi à Bouillante, Guadeloupe. Postures douces, relâchement profond, retour à soi.",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: yogaLocation,
  organizer: { "@id": `${SITE_BASE_URL}/#localbusiness` },
  offers: {
    "@type": "Offer",
    price: "12",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${SITE_BASE_URL}/cours-yoga-bouillante-guadeloupe`,
  },
  eventSchedule: {
    "@type": "Schedule",
    byDay: "https://schema.org/Wednesday",
    startTime: "18:00",
    endTime: "19:00",
    scheduleTimezone: "America/Guadeloupe",
    repeatFrequency: "P1W",
  },
};

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
      <StructuredData id="jsonld-event-kundalini" data={kundaliniEventJsonLd} />
      <StructuredData id="jsonld-event-yin" data={yinYogaEventJsonLd} />
      <Yoga />
    </>
  );
}
