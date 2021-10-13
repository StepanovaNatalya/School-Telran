// import firebase from 'firebase/compat'
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkNcN4UWz6pCX-ro_lHCs-cQJg2zlYoT0",
    authDomain: "personaltodo-f3ed5.firebaseapp.com",
    projectId: "personaltodo-f3ed5",
    storageBucket: "personaltodo-f3ed5.appspot.com",
    messagingSenderId: "366486987211",
    appId: "1:366486987211:web:9e1696fde7e4c633f4d64e"
  };

  export const fb = initializeApp(firebaseConfig)
  export const db = getFirestore(fb)

//   import {fbAuth} from "../config/fbconfig"


