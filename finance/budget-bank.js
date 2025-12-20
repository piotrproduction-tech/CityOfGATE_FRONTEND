console.log("[BudgetBank] Module loaded");

// ✅ Start modułu dopiero po sygnale z api.js
document.addEventListener("api-ready", initBudgetBank);

function initBudgetBank() {
  console.log("[BudgetBank] Initializing module...");

  if (!API_BASE) {
    console.warn("[BudgetBank] ERROR — API_BASE still not ready");
    return;
  }

  console.log("[BudgetBank] API_BASE ready:", API_BASE);

  // ✅ tutaj wstawiasz dalszą logikę modułu
  loadBankData();
}

async function loadBankData() {
  console.log("[BudgetBank] Fetching bank data...");

  const data = await api_get("finance/bank");

  console.log("[BudgetBank] Data received:", data);

  // renderowanie danych...
}
