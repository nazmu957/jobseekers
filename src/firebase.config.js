import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnQEsMro0Tlu0GuEmTj-kRWf0ILiI4e3o",
  authDomain: "travel-gide-client.firebaseapp.com",
  projectId: "travel-gide-client",
  storageBucket: "travel-gide-client.appspot.com",
  messagingSenderId: "66597066936",
  appId: "1:66597066936:web:86bfd4c6efdf984cbd7c4d",
};

const app = initializeApp(firebaseConfig);

export default app;
