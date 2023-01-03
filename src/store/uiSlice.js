import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      setTimeout(() => {
        state.isLoading = false
      }, 3000)
    },
  },
});

// Action creators are generated for each case reducer function
export const { loading } = uiSlice.actions;

export default uiSlice.reducer;