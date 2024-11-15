import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAXcmsdK-c-wjIZN7MPIHC_WueuwoXtwso",
  authDomain: "authpractice-91f27.firebaseapp.com",
  projectId: "authpractice-91f27",
  storageBucket: "authpractice-91f27.firebasestorage.app",
  messagingSenderId: "230904092900",
  appId: "1:230904092900:web:b29df029e19ec06162f4f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
