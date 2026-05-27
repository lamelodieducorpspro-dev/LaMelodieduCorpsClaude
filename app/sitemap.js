import { SITE_BASE_URL } from "@/lib/seo";

const LAST_UPDATED = new Date("2026-05-27");
const LEGAL_UPDATED = new Date("2025-01-01");

export default function sitemap() {
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/mon-accompagnement", priority: 0.95, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/sopk-alimentation-guadeloupe", priority: 0.9, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/endometriose-alimentation-guadeloupe", priority: 0.9, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/menopause-alimentation-guadeloupe", priority: 0.9, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/cours-yoga-bouillante-guadeloupe", priority: 0.85, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/a-propos", priority: 0.8, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/tarifs", priority: 0.75, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly", date: LAST_UPDATED },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly", date: LEGAL_UPDATED },
    { path: "/cgv", priority: 0.2, changeFrequency: "yearly", date: LEGAL_UPDATED },
    { path: "/politique-confidentialite", priority: 0.2, changeFrequency: "yearly", date: LEGAL_UPDATED },
    { path: "/politique-cookies", priority: 0.2, changeFrequency: "yearly", date: LEGAL_UPDATED },
  ];

  return pages.map((p) => ({
    url: `${SITE_BASE_URL}${p.path}`,
    lastModified: p.date,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
