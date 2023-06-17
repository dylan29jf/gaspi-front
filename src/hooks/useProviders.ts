import { useEffect, useState } from "react";
import {
  ProviderInterface,
  ResponseAlert,
  ResponsePagesProvider,
} from "@/models";
import { api } from "@/api";
import { AdapterAlert } from "@/adapters";
import Swal from "sweetalert2";

export const useGetProviders = (currentPage: number) => {
  const [providers, setProviders] = useState<ProviderInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [allProvider, setAllProvider] = useState<number>(0);

  const fetchingData = async (currentPage: number) => {
    const result = await api.get(`/proveedores/pagina/${currentPage}`);
    const { allProviders, listProviders } =
      result.data as ResponsePagesProvider; // La respuesta es de tipo any pero en este caso forzamos
                                            // y le decimos que va a ser de tipo ResponsePage

    setProviders(listProviders);
    setAllProvider(allProviders);
    setLoading(false);
  };

  useEffect(() => {
    if (currentPage > 0) { // Si la pagina actual es mayor a 0 hacemos la peticion
      fetchingData(currentPage);
    }
  }, [currentPage]);

  return { providers, allProvider, loading };
};

export const useGetProvider = (idProvider: string) => {
  const [provider, setProvider] = useState<ProviderInterface>({
    // Asignamos al state un valor inicial de tipo ProfileInterface
    address: "",
    companyName: "",
    name: "",
    id: "",
  });
  const [loading, setLoading] = useState<boolean>(true); // Mientras estamos haciendo el fetching de datos

  const fetchingData = async (currentPage: string) => {
    try {
      const result = await api.get(`/proveedores/${currentPage}`);
      const response = result.data as ProviderInterface; // La respuesta siempre es de tipo any pero en este caso forzamos
                                                         // y le decimos que va a ser de tipo Profile

      setProvider(response);
      setLoading(false);
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

  useEffect(() => {
    if (idProvider !== "") {
      fetchingData(idProvider);
    }
  }, [idProvider]);

  return { provider, loading };
};
