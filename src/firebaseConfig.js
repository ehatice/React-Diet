
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2oJxVp6TZkyp4ReU0i4ZanZdVDnY9aUs",
  authDomain: "react-diet.firebaseapp.com",
  projectId: "react-diet",
  storageBucket: "react-diet.appspot.com",
  messagingSenderId: "560754407894",
  appId: "1:560754407894:web:bb2e7e130497cb2a170c77",
  measurementId: "G-QN07T9S2B5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth };
