// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb7qiwTRj2WjfjsGBZrFRwDPWs4WXc-vE",
  authDomain: "csseproject-6a439.firebaseapp.com",
  projectId: "csseproject-6a439",
  storageBucket: "csseproject-6a439.appspot.com",
  messagingSenderId: "622371089303",
  appId: "1:622371089303:web:ffade5700b36f3b0f272d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase_auth = getAuth(app)
const db = getFirestore(app);


export {
    firebase_auth,
    app,
    db,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
  };
  