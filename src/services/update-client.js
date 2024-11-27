import { toast } from "../utils/notifications.js";
import { apiConfig } from "./api-config.js";

export async function updateClientAppointments({ id, appointmentHistory }) {
  try {
    const totalCuts = appointmentHistory.length;
    const cutsNeeded = 10;
    const cutsRemaining = cutsNeeded - totalCuts;

    const response = await fetch(`${apiConfig.baseUrl}/clients/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appointmentHistory,
        loyaltyCard: {
          totalCuts,
          cutsNeeded,
          cutsRemaining,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(
        "Não foi possível atualizar o cliente. Tente novamente mais tarde."
      );
    }
  } catch ({ message }) {
    toast(message);
  }
}
