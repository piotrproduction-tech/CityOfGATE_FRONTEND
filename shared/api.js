/**
 * ============================================
 *  API CONFIG — dynamiczne pobieranie backendu
 * ============================================
 */

let API_BASE = null;

/**
 * Pobiera URL backendu z endpointu system/webapp-url
 */
async function loadBackendUrl() {
  console.log("[API] Fetching backend URL...");

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyRt3DGCaDMNQ4pGyGf3EoLHpfUE8v3_or49gELyHhqtxcdjFSMxFzkrBeVw5WZ1IWRxA/exec"
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

/**
 * ============================================
 *  API HELPERS
 * ============================================
 */

async function apiGet(path) {
  if (!API_BASE) {
    console.warn("[API] GET blocked — API_BASE not ready");
    return null;
  }

  const url = `${API_BASE}?path=${path}`;
  console.log("[API] GET:", url);

  const res = await fetch(url);
  return res.json();
}

async function apiPost(path, body) {
  if (!API_BASE) {
    console.warn("[API] POST blocked — API_BASE not ready");
    return null;
  }

  const url = `${API_BASE}?path=${path}`;
  console.log("[API] POST:", url, body);

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });

  return res.json();
}

/**
 * ============================================
 *  BUDGET BANK — API WRAPPERS
 * ============================================
 */

async function api_addTransaction(amount, type, actor) {
  return apiPost("budget/transactions/add", {
    amount,
    type,
    actor
  });
}

async function api_getTransactions() {
  return apiGet("budget/transactions/list");
}

async function api_getBalance() {
  return apiGet("budget/balance/get");
}

