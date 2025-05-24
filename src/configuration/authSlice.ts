import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userId: null as string | null,
};

const AuthState = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        isAuthenticated: string;
        userId: string | null;
      }>
    ) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { login, logout } = AuthState.actions;
export default AuthState;
