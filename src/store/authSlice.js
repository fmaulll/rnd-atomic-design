import { createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../helpers/firebase";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    googleSignIn: (state, action) => {
      state.user = action.payload
    },
    googleSignOut: (state) => {
      signOut(auth);
    },
  },
});

// Action creators are generated for each case reducer function
export const { googleSignIn, googleSignOut } = authSlice.actions;

export default authSlice.reducer;
