/**
 * Dynamiczne pobieranie URL backendu
 */
let API_BASE = null;

async function loadBackendUrl() {
  console.log("[API] Fetching backend URL...");

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwYD60yf7_h0Ucu99-sfYGLnivbpM5jPZYKHxOMCyWAGSthFh3bDE4YqZbaajtO-KuP9Q/exec?path=system/webapp-url"
    );

    const data = await res.json();
    API_BASE = data.url;

    console.log("[API] Backend URL loaded:", API_BASE);
  } catch (err) {
    console.error("[API] ERROR loading backend URL:", err);
  }
}

// automatyczne pobranie backendu przy starcie
loadBackendUrl();
