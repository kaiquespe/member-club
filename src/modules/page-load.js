
import { modal, toast } from "../utils/notifications";
import { renderClientData } from "./clients";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
});

const input = document.getElementById("input-header");
const button = document.getElementById("button-header");

async function handleClientRender() {
  const clientId = input.value.trim();

  if (clientId && !button.classList.contains("button-disable")) {
    const client = await renderClientData(clientId);
    input.value = "";
    button.classList.add("button-disable");
    if (client?.loyaltyCard?.totalCuts === 10) {
      modal();
    }
  } else {
    toast("Por favor, insira um ID válido!");
  }
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleClientRender();
  }
});

button.addEventListener("click", handleClientRender);
