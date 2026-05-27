export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-cream text-forest px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-sage"
    >
      Aller au contenu
    </a>
  );
}
