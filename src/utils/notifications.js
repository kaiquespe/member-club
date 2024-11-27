import Swal from "sweetalert2";
import "animate.css";

export function toast(message, icon = "warning") {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: "white",
  });
}

export function modal(
  title = "Parabéns!",
  message = "Seu próximo corte é gratuito!"
) {
  Swal.fire({
    title: `<strong style="color: white">${title}</strong>`,
    html: `
        <i class="ph-fill ph-gift" style="font-size: 60px; color: white; margin-bottom: 10px;"></i>
        <p style="font-size: 18px; color: white;">${message}</p>
      `,
    showConfirmButton: false,
    background: "linear-gradient(to right, #34d399, #8b5cf6, #ec4899)",
    showClass: {
      popup: `
          animate__animated
          animate__zoomIn
          animate__faster
        `,
    },
    hideClass: {
      popup: `
          animate__animated
          animate__zoomOut
          animate__faster
        `,
    },
  });
}
