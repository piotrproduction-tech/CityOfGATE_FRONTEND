import { api } from "../shared/api.js";


const txList = document.getElementById("transactions");
const refreshBtn = document.getElementById("refresh");
const addBtn = document.getElementById("add");


function loadTransactions() {
  api.get("budget/transactions")
    .then(data => {
      txList.innerHTML = data.items
        .map(tx => `<div>${tx.date} — ${tx.type} — ${tx.amount} — ${tx.actor}</div>`)
        .join("");
    });
}


refreshBtn.onclick = loadTransactions;


addBtn.onclick = () => {
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  const actor = document.getElementById("actor").value;


  api.post("budget/transactions", { amount, type, actor })
    .then(() => loadTransactions());
};


loadTransactions();