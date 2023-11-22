import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDRRlT1bJ6VDn9aoBlGN0HKyG9wlQH1l1Q",
  authDomain: "black-mesa-bank.firebaseapp.com",
  projectId: "black-mesa-bank",
  storageBucket: "black-mesa-bank.appspot.com",
  messagingSenderId: "93040494452",
  appId: "1:93040494452:web:b08a6474d5bc5ddade8e21"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)