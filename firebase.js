
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {getStorage, uploadBytes, ref,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLO-WJ2UO-terYeawN3PP1YsnrrtbCKJ0",
  authDomain: "crudfirebasejs-8d6c3.firebaseapp.com",
  projectId: "crudfirebasejs-8d6c3",
  storageBucket: "crudfirebasejs-8d6c3.appspot.com",
  messagingSenderId: "1019437127615",
  appId: "1:1019437127615:web:5bf9dd5dcccd6c19d7730a"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();


export const saveTask = (title, description) => 
  addDoc(collection(db, "tasks"), {title, description});

export const getTasks = () => getDocs(collection(db, 'tasks'));

export const onGetTasks = (callback) => 
  onSnapshot(collection(db, 'tasks'),callback);

export const deleteTasks = id => deleteDoc(doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTasks = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);

export const saveImage = file => {
console.log(file);
const storageRef = ref(storage, `images/${file.name}`);

uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file');
});

  
}