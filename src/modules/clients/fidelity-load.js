export const fidelityLoad = (client) => {
  const fidelityCard = document.createElement("div");
  fidelityCard.classList.add("card", "fidelity");

  const header = document.createElement("div");
  header.classList.add("fidelity-card-header");

  const title = document.createElement("div");
  title.classList.add("fidelity-title");
  const titleText = document.createElement("h3");
  titleText.textContent = "CARTÃO FIDELIDADE";
  const subtitle = document.createElement("p");
  subtitle.textContent = "Ao fazer cortes de cabelo, o décimo sai de graça!";
  title.append(titleText, subtitle);

  const idSpan = document.createElement("span");
  idSpan.textContent = `ID: ${client.id}`;
  header.append(title, idSpan);

  const stampsContainer = document.createElement("div");
  stampsContainer.classList.add("stamps");

  for (let i = 0; i < client.loyaltyCard.cutsNeeded; i++) {
    const stamp = document.createElement("div");
    stamp.classList.add("stamp");
    if (i < client.loyaltyCard.totalCuts) {
      stamp.classList.add("completed");
      const checkImg = document.createElement("img");
      checkImg.src = "./src/assets/pin-check.png";
      stamp.appendChild(checkImg);
    } else if (i === client.loyaltyCard.cutsNeeded - 1) {
      stamp.classList.add("gift");
      const giftImg = document.createElement("img");
      giftImg.src = "./src/assets/pin-gift-disabled.png";
      stamp.appendChild(giftImg);
    }
    stampsContainer.appendChild(stamp);
  }

  fidelityCard.append(header, stampsContainer);
  return fidelityCard;
};
