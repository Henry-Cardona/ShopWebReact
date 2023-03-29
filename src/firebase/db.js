
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCXtMQ5NOq2oKfufNv3ckdQ3omAmgp_cKY",
    authDomain: "cv19014-78ffa.firebaseapp.com",
    projectId: "cv19014-78ffa",
    storageBucket: "cv19014-78ffa.appspot.com",
    messagingSenderId: "1026533038287",
    appId: "1:1026533038287:web:e20bbc44874b8faee9ffba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);