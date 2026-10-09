// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { collection, addDoc, doc, setDoc, getFirestore, query, getDocs, orderBy, where } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDITGL_1FIONA5lZAkC_524ZQAx84Meb4M",
authDomain: "realfindit-9652f.firebaseapp.com",
projectId: "realfindit-9652f",
storageBucket: "realfindit-9652f.firebasestorage.app",
messagingSenderId: "315956524199",
appId: "1:315956524199:web:4c910d2adbc3d2681d1782",
measurementId: "G-PWX9Z4P5J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const error2 = document.getElementById("error2");

const signin = document.getElementById("signin");


document.getElementById("signin").addEventListener("click", async () => {
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        document.location = "/Home/home.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
    });

})
