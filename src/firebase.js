// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRty-eMoDQgjk0PPkmu3qzbDc7gihODSs",
  authDomain: "neha-portfolio-e977a.firebaseapp.com",
  projectId: "neha-portfolio-e977a",
  storageBucket: "neha-portfolio-e977a.appspot.com",
  messagingSenderId: "273917824266",
  appId: "1:273917824266:web:8494492f49d3bfe9e6fef3",
  measurementId: "G-X3Z2QXCQJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);