const firebaseConfig = {
  apiKey: "AIzaSyC8j0bdruFZHg4I84KC2J_quiR-Yekq_W8",
  authDomain: "smartlist-x.firebaseapp.com",
  projectId: "smartlist-x",
  storageBucket: "smartlist-x.firebasestorage.app",
  messagingSenderId: "272334933210",
  appId: "1:272334933210:web:fe1f23c6feea3623a4a9e3",
  measurementId: "G-D0YQ194X40"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log(db);