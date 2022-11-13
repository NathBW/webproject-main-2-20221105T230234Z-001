        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
        import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js"
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyC3utybDUxejGJO9P71ED6owoEwPyk4sog",
          authDomain: "webproject-42e14.firebaseapp.com",
          projectId: "webproject-42e14",
          storageBucket: "webproject-42e14.appspot.com",
          messagingSenderId: "272481300457",
          appId: "1:272481300457:web:f42a57f7cd782d7734e578",
          measurementId: "G-S6LJD9RF5Z"
        };
      
        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        export const auth = getAuth(app);
        export const db = getFirestore (app);

