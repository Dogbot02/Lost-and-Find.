// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  import { collection, addDoc, doc, setDoc, getDoc, getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
  import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

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
  

const fstore = getFirestore(app);

//End of Firebase


async function UserStuff(){
    const auth = getAuth();
    await auth.authStateReady();
    const user = auth.currentUser;
    console.log(user);
    if(!user) {
        document.location = "signin.html";
    }
    else
      {
        const userId = user.uid;
        const fstore = getFirestore(app);
        const userInfo = (await getDoc(doc(fstore, "users", userId))).data();
        console.log(userInfo);
        const Name = userInfo.Name;
        const School = userInfo.School;
        const Zip = userInfo.Zip;
        document.getElementById("pname").textContent = Name;
        document.getElementById("pschool").textContent = `${School}(${Zip})`;
    }
}

UserStuff();






//#region Report stuff


document.getElementById("signOut").onclick = function(){
    window.location.href = "signups.html";
}
document.getElementById("newReport").onclick = function(){
    document.getElementsByClassName(`sheet`)[0].style.display = `block`;
    document.getElementById(`newReport`).style.display = `none`;
}
document.getElementById("cancelButton").onclick = function(){
    document.getElementsByClassName('sheet')[0].style.display = 'none';
    document.getElementById('newReport').style.display = 'block'
}

document.getElementById("postButton").onclick = function(){
    document.getElementsByClassName(`sheet`)[0].style.display = `none`;
    document.getElementById(`newReport`).style.display = `block`;


    //inputboxythingy
    const reportDate = (new Date()).toISOString();
    const itemName = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    let isClaimed = false;
    const data = {
        reportDate,
        isClaimed,
        itemName,
        category,
        location,
        description
    };

    addDoc(collection(fstore, "items"),data)
}


//#endregion


