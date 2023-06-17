import { useEffect, useState } from "react";
import { ProviderInterface, ResponsePagesProvider } from "../models";
import { api } from "../api";

export const useGetProviders = (currentPage: number) => {
  const [providers, setProviders] = useState<ProviderInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [allProvider, setAllProvider] = useState<number>(0);

  const fetchingData = async (currentPage: number) => {
    const result = await api.get(`/proveedores/pagina/${currentPage}`);
    const { allProviders, listProviders } =
      result.data as ResponsePagesProvider;

    setProviders(listProviders);
    setAllProvider(allProviders);
    setLoading(false);
  };

  useEffect(() => {
    if (currentPage > 0) {
      fetchingData(currentPage);
    }
  }, [currentPage]);

  return { providers, allProvider, loading };
};

export const useGetProvider = (idProvider: string) => {
  const [provider, setProvider] = useState<ProviderInterface>({
    address: "",
    companyName: "",
    name: "",
    id: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchingData = async (currentPage: string) => {
    const result = await api.get(`/proveedores/${currentPage}`);
    const response = result.data as ProviderInterface;

    setProvider(response);
    setLoading(false);
  };

  useEffect(() => {
    if (idProvider !== "") {
      fetchingData(idProvider);
    }
  }, [idProvider]);

  return { provider, loading };
};
