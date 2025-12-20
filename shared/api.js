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
