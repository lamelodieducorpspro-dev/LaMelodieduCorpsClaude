"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#F5F0E8] flex items-center justify-center font-sans">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#849974", marginBottom: "20px" }}>
            Erreur critique
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem, 6vw, 4rem)", color: "#2C4A3B", fontWeight: 400, marginBottom: "24px" }}>
            Une erreur inattendue est survenue
          </h1>
          <p style={{ color: "#4A5D54", lineHeight: 1.6, marginBottom: "32px" }}>
            La page n&apos;a pas pu se charger. Vous pouvez réessayer ou revenir à l&apos;accueil.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => reset()}
              style={{ background: "#2C4A3B", color: "#fff", padding: "12px 28px", borderRadius: "999px", border: "none", cursor: "pointer", fontWeight: 500 }}
            >
              Réessayer
            </button>
            <a
              href="/"
              style={{ background: "transparent", color: "#2C4A3B", padding: "12px 28px", borderRadius: "999px", border: "1px solid #2C4A3B", textDecoration: "none", fontWeight: 500 }}
            >
              Retour à l&apos;accueil
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
