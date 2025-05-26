import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLeftBarOpen: true,
  isRighBarOpen: false,
};

const slidebarSlice = createSlice({
  initialState,
  name: "slidebar",
  reducers: {
    showSidebarLeft: (state) => {
      state.isLeftBarOpen = true;
    },
    hideSidebarLeft: (state) => {
      state.isLeftBarOpen = false;
    },
    toggleSidebarLeft: (state) => {
      state.isLeftBarOpen = !state.isLeftBarOpen;
    },
    showSidebarRight: (state) => {
      state.isRighBarOpen = true;
    },
    hideSidebarRight: (state) => {
      state.isRighBarOpen = false;
    },
    toggleSidebarRight: (state) => {
      state.isRighBarOpen = !state.isRighBarOpen;
    },
  },
});

export const {
  showSidebarLeft,
  hideSidebarLeft,
  toggleSidebarLeft,
  showSidebarRight,
  hideSidebarRight,
  toggleSidebarRight,
} = slidebarSlice.actions;

export default slidebarSlice.reducer;
