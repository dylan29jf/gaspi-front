import axios from "axios";

export const api = axios.create({
  // Axios nos permite crear una base a donde vamos a consumir la api,
  // y ahora solo usamos "api" en lugar de axios
  baseURL: "http://localhost:5500/gaspi/api/", // La base url de la api que estamos consumiento
  headers: { "Content-Type": "application/json" }, // El tipo de datos que se transfieren
});
