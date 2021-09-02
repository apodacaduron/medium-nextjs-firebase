import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBIs-zQCZEyE3iQgMZCQUjbU6un3200i5s",
  authDomain: "medium-nextjs-firebase.firebaseapp.com",
  projectId: "medium-nextjs-firebase",
  storageBucket: "medium-nextjs-firebase.appspot.com",
  messagingSenderId: "180635277034",
  appId: "1:180635277034:web:8d87f55753b606ae9ee993"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()
