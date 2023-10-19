
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyDsQUCdmecv4ZebqJxPjtt8iy93ASmtUIQ",
  authDomain: "myblog-2521f.firebaseapp.com",
  projectId: "myblog-2521f",
  storageBucket: "myblog-2521f.appspot.com",
  messagingSenderId: "643784175501",
  appId: "1:643784175501:web:1b36de84e34e6c064f97c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const fireDb = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {fireDb, auth, storage}