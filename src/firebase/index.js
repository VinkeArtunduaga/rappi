import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTPPHolbIXdgaHCrBh4Pl88-oQTwUNDNc",
    authDomain: "reactrappi.firebaseapp.com",
    projectId: "reactrappi",
    storageBucket: "reactrappi.appspot.com",
    messagingSenderId: "921362024585",
    appId: "1:921362024585:web:c536cc1e4d98707801de58",
    measurementId: "G-PRHESY5J7M",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);