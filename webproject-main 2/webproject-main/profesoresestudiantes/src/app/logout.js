import { signOut} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import{ auth } from './firebase.js'
const logout = document.querySelector('#logout')

logout.addEventListener('click',  (e) => {
e.preventDefault ();
auth.signOut().then(() =>{
    window.location = "index.html"
    console.log('Salio sesión')

})

})