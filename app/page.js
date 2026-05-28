import Home from "@/components/pages/Home";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "La Mélodie du Corps — Santé Hormonale Féminine, Guadeloupe",
  description:
    "Apolline, praticienne en nutrition et santé féminine à Bouillante, Guadeloupe. SOPK, endométriose, ménopause, fatigue. Appel découverte gratuit.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "santé hormonale féminine",
    "SOPK",
    "endométriose",
    "ménopause",
    "santé féminine Guadeloupe",
    "Bouillante",
    "appel découverte gratuit",
    "nutrition",
    "fatigue chronique",
  ],
});

export default function Page() {
  return <Home />;
}
