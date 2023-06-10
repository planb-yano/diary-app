import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyjkDZRTdkJK9M-Nl38mnqNVzInjx7DtI",
  authDomain: "diary-app-c0c7b.firebaseapp.com",
  projectId: "diary-app-c0c7b",
  storageBucket: "diary-app-c0c7b.appspot.com",
  messagingSenderId: "367471465870",
  appId: "1:367471465870:web:d288328fdd48b43f65c0df",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
