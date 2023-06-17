import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5500/gaspi/api/',
  headers: { 'Content-Type': 'application/json' }
})