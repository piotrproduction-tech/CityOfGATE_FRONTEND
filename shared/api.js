const API_BASE = "https://script.google.com/macros/s/AKfycbxjc50T_4clK45VIUSRwVDF2qgbLgTyxxV6XCwrid-f5ksxKb62phONplUJQWjSRewrzQ/exec";


export const api = {
  get: (path) =>
    fetch(`${API_BASE}?path=${path}`)
      .then(r => r.json()),


  post: (path, data) =>
    fetch(`${API_BASE}?path=${path}`, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(r => r.json())

};
