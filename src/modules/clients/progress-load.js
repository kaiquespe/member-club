export const progressLoad = (client) => {
  const { totalCuts, cutsNeeded, cutsRemaining } = client.loyaltyCard;

  const progressCard = document.createElement("div");
  progressCard.classList.add("card", "progress-info");

  const content = document.createElement("div");
  content.classList.add("progress-content");

  const remainingCuts = document.createElement("span");
  remainingCuts.innerHTML = `<strong>${cutsRemaining}</strong> cortes restantes`;

  const progressBarContainer = document.createElement("div");
  progressBarContainer.classList.add("progress-bar-container");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");

  const progress = document.createElement("div");
  progress.classList.add("progress");
  progress.style.width = `${(totalCuts / cutsNeeded) * 100}%`;
  progressBar.appendChild(progress);

  const progressText = document.createElement("span");
  progressText.classList.add("progress-text");
  progressText.textContent = `${totalCuts} de ${cutsNeeded}`;

  progressBarContainer.append(progressBar, progressText);

  const stampProgress = document.createElement("div");
  stampProgress.classList.add("stamp-progress");
  const giftImg = document.createElement("img");
  giftImg.src = "./src/assets/pin-gift.png";
  giftImg.alt = "Gift Icon";
  stampProgress.appendChild(giftImg);

  content.append(remainingCuts, progressBarContainer);
  progressCard.append(content, stampProgress);

  return progressCard;
};
