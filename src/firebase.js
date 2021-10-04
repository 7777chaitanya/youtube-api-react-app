import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAajlEIKNXKV6olDqaksnRkV5J_jagEyK4",
    authDomain: "api-react-32e52.firebaseapp.com",
    projectId: "api-react-32e52",
    storageBucket: "api-react-32e52.appspot.com",
    messagingSenderId: "107240009627",
    appId: "1:107240009627:web:8d9d082badfba9c1f7fb3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore();
export const provider = new GoogleAuthProvider();