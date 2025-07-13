
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQn206mc_UePJFgtIbNGYeKFebQZCCqR4",
  authDomain: "netrox-it.firebaseapp.com",
  projectId: "netrox-it",
  storageBucket: "netrox-it.firebasestorage.app",
  messagingSenderId: "421119937513",
  appId: "1:421119937513:web:aac68963b3f26e68685978",
  measurementId: "G-HXW7C8YYZS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);