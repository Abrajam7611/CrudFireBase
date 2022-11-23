
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAOPnUkuzMC5NRZ-EX1tGc0y5qUF0CuHIQ",
    authDomain: "crudfirebase-5ccb5.firebaseapp.com",
    projectId: "crudfirebase-5ccb5",
    storageBucket: "crudfirebase-5ccb5.appspot.com",
    messagingSenderId: "356427311852",
    appId: "1:356427311852:web:f3f3fb60db7f7b997ad3c9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const db = getFirestore();


export const saveTask = (title, description) => 
    addDoc(collection(db, "tasks"), {title, description});
 
export const getTasks = () => getDocs(collection(db, 'tasks'));

export const onGetTasks = (callback) => 
    onSnapshot(collection(db, 'tasks'),callback);

export const deleteTasks = id => deleteDoc(doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTasks = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);