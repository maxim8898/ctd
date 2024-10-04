import { getDatabase } from "firebase/database";

import { initializeApp } from "firebase/app";

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
export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
