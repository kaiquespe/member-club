import { renderClientData } from "./clients";

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("container");
  container.innerHTML = "";
});

document.getElementById("button-header").addEventListener("click", () => {
  const input = document.getElementById("input-header");
  const button = document.getElementById("button-header");
  const clientId = input.value.trim();
  if (clientId) {
    renderClientData(clientId);
    input.value = "";
    button.className = "";
    button.classList.add("button-disable");
  } else {
    alert("Por favor, insira um ID válido!");
  }
});
