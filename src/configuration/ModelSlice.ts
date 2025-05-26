import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modelContent: null,
};

const modelSlice = createSlice({
  initialState,
  name: "model",
  reducers: {
    openModel: (state, action) => {
      state.isOpen = true;
      state.modelContent = action.payload;
    },
    closeModel: (state) => {
      state.isOpen = false;
      state.modelContent = null;
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;
export default modelSlice.reducer;
