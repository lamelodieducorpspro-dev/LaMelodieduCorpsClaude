"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ROUTE_LABELS = {
  "/": "Accueil",
  "/a-propos": "À propos",
  "/mon-accompagnement": "Mon accompagnement",
  "/sopk-alimentation-guadeloupe": "SOPK",
  "/endometriose-alimentation-guadeloupe": "Endométriose",
  "/menopause-alimentation-guadeloupe": "Ménopause",
  "/cours-yoga-bouillante-guadeloupe": "Yoga",
  "/tarifs": "Tarifs",
  "/faq": "FAQ",
  "/contact": "Contact",
  "/cgv": "CGV",
  "/mentions-legales": "Mentions légales",
  "/politique-confidentialite": "Politique de confidentialité",
  "/politique-cookies": "Politique de cookies",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  const crumbs = [
    { name: "Accueil", path: "/" },
    ...(pathname !== "/" && ROUTE_LABELS[pathname]
      ? [{ name: ROUTE_LABELS[pathname], path: pathname }]
      : []),
  ];

  if (crumbs.length <= 1) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-0">
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={crumb.path} className="inline-flex items-center gap-1.5">
                {i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.path}>{crumb.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
