import { apiConfig } from "./api-config";

export async function clientsFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients`);
    const data = await response.json();
    const client = data.find((client) => client.id === id);
    if (!client) {
      throw new Error("Não foi encontrado o cliente selecionado");
    }
    return client;
  } catch (error) {
    console.log(error);
    alert(
      "Não foi encontrado o cliente selecionado. Tente novamente mais tarde"
    );
  }
}
