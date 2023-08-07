
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBCdW-59qCWbeJQQWmQqTOy1BwHSOG3rv8",
  authDomain: "shop-car-1d275.firebaseapp.com",
  projectId: "shop-car-1d275",
  storageBucket: "shop-car-1d275.appspot.com",
  messagingSenderId: "450279144635",
  appId: "1:450279144635:web:7ebf9baa65a053ad607d9e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);