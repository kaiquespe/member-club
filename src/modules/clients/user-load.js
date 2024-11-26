export const userLoad = (client) => {
  const userCard = document.createElement("div");
  userCard.classList.add("card", "user");

  const profile = document.createElement("div");
  profile.classList.add("profile");
  const profileImg = document.createElement("img");
  profileImg.src = client.imageUrl;
  profileImg.alt = "Foto de Perfil";
  profile.appendChild(profileImg);

  const info = document.createElement("div");
  info.classList.add("info");
  const name = document.createElement("h2");
  name.textContent = client.name;
  const clientSince = document.createElement("p");
  clientSince.textContent = `Cliente desde ${client.clientSince}`;
  info.append(name, clientSince);

  userCard.append(profile, info);

  return userCard;
};
