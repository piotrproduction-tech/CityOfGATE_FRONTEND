async function loadBackendUrl() {
  console.log("[API] Fetching backend URL...");

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyRt3DGCaDMNQ4pGyGf3EoLHpfUE8v3_or49gELyHhqtxcdjFSMxFzkrBeVw5WZ1IWRxA/exec?path=system/webapp-url"
    );

    const data = await res.json();
    API_BASE = data.url;

    console.log("[API] Backend URL loaded:", API_BASE);
  } catch (err) {
    console.error("[API] ERROR loading backend URL:", err);
  }
}
