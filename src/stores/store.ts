import { configureStore } from "@reduxjs/toolkit";
import AuthState from "../configuration/authSlice";
import SlidebarState from "../configuration/slidebarSlice";
import ModelState from "../configuration/ModelSlice";

export const store = configureStore({
  reducer: {
    auth: AuthState,
    slidebar: SlidebarState,
    model: ModelState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
