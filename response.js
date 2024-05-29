
 // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// var firebase = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
// ref.orderByChild("height").on("child_added", function(snapshot) {
//   console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
// });

const firebaseConfig = {
    apiKey: "AIzaSyAjamwkcyyFCEOJW0f1D1QU23_Nntm1DbU",
    authDomain: "tiffin-center-7a3b3.firebaseapp.com",
    databaseURL: "https://tiffin-center-7a3b3-default-rtdb.firebaseio.com",
    projectId: "tiffin-center-7a3b3",
    storageBucket: "tiffin-center-7a3b3.appspot.com",
    messagingSenderId: "464384296600",
    appId: "1:464384296600:web:2e02a3d998d6c8900332ed"
  };

  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
import{getDatabase, set, get, update, remove,ref,child}
from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
  //reference
// var responseDb= firebase.database().ref("Response");
//   document.getElementById("Respone").addEventListener('submit',submitform);
//   function submitform(e){
//     e.preventDefault();
  
// };
const db= getDatabase();
var fname= document.querySelector("#fname");
var lname= document.querySelector("#lname");
var email= document.querySelector("#email");
var phone= document.querySelector("#phone");
var meal= document.querySelector("#meal");
var message= document.querySelector("#message")
// const getElementVal=(id) => {
//     return document.getElementById(id).value;
//     var fname= getElementVal('fname');
//     var lname= getElementVal('lname');
//     var email= getElementVal('email');
//     var phone= getElementVal('phone');
//     var meal= getElementVal('meal');
//     var message= getElementVal('message');
//     console.log(fname,lname,email,phone,meal,messgae)
// }
var submitdata=document.querySelector("#submitdata");
function submitData(){
    set(ref(db, "respone/"+ email.value),{
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        phone:phone.value,
        meal:meal.value,
        message:message.value
    })
    .then(()=>{
        alert("Data is successfully added!")
    })
    .catch((error)=>{
        alert(error)
    })

}
submitData();
submitdata.addEventListener('click',submitData)
  