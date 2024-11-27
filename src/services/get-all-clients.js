import { toast } from "../utils/notifications";
import { apiConfig } from "./api-config";

export async function clientsFetchAll() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients`);
    return await response.json();
  } catch (error) {
    toast(
      "Não foram encontrados clientes. Tente novamente mais tarde"
    );
  }
}
