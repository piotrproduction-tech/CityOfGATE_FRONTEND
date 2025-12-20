console.log("[BudgetBank] Module loaded");

// Czekamy aż API_BASE będzie gotowe
async function waitForApi() {
  while (!window.API_BASE) {
    console.log("[BudgetBank] Waiting for API_BASE...");
    await new Promise(r => setTimeout(r, 200));
  }
}

async function initModule() {
  console.log("[BudgetBank] Initializing module...");

  await waitForApi();
  await loadBalance();
  await loadTransactions();
  setupForm();
}

async function apiGet(path) {
  const res = await fetch(`${API_BASE}?path=${path}`);
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}?path=${path}`, {
    method: "POST",
    body: JSON.stringify(body)
  });
  return res.json();
}

async function loadBalance() {
  const box = document.getElementById("balance-box");
  box.textContent = "Ładowanie...";

  const data = await apiGet("budget/balance");
  box.textContent = data.balance + " zł";
}

async function loadTransactions() {
  const table = document.querySelector("#transactions-table tbody");
  table.innerHTML = "<tr><td colspan='5'>Ładowanie...</td></tr>";

  const rows = await apiGet("budget/transactions");

  table.innerHTML = "";

  rows.forEach(r => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${new Date(r.timestamp).toLocaleString()}</td>
      <td>${r.amount}</td>
      <td>${r.type}</td>
      <td>${r.actor}</td>
      <td>${r.txId}</td>
    `;

    table.appendChild(tr);
  });
}

function setupForm() {
  const form = document.getElementById("add-transaction-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const actor = document.getElementById("actor").value;

    await apiPost("budget/transactions", {
      amount,
      type,
      actor
    });

    await loadBalance();
    await loadTransactions();

    form.reset();
  });
}

// Automatyczne uruchomienie modułu
initModule();
