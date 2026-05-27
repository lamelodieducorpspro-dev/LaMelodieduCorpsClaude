import Accompagnement from "@/components/pages/Accompagnement";
import { buildMetadata } from "@/lib/seo";

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

export default function Page() {
  return <Accompagnement />;
}
