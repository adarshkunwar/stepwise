import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userId: null,
};

const AuthState = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
    },
  },
});

export const { login, logout } = AuthState.action;
export default AuthState;
