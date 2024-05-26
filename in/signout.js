// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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
//sign out

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
    window.location.replace("../signin.html");
      // User is signed out
      // ...
    }
  });

const signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      // Đăng xuất thành công
      alert('Logout successful');
      // Cập nhật giao diện
      window.location.replace("../signin.html");
    })
    .catch((error) => {
      // Xử lý lỗi
      console.error(error);
      alert('An error occurred while logging out. Please try again later.');
    });
});
