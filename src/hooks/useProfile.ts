import { useEffect, useState } from "react";
import { api } from "../api";
import { ProfileInterface } from "../models/profile.model";

export const useGetProfile = () => {
  const [data, setData] = useState<ProfileInterface>({
    // Asignamos al state un valor inicial de tipo ProfileInterface
    name: "",
    image: "",
    version: "",
  });
  const [loading, setLoading] = useState<boolean>(true); // Mientras estamos haciendo el fetching de datos

  const fetchingData = async () => {
    const result = await api.get("welcome"); // Recordando que ahora solo usamos "api" 
                                            // en lugar de axios, hacemos la peticion al endpoint
    const response = result.data as ProfileInterface; // La respuesta siempre es de tipo any pero en este caso forzamos 
                                                      // y le decimos que va a ser de tipo Profile

    setData(response); // Pasamos la respuesta al state
    setLoading(false); // Cambiamos el valor del loading una vez que se haya terminado el fetching
  };

  useEffect(() => {
    fetchingData(); // Ejecutamos la funcion fetching data
  }, []);

  return { data, loading }; // Retornamos data y loading
};
