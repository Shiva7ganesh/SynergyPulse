import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBo-NTstKPmvbenZIe8RXG1GATbrxUnweA",
  authDomain: "synergypulse-8c948.firebaseapp.com",
  projectId: "synergypulse-8c948",
  storageBucket: "synergypulse-8c948.appspot.com",
  messagingSenderId: "614611160869",
  appId: "1:614611160869:web:57f74cbb515c8164ac14cc",
  measurementId: "G-JCTYGQ1J74"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();