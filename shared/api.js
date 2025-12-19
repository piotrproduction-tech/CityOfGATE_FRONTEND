const API_BASE = "https://script.google.com/macros/s/AKfycbzCj0gC3aTESuB5xC5j9nNvQOYQQGpTTVOz1dimoGzAeRIKh2RpzzbrzjV9N-RA-83iGA/exec";


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