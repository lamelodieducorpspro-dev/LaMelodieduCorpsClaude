import { NextResponse } from "next/server";

const KEY = "lamelodie9f3c2e1d4b5a6f7";
const HOST = "lamelodieducorps.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/mon-accompagnement`,
  `https://${HOST}/sopk-alimentation-guadeloupe`,
  `https://${HOST}/endometriose-alimentation-guadeloupe`,
  `https://${HOST}/menopause-alimentation-guadeloupe`,
  `https://${HOST}/cours-yoga-bouillante-guadeloupe`,
  `https://${HOST}/a-propos`,
  `https://${HOST}/tarifs`,
  `https://${HOST}/faq`,
  `https://${HOST}/contact`,
];

// POST /api/indexnow — soumet toutes les URLs au protocole IndexNow (Bing, Yandex, Naver).
// Appeler après un déploiement pour une ré-indexation quasi-instantanée.
// Protégé par un secret en header pour éviter les abus.
export async function POST(request) {
  const secret = request.headers.get("x-indexnow-secret");
  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: URLS,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    return NextResponse.json({ submitted: URLS.length, urls: URLS });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
