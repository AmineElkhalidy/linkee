// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK0o5ZohFJiZk-eF6wHMgFFyoemMOPGeE",
  authDomain: "link-tree-47f84.firebaseapp.com",
  projectId: "link-tree-47f84",
  storageBucket: "link-tree-47f84.appspot.com",
  messagingSenderId: "580180879535",
  appId: "1:580180879535:web:6603e2068de6e69d664c5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage;
