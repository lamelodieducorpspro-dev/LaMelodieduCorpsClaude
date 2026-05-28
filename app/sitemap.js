import { SITE_BASE_URL } from "@/lib/seo";

export default function sitemap() {
  const pages = [
    { path: "/",                                      priority: 1.0,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/mon-accompagnement",                    priority: 0.95, changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/sopk-alimentation-guadeloupe",          priority: 0.9,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/endometriose-alimentation-guadeloupe",  priority: 0.9,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/menopause-alimentation-guadeloupe",     priority: 0.9,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/cours-yoga-bouillante-guadeloupe",      priority: 0.85, changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/a-propos",                              priority: 0.8,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/tarifs",                                priority: 0.75, changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/faq",                                   priority: 0.7,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/contact",                               priority: 0.9,  changeFrequency: "monthly", date: "2026-05-28" },
    { path: "/mentions-legales",                      priority: 0.2,  changeFrequency: "yearly",  date: "2025-01-01" },
    { path: "/cgv",                                   priority: 0.2,  changeFrequency: "yearly",  date: "2025-01-01" },
    { path: "/politique-confidentialite",             priority: 0.2,  changeFrequency: "yearly",  date: "2025-01-01" },
    { path: "/politique-cookies",                     priority: 0.2,  changeFrequency: "yearly",  date: "2025-01-01" },
  ];

  return pages.map((p) => ({
    url: `${SITE_BASE_URL}${p.path}`,
    lastModified: new Date(p.date),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
