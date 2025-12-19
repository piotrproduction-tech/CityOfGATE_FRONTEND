const API_BASE = "https://script.google.com/macros/s/AKfycbxEbqQ0p4JmEJ1zizux3FRjaRjIs0dd1fVgbw1nhUxjUBC9mYHcff7tMjiqfcF5q_PLQg/exec";


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


