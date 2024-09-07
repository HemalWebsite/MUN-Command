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
    apiKey: "AIzaSyBvFoce8hFYoxngW6g3RZSWkyQIMT7TD-Q",
    authDomain: "cismun-5e942.firebaseapp.com",
    projectId: "cismun-5e942",
    storageBucket: "cismun-5e942.appspot.com",
    messagingSenderId: "375760397313",
    appId: "1:375760397313:web:2b18161af1c1b270bd4c00",
    measurementId: "G-9JQ4ZBWVBM"
  };

  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Exporting the auth instance and the signInWithEmailAndPassword function
export { auth, signInWithEmailAndPassword };
