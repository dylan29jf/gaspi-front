import { ResponseAlert, SweetAlert } from "@/models";
import { SweetAlertIcon } from "sweetalert2";

export const AdapterAlert = (response: ResponseAlert) => {
  const sweetalert2: SweetAlert = {
    title: response.title,
    icon: response.severity.toLowerCase() as SweetAlertIcon,
    text: response.message,
  };

  return sweetalert2;
};
