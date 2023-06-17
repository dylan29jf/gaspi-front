import { ProfileInterface } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Estado vacio el usuario
const EmptyUserState: ProfileInterface = {
  image: "",
  name: "",
  version: "",
};

export const userSlice = createSlice({
  name: "user", // Nombre del store
  initialState: EmptyUserState, // Valores iniciales del usuario
  reducers: {
    createUser: (_state, action: PayloadAction<ProfileInterface>) => {
      // Creamos un usuario con la informacion que pasamos
      return action.payload;
    },
    modifyUser: (state, action: PayloadAction<ProfileInterface>) => {
      // Modificamos un usuario pero solo la información que se pasa
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      // Regresamos a su estado inicial de usuario
      return EmptyUserState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions; // Exportamos la funciones del Slice
