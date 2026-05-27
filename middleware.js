import { NextResponse } from "next/server";

/**
 * Canonical host strategy for lamelodieducorps.com
 * --------------------------------------------------
 * Reality (as of May 2026): Emergent / Cloudflare automatically redirects
 * www.lamelodieducorps.com -> lamelodieducorps.com (308). This happens
 * BEFORE the request reaches Next.js, so middleware cannot reverse it.
 *
 * Strategy: align with what the platform enforces -> canonical = non-www.
 * If you ever flip the platform to prefer www, just swap CANONICAL_HOST below.
 */
const CANONICAL_HOST = "lamelodieducorps.com";
const ALL_PROD_HOSTS = new Set([
  "lamelodieducorps.com",
  "www.lamelodieducorps.com",
]);

// Accent-stripped redirects (kept as a map for clarity).
// We compare the *decoded* pathname so both raw and percent-encoded
// forms (e.g. "/%C3%A0-propos") are caught.
const ACCENT_REDIRECTS = {
  "/à-propos": "/a-propos",
  "/mentions-légales": "/mentions-legales",
  "/ménopause": "/menopause-alimentation-guadeloupe",
};

export function middleware(request) {
  const { nextUrl } = request;

  // ---- 1) Accent-stripped 301 redirects ----
  // Note: HTTPS and canonical host (non-www) redirection is handled by Vercel/Emergent platform.
  // This middleware only handles accent-stripped redirects to avoid conflicts.
  // decodeURIComponent handles "%C3%A0" / "%C3%A9" / etc.
  let decoded = nextUrl.pathname;
  try {
    decoded = decodeURIComponent(nextUrl.pathname);
  } catch {
    /* keep raw */
  }
  if (ACCENT_REDIRECTS[decoded]) {
    const target = new URL(
      ACCENT_REDIRECTS[decoded] + nextUrl.search,
      nextUrl.origin
    );
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on every route EXCEPT Next internals, API, and static files.
    // (Including /_next/static, favicon, images, robots, sitemap.)
    "/((?!_next/static|_next/image|api|favicon\\.ico|images|robots\\.txt|sitemap\\.xml).*)",
  ],
};
