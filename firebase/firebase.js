// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoBudHzjHjDCcq-A_mhs7n5XCzNw6KNZ4",
    authDomain: "clever-td.firebaseapp.com",
    databaseURL: "https://clever-td-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clever-td",
    storageBucket: "clever-td.appspot.com",
    messagingSenderId: "977457580022",
    appId: "1:977457580022:web:05bff819a97274a28ea9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);