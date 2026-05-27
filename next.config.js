/** @type {import('next').NextConfig} */
const redirects = async () => [
  // Old internal canonical URLs → new SEO-friendly URLs
  { source: "/specialites/sopk", destination: "/sopk-alimentation-guadeloupe", permanent: true },
  { source: "/specialites/endometriose", destination: "/endometriose-alimentation-guadeloupe", permanent: true },
  { source: "/specialites/menopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/accompagnement", destination: "/mon-accompagnement", permanent: true },
  { source: "/yoga", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  // Legacy Wix-style URLs (accents handled via middleware too)
  { source: "/mentions-légales", destination: "/mentions-legales", permanent: true },
  { source: "/à-propos", destination: "/a-propos", permanent: true },
  { source: "/apropos", destination: "/a-propos", permanent: true },
  { source: "/prise-rdv", destination: "/contact", permanent: true },
  { source: "/prise-de-rdv", destination: "/contact", permanent: true },
  { source: "/prendre-rdv", destination: "/contact", permanent: true },
  { source: "/prendre-rendez-vous", destination: "/contact", permanent: true },
  { source: "/cours-de-yoga", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  { source: "/yoga-bouillante", destination: "/cours-yoga-bouillante-guadeloupe", permanent: true },
  { source: "/sopk", destination: "/sopk-alimentation-guadeloupe", permanent: true },
  { source: "/endometriose", destination: "/endometriose-alimentation-guadeloupe", permanent: true },
  { source: "/menopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/ménopause", destination: "/menopause-alimentation-guadeloupe", permanent: true },
  { source: "/home", destination: "/", permanent: true },
  { source: "/accueil", destination: "/", permanent: true },
  { source: "/services", destination: "/mon-accompagnement", permanent: true },
  { source: "/about", destination: "/a-propos", permanent: true },
  { source: "/contact-fr", destination: "/contact", permanent: true },
];

// Sources externes connues du site :
// - Elfsight : widget Google Reviews (scripts + assets)
// - next/font/google auto-héberge les polices → pas besoin de fonts.googleapis.com
// - lh3.googleusercontent.com : avatars dans les avis Google (via remotePatterns)
// X-Frame-Options SAMEORIGIN sert de fallback pour les très vieux navigateurs
// (les navigateurs modernes suivent le CSP frame-ancestors, qui reste à *
//  pour permettre la prévisualisation dans l'iframe Emergent).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + Elfsight (platform.js + widgets)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://elfsightcdn.com https://static.elfsight.com https://core.service.elfsight.com",
      // Tailwind inline styles + polices auto-hébergées
      "style-src 'self' 'unsafe-inline'",
      // Polices auto-hébergées via next/font
      "font-src 'self'",
      // Images locales + avatars Google + data URIs
      "img-src 'self' data: blob: https://lh3.googleusercontent.com https://elfsightcdn.com https://static.elfsight.com",
      // API interne + appels Elfsight
      "connect-src 'self' https://service.elfsight.com https://core.service.elfsight.com https://elfsightcdn.com",
      // Iframes Elfsight widget si nécessaire
      "frame-src https://elfsightcdn.com https://static.elfsight.com",
      // Permet l'intégration dans l'iframe Emergent (preview)
      "frame-ancestors *",
    ].join("; "),
  },
];

// Vercel sets VERCEL=1 automatically — use it to switch between build modes.
// On Emergent/Docker: standalone output + unoptimized images (required).
// On Vercel: no standalone, Vercel handles image optimisation automatically.
const isVercel = process.env.VERCEL === "1";

const nextConfig = {
  ...(!isVercel && { output: "standalone" }),
  poweredByHeader: false,
  compress: true,
  images: {
    ...(!isVercel && { unoptimized: true }),
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "elfsightcdn.com" },
      { protocol: "https", hostname: "static.elfsight.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  serverExternalPackages: ["mongodb"],
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = { poll: 2000, aggregateTimeout: 300, ignored: ["**/node_modules"] };
    }
    return config;
  },
  onDemandEntries: { maxInactiveAge: 10000, pagesBufferLength: 2 },
  redirects,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        // CORS uniquement sur les routes API
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        ],
      },
      {
        // Long-term cache for static images
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = nextConfig;
