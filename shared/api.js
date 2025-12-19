let API_BASE = null;

// Pobierz URL backendu dynamicznie
async function loadApiBase() {
  const res = await fetch("https://script.google.com/macros/s/AKfycbxEbqQ0p4JmEJ1zizux3FRjaRjIs0dd1fVgbw1nhUxjUBC9mYHcff7tMjiqfcF5q_PLQg/exec?path=system/webapp-url");
  const data = await res.json();
  API_BASE = data.url;
}

await loadApiBase();

export const api = {
  get: (path) =>
    fetch(`${API_BASE}?path=${path}`).then(r => r.json()),

  post: (path, data) =>
    fetch(`${API_BASE}?path=${path}`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(r => r.json())
};
