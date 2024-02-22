import exp from "constants";
import {initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

// const firestore = getFirestore();

// const productsCollection = collection(firestore, "products");

// async function addNewDocument() {
//   try {
//     const newDoc = await addDoc(Products, {
//       name: "My Product",
//       description: "This is my product",
//     });
//     console.log(`Your doc was created at ${newDoc.path}`);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// }

// addNewDocument();

// const productsCollection = doc(firestore, products);
// function addNewDoc() {
//   const docData = {
//     name: "My Product",
//     price: 100,
//     description: "This is my product",
//   };
//   setDoc(productsCollection, docData);
// }
// console.log("hello");
// addNewDoc();

// export default function Data(){
// const db = firebase.firestore(app);

// db.collection("products").add({
//   name: "My Product",
//   price: 100,
//   description: "This is my product",
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });
// }

export { app, auth };
