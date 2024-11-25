import { apiConfig } from "./api-config";

export async function clientsFetchAll() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/clients`);
    return await response.json();
  } catch (error) {
    console.log(error);
    alert(
      "Não foi encontrado o cliente selecionado. Tente novamente mais tarde"
    );
  }
}
