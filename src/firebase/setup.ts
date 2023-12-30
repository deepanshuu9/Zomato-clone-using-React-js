
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAjocuqJA5xB_4B330i4eGOKnIkn6c0NKE",
  authDomain: "zomato-clone-97f5d.firebaseapp.com",
  projectId: "zomato-clone-97f5d",
  storageBucket: "zomato-clone-97f5d.appspot.com",
  messagingSenderId: "633693845981",
  appId: "1:633693845981:web:85b2d2bfbe03329cea1e34"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()