// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
import { collection, addDoc, doc, setDoc, getFirestore, query, getDocs, orderBy, where } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDITGL_1FIONA5lZAkC_524ZQAx84Meb4M",
  authDomain: "realfindit-9652f.firebaseapp.com",
  databaseURL: "https://realfindit-9652f-default-rtdb.firebaseio.com",
  projectId: "realfindit-9652f",
  storageBucket: "realfindit-9652f.firebasestorage.app",
  messagingSenderId: "315956524199",
  appId: "1:315956524199:web:4c910d2adbc3d2681d1782",
  measurementId: "G-PWX9Z4P5J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  form.addEventListener('submit', function(event) {
    // 1. Prevent the page from reloading
    event.preventDefault(); 
  })

const fstore = getFirestore(app);
signUpButton.addEventListener("click", ()=>{
    const Name = document.getElementById("nameS").value;
    const Email = document.getElementById("emailS").value;
    const Phone = document.getElementById("pnS").value;
    const School = document.getElementById("schoolS").value;
    const Zip = document.getElementById("zipS").value;
    const credentials = {
      Name: {
      Email: Email,
      Phone: Phone,
      School: School,
      Zip: Zip,
      }
    }

    addDoc(collection(fstore, `Schools/${School}/users`), credentials);
})