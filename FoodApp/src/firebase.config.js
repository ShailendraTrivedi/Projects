import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP0rln5iDeDy-i3PvamgzDjv6-nVxUIcg",
  authDomain: "foodapplication-7c70d.firebaseapp.com",
  databaseURL: "https://foodapplication-7c70d-default-rtdb.firebaseio.com",
  projectId: "foodapplication-7c70d",
  storageBucket: "foodapplication-7c70d.appspot.com",
  messagingSenderId: "277907251521",
  appId: "1:277907251521:web:aa568ba14b6c6f226441c0",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
