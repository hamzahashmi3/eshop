import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1PSkvDHbnbxgBwfHm02YPWjpXhlzBMYM",
  authDomain: "eshop-p1.firebaseapp.com",
  projectId: "eshop-p1",
  storageBucket: "eshop-p1.appspot.com",
  messagingSenderId: "507715524372",
  appId: "1:507715524372:web:5c3903c423253f065fd401",
  measurementId: "G-VBTCGJ7R9R"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };