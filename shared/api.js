const API_BASE = "https://script.google.com/macros/s/AKfycby1aSeAhzWaMfN2_ep_rkuLShuoqzgGEX6dUuKST-zPxPqk5YmUVrTFArUg2qzmFsk1/exec";


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

