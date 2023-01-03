// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgMsf0L74kW5N6QdJ_NrrVMefcOaKDq1I",
  authDomain: "rnd-atomic-design.firebaseapp.com",
  projectId: "rnd-atomic-design",
  storageBucket: "rnd-atomic-design.appspot.com",
  messagingSenderId: "894891571201",
  appId: "1:894891571201:web:2b5a0ebf9ecd47a9466800",
  measurementId: "G-61C53V9777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);