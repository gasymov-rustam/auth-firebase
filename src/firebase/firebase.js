import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyB3PDCc-Dql0KSO2eYdSH92hKCw6rN7Jxk',
  authDomain: 'auth-8226b.firebaseapp.com',
  projectId: 'auth-8226b',
  storageBucket: 'auth-8226b.appspot.com',
  messagingSenderId: '475490003213',
  appId: '1:475490003213:web:112edc8072a163a4bba844',
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export default firebase;
