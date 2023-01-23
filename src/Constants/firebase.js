import firebase from 'firebase/app';
import 'firebase/auth';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBdVjl9hsHY6vD_yvoBN2QLEjhnRY9nImw",
    authDomain: "bpitui-3db81.firebaseapp.com",
    projectId: "bpitui-3db81",
    storageBucket: "bpitui-3db81.appspot.com",
    messagingSenderId: "734968089348",
    appId: "1:734968089348:web:d932a1dfba6f7622951e51",
    measurementId: "G-X5WKM2MMQM"
  };

  const app = initializeApp(firebaseConfig);

  export default firebase;