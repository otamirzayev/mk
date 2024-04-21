import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgP3nVb_TZJrHQMnCwNPfbc0dS7a5JKHQ",
  authDomain: "my-kitchen-28f6a.firebaseapp.com",
  projectId: "my-kitchen-28f6a",
  storageBucket: "my-kitchen-28f6a.appspot.com",
  messagingSenderId: "306180577199",
  appId: "1:306180577199:web:c0109eda7d268931e9415a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
