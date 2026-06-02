const firebaseConfig = {
  apiKey: "AIzaSyBrLu1a-MvesZiUb5TiIzaHO_JzuPgqVcY",
  authDomain: "delicias-de-antojo.firebaseapp.com",
  projectId: "delicias-de-antojo",
  storageBucket: "delicias-de-antojo.firebasestorage.app",
  messagingSenderId: "573317747180",
  appId: "1:573317747180:web:f1b6590db40f8d8b75b0c9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
