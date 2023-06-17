import { ProfileInterface } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const EmptyUserState: ProfileInterface = {
  image: "",
  name: "",
  version: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    createUser: (_state, action: PayloadAction<ProfileInterface>) => {
      return action.payload;
    },
    modifyUser: (state, action: PayloadAction<ProfileInterface>) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return EmptyUserState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
