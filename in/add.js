  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { collection, addDoc,getFirestore,} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
  import {getAuth,} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
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
    measurementId: "G-ENSPQ2B6EX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);


  const summit = document.querySelector("#mi");
const comment = document.querySelector("#comment-input");
summit.addEventListener("click", async () => {

  const docRef = await addDoc(collection(db, "blogs"), {
    comment: comment,
  });
  console.log("Document written with ID: ", docRef.id);});


summit.addEventListener("click", async () => {
  if (comment.value) {
    const docRef = await addDoc(collection(db, "blogs"), {
      comment: comment.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } else {
    alert("Title and content cannot be blank");
  }
});
