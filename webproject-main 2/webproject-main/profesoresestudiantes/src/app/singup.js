import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import {auth, db} from './firebase.js'
import { showMessage } from "./showmessage.js"
const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['txtEmail'].value
    const password = signupForm['txtPassword'].value

    console.log(email, password, auth)


    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        console.log(userCredentials, auth, userCredentials.user)
        showMessage("Bienvenido " + email, " success")

            
        try {
            let docRef = addDoc (collection (db, "users"), {
            email: userCredentials.user.email,
            emailVerified: true,
            iud: userCredentials.user.uid,
            admin: true,
            facultad: "" ,
   

            });
            console.log("Document written with ID: ", userCredentials.user.uid);



            

        } catch (e) {
            console.error("Error adding document: ", e); 
        }

          
        
     




    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'){
            showMessage("Correo ya existe", "error")
        }
        else if (error.code === 'auth/invalid-email'){
            showMessage("Email es invalido" , "error")
        } else if (error.code === 'auth/weak-password' , "error") {
            showMessage("Contraseña muy débil, intente de nuevo" , "error")
        }
        else if (error.code) {
            showMessage("Algo salio mal, intente de nuevo" , "error")
        }
    }

    
})

