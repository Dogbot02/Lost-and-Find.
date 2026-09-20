 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  import{getDatabase, set, get, ref, push, update}from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
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

  

  const database = getDatabase();


  async function displayObjects(){
    const categories = await get(ref(database, `schools/school/items`));
    const displayItems = document.getElementById("displayItems");

    categories.forEach(category => {
      const categoryName = category.key;
      category.forEach(elements => {
        const itemKey = elements.key;
        const itemData = elements.val();
        const description = itemData.Description;
        const item = itemData.Item;
        const location = itemData.Location;
        let isClaimed = itemData.Claimed;
        let iref = ref(database, `schools/school/items/${categoryName}/${itemKey}`)
        const object = document.createElement("div");
        if(!isClaimed){
          object.classList.add("lostObjects");
          object.innerHTML = 
          `
          <label class = "find-item" id = "item-name"><span class = "item-label">Name: </span> ${item}</label><br>
          <label class = "find-item" id = "item-category"><span class = "item-label">Category: </span> ${categoryName}</label><br>
          <label class = "find-item" id = "item-location"><span class = "item-label">Location: </span> ${location}</label><br>
          <label class = "find-item" id = "item-descriptions"><span class = "item-label">Description: </span> ${description}</label><br>
          <button class = "button";'${categoryName}')">Claim</button>`
          displayItems.appendChild(object); 
        }
       const btn = object.querySelector(".claimBtn");
        btn.addEventListener("click", () => {
          update(iref, {CLaimed: true });
        });   

    })
    
  })
}
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



