import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1VaiwABpMpUZWVDfMqDF9Ku1cHjKjBa0",
  authDomain: "jesus-gedler.firebaseapp.com",
  databaseURL: "https://jesus-gedler-default-rtdb.firebaseio.com",
  projectId: "jesus-gedler",
  storageBucket: "jesus-gedler.appspot.com",
  messagingSenderId: "412122797208",
  appId: "1:412122797208:web:0059efe1c18150bba2eced",
  measurementId: "G-91G9FJ1FR2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
