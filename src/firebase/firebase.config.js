// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYgXXHURJvilo6jZ_BY9IAFe4xrct_ov4",
  authDomain: "brand-car.firebaseapp.com",
  projectId: "brand-car",
  storageBucket: "brand-car.appspot.com",
  messagingSenderId: "322322727081",
  appId: "1:322322727081:web:dd7b49d1b84f0af1f529b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
