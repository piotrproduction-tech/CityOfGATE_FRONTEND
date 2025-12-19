import { api } from "../shared/api/api.js";

export async function initModule() {
  await loadBalance();
  await loadTransactions();
  setupForm();
}

async function loadBalance() {
  const box = document.getElementById("balance-box");
  box.textContent = "Ładowanie...";

  const data = await api.get("budget/balance");
  box.textContent = data.balance + " zł";
}

async function loadTransactions() {
  const table = document.querySelector("#transactions-table tbody");
  table.innerHTML = "<tr><td colspan='5'>Ładowanie...</td></tr>";

  const rows = await api.get("budget/transactions");

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

    await api.post("budget/transactions", {
      amount,
      type,
      actor
    });

    await loadBalance();
    await loadTransactions();

    form.reset();
  });
}
