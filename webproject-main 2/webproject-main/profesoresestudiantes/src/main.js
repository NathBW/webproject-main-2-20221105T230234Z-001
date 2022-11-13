import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { auth , db} from './app/firebase.js'
import { loginCheck } from "./app/loginCheck.js"
import { getDocs, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { setupPost } from './app/postlist.js'
import { showMessage } from "./app/showmessage.js";
//import './app/singup.js'
//import './app/logout.js'
//import './app/loginCheck.js'
// './app/login.js'

    //const user = auth.user;

//onAuthStateChanged(auth, async () => {
  //  if (user) {
//
    //    const querySnapshot = await getDocs(collection(db, 'grupos'))
//
  //      setupPost(querySnapshot.docs)
//
  //  } else {
//
  //  }
    //loginCheck(user)

//})


//const guideList = document.querySelector('guides');

//const setupGuides = (data) => {
//  let html = '';
//  data.forEach(doc => {
//    const guide = doc.data();
//    console.log(guide)
//    const li = ``
//  })
//}



auth.onAuthStateChanged(user =>{
    if (user) {
        const uid = user.uid;
        console.log('user logged in ', user, user.uid)
        
    } else {
        console.log('user logged out', user)

        
    }
})

//auth.onAuthStateChanged(user => {
//  if (user) {
//    db.collection('guides')-getDocs().then(snapshot => {
//      setupGuides(snapshot.docs);
//      setupUI(user);
//    });
//  } else {
//    setupUI();
//    setupGuides([]);
//  }
//})

export const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  let guidesref = await addDoc (collection(db, "guides"), {
    title: createForm['title'].value,
    content: createForm['Content'].value
  })
  try {
    window.location = 'home.html'
  } catch {
    showMessage('No se pudo crear el grupo, intente nuevamente', 'error')
  }



//  db.collection('guides').add({
//    title: createForm['nombre'].value,
//    content: createForm['content'].value
//  }).then(() => {

  })


