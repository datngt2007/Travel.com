// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUx6RdCdwup3E4E7DOF67-z5yBo4xXwGw",
  authDomain: "travel-project-9bf13.firebaseapp.com",
  projectId: "travel-project-9bf13",
  storageBucket: "travel-project-9bf13.appspot.com",
  messagingSenderId: "1042438939416",
  appId: "1:1042438939416:web:3248720da25529a8e0f46d",
  measurementId: "G-ENSPQ2B6EX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     window.location.replace("./in/index.html");
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

const button = document.getElementById("button");
const login = document.getElementById("login");

button.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert("Congratulations on successfully logged in");
      window.location.replace("./in/index.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Login unsuccessfull, please retry in minute");
    });
});