// =========================
//  API CONFIG
// =========================

let API_BASE = null;

// =========================
//  LOAD BACKEND URL
// =========================

async function loadBackendUrl() {
  console.log("[API] Fetching backend URL...");

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbz-3Fkr1ZWq2UO5ekY2J8AjsDptx8bsRRNoS-S3U7NMn8q3RD6jc60rFKaJFqliipjbRw/exec?path=system/webapp-url"
    );

    const data = await res.json();
    API_BASE = data.url;

    console.log("[API] Backend URL loaded:", API_BASE);
  } catch (err) {
    console.error("[API] ERROR loading backend URL:", err);
  }
}

// =========================
//  GENERIC GET
// =========================

async function api_get(path) {
  if (!API_BASE) {
    console.warn("[API] GET blocked — API_BASE not ready");
    return null;
  }

  const url = `${API_BASE}?path=${encodeURIComponent(path)}`;
  console.log("[API] GET:", url);

  const res = await fetch(url);
  return await res.json();
}

// =========================
//  GENERIC POST
// =========================

async function api_post(path, payload) {
  if (!API_BASE) {
    console.warn("[API] POST blocked — API_BASE not ready");
    return null;
  }

  const url = `${API_BASE}?path=${encodeURIComponent(path)}`;
  console.log("[API] POST:", url);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  });

  return await res.json();
}

// =========================
//  AUTO-INIT
// =========================

loadBackendUrl();
