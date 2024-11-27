import { clientsFetchById } from "../../services/get-by-id-client";
import { userLoad, fidelityLoad, progressLoad, historyLoad } from "./index";

export const renderClientData = async (id) => {
  const client = await clientsFetchById({ id });
  if (client) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(
      userLoad(client),
      fidelityLoad(client),
      progressLoad(client),
      historyLoad(client)
    );
    return client;
  }
};
