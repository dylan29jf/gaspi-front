import { AdapterAlert } from "@/adapters";
import { api } from "@/api";
import { ProviderInterface, ResponseAlert } from "@/models";
import Swal from "sweetalert2";

export const handleCreateProvider = async (provider: ProviderInterface) => {
  try {
    const response = await api.post(
      "proveedores/guardar",
      JSON.stringify(provider)
    );

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    const { icon, title, text } = AdapterAlert(response.data as ResponseAlert);
    Swal.fire({
      icon,
      title,
      text,
    });
  } catch (error: any) {
    const { icon, title, text } = AdapterAlert(
      error.response.data as ResponseAlert
    );

    Swal.fire({
      icon,
      title,
      text,
    });
  }
};

export const handleUpdateProvider = async (
  provider: ProviderInterface,
  idProvider: string
) => {
  try {
    const response = await api.put(
      `proveedores/modificar/${idProvider}`,
      JSON.stringify(provider)
    );

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    const { icon, title, text } = AdapterAlert(response.data as ResponseAlert);
    Swal.fire({
      icon,
      title,
      text,
    });
  } catch (error: any) {
    const { icon, title, text } = AdapterAlert(
      error.response.data as ResponseAlert
    );

    Swal.fire({
      icon,
      title,
      text,
    });
  }
};

export const handleDeleteProvider = async (idProvider: string): Promise<void> => {
  try {
    const response = await api.delete(`proveedores/eliminar/${idProvider}`);

    if (response.status !== 200) {
      throw new Error(response.data);
    }

    const { icon, title, text } = AdapterAlert(response.data as ResponseAlert);
    Swal.fire({
      icon,
      title,
      text,
    });
  } catch (error: any) {
    const { icon, title, text } = AdapterAlert(
      error.response.data as ResponseAlert
    );

    Swal.fire({
      icon,
      title,
      text,
    });
  }
};
