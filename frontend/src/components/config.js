import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAU1JfTtV7f36823321rteOOlD_fB_54bc",
  authDomain: "wassupgpt.firebaseapp.com",
  projectId: "wassupgpt",
  storageBucket: "wassupgpt.appspot.com",
  messagingSenderId: "313542546474",
  appId: "1:313542546474:web:899e1218135b078adf5f53",
  measurementId: "G-28M0QQN06J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
