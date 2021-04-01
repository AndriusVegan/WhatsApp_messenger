import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1kZuEVLiRoAoSA1Vac0_2UtE1GGU-4-M",
  authDomain: "vegan-messenger.firebaseapp.com",
  projectId: "vegan-messenger",
  storageBucket: "vegan-messenger.appspot.com",
  messagingSenderId: "635614712035",
  appId: "1:635614712035:web:d45ebea1d9a8159de375d6",
  measurementId: "G-W8273N29DG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
