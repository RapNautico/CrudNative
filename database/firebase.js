import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBg-1_dXS-tSMqJ-Q4Wf88mstUaF-prQqs",
  authDomain: "react-native-firebase-1bac5.firebaseapp.com",
  projectId: "react-native-firebase-1bac5",
  storageBucket: "react-native-firebase-1bac5.appspot.com",
  messagingSenderId: "242369709286",
  appId: "1:242369709286:web:f803a1122fa63d07f8a727"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
