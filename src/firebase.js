import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZCoN2vWLjfyAJ6f0Ab0OsF7qtNZ1qQs",
  authDomain: "iot-webapp-87ffb.firebaseapp.com",
  projectId: "iot-webapp-87ffb",
  storageBucket: "iot-webapp-87ffb.appspot.com",
  messagingSenderId: "208728072721",
  appId: "1:208728072721:web:ed5af8eb7f74fbbcdc87b0"
};


const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);