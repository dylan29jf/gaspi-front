import { useEffect, useState } from "react";
import { api } from "../api";
import { ProfileInterface } from "../models/profile.model";

export const useGetProfile = () => {
  const [data, setData] = useState<ProfileInterface>({
    name: "",
    image: "",
    version: "",
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchingData = async () => {
    const result = await api.get("welcome");
    const response = result.data as ProfileInterface;

    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return { data, loading };
};
