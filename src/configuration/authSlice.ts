import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { encryptedLocalStorage } from "../lib/Handlers/EncryptedLocalStorage";
import type { AuthState } from "../types/Auth";

const initialState: AuthState = {
  token: encryptedLocalStorage.getItem("token") ?? null,
  user: (() => {
    const stored = encryptedLocalStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  })(),
  hasProfile: !!localStorage.getItem("hasProfile"),
  isAuthenticated:
    !!encryptedLocalStorage.getItem("token") &&
    !!encryptedLocalStorage.getItem("user"),
};

const TokenSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<AuthState>) => {
      const { token, user, hasProfile } = action.payload;
      if (token !== undefined) {
        state.token = token;
        encryptedLocalStorage.setItem("token", token || "");
      }
      if (user !== undefined) {
        state.user = user;
        encryptedLocalStorage.setItem("user", JSON.stringify(user));
      }
      state.isAuthenticated = !!state.token && !!state.user;
      state.hasProfile = !!hasProfile;
    },

    clearAuthToken: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      try {
        encryptedLocalStorage.removeItem("token");
        encryptedLocalStorage.removeItem("user");
        localStorage.clear();
      } catch (error) {
        console.error("Failed to clear localStorage:", error);
      }
    },
  },
});

export const { setAuthToken, clearAuthToken } = TokenSlice.actions;
export default TokenSlice.reducer;
