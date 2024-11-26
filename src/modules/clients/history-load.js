export const historyLoad = (client) => {
  const historyCard = document.createElement("div");
  historyCard.classList.add("card", "history");

  const title = document.createElement("div");
  title.classList.add("history-title");

  const titleText = document.createElement("h3");
  titleText.textContent = "HISTÓRICO";
  const totalCuts = document.createElement("span");
  totalCuts.textContent = `${client.loyaltyCard.totalCuts} cortes`;

  title.append(titleText, totalCuts);

  const hr = document.createElement("hr");

  const ul = document.createElement("ul");
  client.appointmentHistory.forEach((appointment) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = `<strong>${appointment.date}</strong><br />${appointment.time}`;
    div.appendChild(p);

    const span = document.createElement("span");
    span.classList.add("stamp-icon");
    const img = document.createElement("img");
    img.src = "./src/assets/pin-check-translucid.svg";
    span.appendChild(img);

    li.append(div, span);
    ul.appendChild(li);
  });

  historyCard.append(title, hr, ul);

  return historyCard;
};
