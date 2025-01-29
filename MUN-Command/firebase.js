// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js';
// import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js';

// const firebaseConfig = {
//   apiKey: "AIzaSyBvFoce8hFYoxngW6g3RZSWkyQIMT7TD-Q",
//   authDomain: "cismun-5e942.firebaseapp.com",
//   projectId: "cismun-5e942",
//   storageBucket: "cismun-5e942.appspot.com",
//   messagingSenderId: "375760397313",
//   appId: "1:375760397313:web:2b18161af1c1b270bd4c00",
//   measurementId: "G-9JQ4ZBWVBM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth, signInWithEmailAndPassword };


// firebase.js
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDEEvYOZYPHes3iPEzgw69bWifvmyTEv8",
  authDomain: "cismun2-aa47b.firebaseapp.com",
  projectId: "cismun2-aa47b",
  storageBucket: "cismun2-aa47b.firebasestorage.app",
  messagingSenderId: "892674914371",
  appId: "1:892674914371:web:c0a8c6e66ef6cf1c56fcf6"
};


  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Exporting the auth instance and the signInWithEmailAndPassword function
export { auth, signInWithEmailAndPassword };
