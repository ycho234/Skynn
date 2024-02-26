import exp from "constants";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, getDocs, collection } from "firebase/firestore";

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

export default async function products() {
  const db = getFirestore();
  const colRef = collection(db, "products");

  getDocs(colRef)
    .then((snapshot) => {
      let products = [];
      snapshot.docs.forEach((docs) => {
        products.push({ ...docs.data(), id: docs.id });
      });
      console.log(products);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

products();

export { app, auth };
