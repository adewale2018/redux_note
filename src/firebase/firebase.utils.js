import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMTHBTrcbtC5xKRSCUsYYsKXzZIWI1mCs",
  authDomain: "okans-store.firebaseapp.com",
  databaseURL: "https://okans-store.firebaseio.com",
  projectId: "okans-store",
  storageBucket: "okans-store.appspot.com",
  messagingSenderId: "648136013787",
  appId: "1:648136013787:web:888c206848f928348899fe",
  measurementId: "G-4ENKJ6GFL7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
