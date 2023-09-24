// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.0.0/database.js";
// import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";



// TODO: Add SDKs for Fi,rebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBebB7OeH81mNyhKRvk-1RuBUWL0_4_NGw",
    authDomain: "hackathon-a5c36.firebaseapp.com",
    databaseURL: "https://hackathon-a5c36-default-rtdb.firebaseio.com",
    projectId: "hackathon-a5c36",
    storageBucket: "hackathon-a5c36.appspot.com",
    messagingSenderId: "608319059241",
    appId: "1:608319059241:web:4ed94d4e3662ba4bdeb338",
    // measurementId: "G-SBPYMB5BV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export {db}
