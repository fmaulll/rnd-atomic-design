import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import uiSlice from "./uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
