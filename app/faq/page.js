import FAQ from "@/components/pages/FAQ";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildFAQJsonLd, buildBreadcrumb } from "@/lib/seo";
import { faqCategories } from "@/lib/faq-data";

export const metadata = buildMetadata({
  title: "FAQ — Nutrition, SOPK & Santé Féminine",
  description:
    "Toutes vos questions sur la nutrition et la santé féminine : SOPK, endométriose, ménopause. Réponses claires avant votre premier rendez-vous.",
  path: "/faq",
  keywords: [
    "FAQ SOPK",
    "FAQ endométriose alimentation",
    "FAQ ménopause nutrition",
    "santé féminine questions",
    "Bouillante",
    "yoga questions",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData
        id="jsonld-faq"
        data={buildFAQJsonLd(faqCategories.flatMap((cat) => cat.items))}
      />
      <StructuredData
        id="jsonld-bc-faq"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <FAQ />
    </>
  );
}
