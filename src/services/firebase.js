// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ_-sBAnRqp6dqsdPeOlDAYC2XNA9dGBE",
  authDomain: "binarfsw-kelompok1.firebaseapp.com",
  projectId: "binarfsw-kelompok1",
  storageBucket: "binarfsw-kelompok1.appspot.com",
  messagingSenderId: "876255140970",
  appId: "1:876255140970:web:cc6f2f316abe8ac62e3e13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
