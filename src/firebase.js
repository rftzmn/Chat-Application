// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_PwjMQOvCs6ODDYA01aYkQg1bC6P8FQs",
    authDomain: "chat-d78ca.firebaseapp.com",
    projectId: "chat-d78ca",
    storageBucket: "chat-d78ca.appspot.com",
    messagingSenderId: "156306522229",
    appId: "1:156306522229:web:bbdb86517811449d4a783c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);