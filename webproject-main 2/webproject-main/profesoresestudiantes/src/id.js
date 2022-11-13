import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { collection, addDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import {auth, db} from './firebase.js'
import { showMessage } from "./showmessage.js"
import './app/singup.js'

const selec = document.querySelector('#custom-select')
selec.addEventListener('submit', async (e) => {
  e.preventDefault()
  facult = ['custom']



  try {
    db.collection("users").update({
        facultad: "['Custom-selected'].value"
    }).then(function() {
      console.log("Frank food updated");
    });
  }catch {

  }

});
