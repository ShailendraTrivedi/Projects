import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from  'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBvTJWTI21lAxlq6B8ahJvpuhieJbdzuac",
    authDomain: "restaurants-app-58225.firebaseapp.com",
    databaseURL: "https://restaurants-app-58225-default-rtdb.firebaseio.com",
    projectId: "restaurants-app-58225",
    storageBucket: "restaurants-app-58225.appspot.com",
    messagingSenderId: "867058579191",
    appId: "1:867058579191:web:d07b842ee6f9642a6985f2"
  };

  const app = getApps.length>0?getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  export {app , firestore , storage};