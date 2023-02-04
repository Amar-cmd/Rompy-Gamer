import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDUh9hgUDgwjQGKHNlXZyIrQGAiSjId9Ro",
    authDomain: "rompy-gamer.firebaseapp.com",
    projectId: "rompy-gamer",
    storageBucket: "rompy-gamer.appspot.com",
    messagingSenderId: "18454292663",
    appId: "1:18454292663:web:f14eb8b59280ce276d0532",
    measurementId: "G-J96TVGTRQZ"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;
