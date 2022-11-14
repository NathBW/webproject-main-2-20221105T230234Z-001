import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth , db} from './app/firebase.js'
import { loginCheck } from "./app/loginCheck.js"
import { getDocs, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { setupPost } from './app/postlist.js'
import { showMessage } from "./app/showmessage.js";
//import {createForm} from "./main.js"

//const docRef = await addDoc(collection(db, "cities"), {
//    name: " Grupo",
//    country: "Contenido"
//  });
//  console.log("Document written with ID: ", docRef.id);

//db.collection('guides').get().then((snapshot) => {
//  console.log(snapshot.docs);
//})


const guideList = document.querySelector('.facultad');
const querySnapshot = await getDocs(collection(db, "facultad"))
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data())

});