import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFbxL0JmuNE9kq_3vfUf2fnGD0d9OsnC0",
  authDomain: "portfoliohub2-97368.firebaseapp.com",
  projectId: "portfoliohub2-97368",
  storageBucket: "portfoliohub2-97368.firebasestorage.app",
  messagingSenderId: "710277809142",
  appId: "1:710277809142:web:2eb6a94d88e720c200fdd7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;