function loadModule(htmlPath, jsPath) {
  const container = document.getElementById("module-container");


  // Wczytaj HTML modułu
  fetch(htmlPath)
    .then(r => r.text())
    .then(html => {
      container.innerHTML = html;


      // Wczytaj JS modułu
      const script = document.createElement("script");
      script.src = jsPath;
      script.type = "module";
      document.body.appendChild(script);
    })
    .catch(err => {
      container.innerHTML = `<p>Błąd ładowania modułu: ${err}</p>`;
    });
}