import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import {auth} from './firebase.js'
import { showMessage } from './showmessage.js'
const LoginInform = document.querySelector('#loginup-form');
LoginInform.addEventListener('submit',async (e) => {
    e.preventDefault()

    const email = LoginInform ['txtEmail'].value;
    const password = LoginInform ['txtPassword'].value;
    console.log(email, password);


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        window.location = "home.html"
        console.log(credentials, auth)

    } catch (error) {
        if (error.code === 'auth/wrong-password'){
            showMessage('correo o contraseña incorrecta', 'error')        
        } else if (error.code === 'auth/user-not-found'){
            showMessage("Usuario no encontrado, intente nuevamente", "error")

        } else if (error.code === '(auth/invalid-email)','error'){
            showMessage("Usuario no encontrado intente nuevamente", "error")
        }else {
            showMessage(error.message, 'error')
        }
    }



})