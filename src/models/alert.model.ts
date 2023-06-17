import { SweetAlertIcon} from "sweetalert2";

export interface ResponseAlert {
  severity: SeverityType;
  title: string;
  message: string;
}

export interface SweetAlert {
  icon: SweetAlertIcon,
  title: string,
  text: string
}

type SeverityType = "WARNING " | "ERROR" | "SUCCESS" | "INFO" | "QUESTION";
