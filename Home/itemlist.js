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


async function displayObjects(getCat = "all"){
  displayItems.innerHTML = ``;
  const fstore = getFirestore(app);
  /*
  const q = query(collection(db, "users"), where("age", ">", 25));
const q = query(collection(db, "items"), orderBy("itemName","desc"));
  
await setDoc(doc(firestore, "items", doc.id), {
    isClaimed: true
}, { merge: true });
*/
 let getItems;
  if(getCat == "all"){
    getItems = query(collection(fstore, "items"), orderBy("reportDate","desc"));
  }
  else {
    getItems = query(collection(fstore, "items"), where("category", "==", getCat), orderBy("reportDate","desc"));
  }
  const fitems = await getDocs(getItems);
  fitems.forEach((doc) => {
    if(!doc.data().isClaimed){
        const object = document.createElement("div");
        object.classList.add("lostObjects");
        object.innerHTML = 
        `<label class = "find-item" id = "item-name"><span class = "item-label">Name: </span> ${doc.data().itemName}</label><br>
        <label class = "find-item" id = "item-category"><span class = "item-label">Category: </span> ${doc.data().category}</label><br>
        <label class = "find-item" id = "item-location"><span class = "item-label">Location: </span> ${doc.data().location}</label><br>
        <label class = "find-item" id = "item-descriptions"><span class = "item-label">Description: </span> ${doc.data().description}</label><br>
        <button class = "button";'${doc.data().category}')">Claim</button>`
        displayItems.appendChild(object); 
      }
  })
}


document.getElementById("getAll").addEventListener("click", () => { displayObjects("all");});
document.getElementById("getCatClothes").addEventListener("click", () => { displayObjects("Clothing");});
document.getElementById("getCatSupplies").addEventListener("click", () => { displayObjects("Supplies");});
document.getElementById("getCatTech").addEventListener("click", () => { displayObjects("Tech");});
document.getElementById("getCatOther").addEventListener("click", () => { displayObjects("Other");});
displayObjects();


//End of Firebase

// document.addEventListener("DOMContentLoaded", async function() {
    
// await setTimeout(async ()=>{
//     console.log(`HTML loaded :)`)
//     try{
//     const response = await fetch('http://localhost:5000/get'); 
//     const data = await response.json();
//     console.log(data);
//     }
//     catch{
//         console.log("failed");
//     }
// },2000);//delay in milliseconds btw//
// });



