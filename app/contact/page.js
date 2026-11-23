import Contact from "@/components/pages/Contact";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact — nutrition & santé féminine, Guadeloupe",
  description:
    "Écris à Apolline Maysounabe — formulaire, WhatsApp ou email, réponse sous 48h. Cabinet à Bouillante, Guadeloupe, et consultations en visio partout en France.",
  path: "/contact",
  keywords: [
    "contact nutritionniste Guadeloupe",
    "contact Bouillante",
    "praticienne nutrition santé féminine contact",
    "WhatsApp nutrition Guadeloupe",
    "consultation visio nutrition",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        id="jsonld-bc-contact"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Contact />
    </>
  );
}
