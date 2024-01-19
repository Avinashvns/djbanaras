
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbFzHe4hznteTqhmBNt3uec1N1D_HA0dE",
    authDomain: "djbanaras-998ae.firebaseapp.com",
    projectId: "djbanaras-998ae",
    storageBucket: "djbanaras-998ae.appspot.com",
    messagingSenderId: "1066410857112",
    appId: "1:1066410857112:web:b0db3f9c69b401393b36ed",
    measurementId: "G-CHSX79EPC2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);