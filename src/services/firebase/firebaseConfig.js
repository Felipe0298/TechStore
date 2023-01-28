import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAOm__nNVIes2gdNamwxS1SK3brt6X0deE",
    authDomain: "backend-techstore.firebaseapp.com",
    projectId: "backend-techstore",
    storageBucket: "backend-techstore.appspot.com",
    messagingSenderId: "597731470236",
    appId: "1:597731470236:web:ce4a282d979df3c3d77659"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)

 