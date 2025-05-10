// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpJEpx_qs_Fbcb-jiNvXHFzolSzMdolKo",
    authDomain: "myecom-82382.firebaseapp.com",
    projectId: "myecom-82382",
    storageBucket: "myecom-82382.firebasestorage.app",
    messagingSenderId: "267077135878",
    appId: "1:267077135878:web:ff4c41cd1a72e035569d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }