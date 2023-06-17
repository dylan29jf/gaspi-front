import { ResponseAlert, SweetAlert } from "@/models";
import { SweetAlertIcon } from "sweetalert2";

export const AdapterAlert = (response: ResponseAlert) => {
  // Adaptado que nos permite hacer la conversion de la respuesta del backend a un tipo SweetAlert2, 
  // la cual solo muestra una alerta correspondiente a lo que nos regresa el backend
  const sweetalert2: SweetAlert = {
    title: response.title,
    icon: response.severity.toLowerCase() as SweetAlertIcon,
    text: response.message,
  };

  return sweetalert2;
};
