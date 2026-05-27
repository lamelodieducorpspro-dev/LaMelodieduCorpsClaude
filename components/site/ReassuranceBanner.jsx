import { Star, GraduationCap, Leaf, Laptop } from "lucide-react";
import { GOOGLE_REVIEW_COUNT, GOOGLE_REVIEW_RATING } from "@/lib/constants";

const items = [
  { icon: Star, text: `${GOOGLE_REVIEW_COUNT} avis ${GOOGLE_REVIEW_RATING}/5 sur Google` },
  { icon: GraduationCap, text: "Certifiée Hygie Pro" },
  { icon: Leaf, text: "Approche naturelle & holistique" },
  { icon: Laptop, text: "Consultations à distance" },
];

export default function ReassuranceBanner() {
  const repeated = [...items, ...items, ...items];
  return (
    <div data-testid="reassurance-banner" className="bg-cream-2 border-y border-[#E2DCD0] py-5" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {repeated.map((it, i) => {
            const Icon = it.icon;
            return (
              <span key={i} className="inline-flex items-center gap-3 text-forest font-serif text-lg">
                <Icon className="w-5 h-5 text-terracotta" />
                {it.text}
                <span className="text-sage mx-2">·</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
