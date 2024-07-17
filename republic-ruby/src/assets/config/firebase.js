import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { config } from "./config";
import { getFirestore } from "firebase/firestore";

let app;
let authMain;
let firestoreInstance;

try {
  app = initializeApp(config.firebaseConfig);
  authMain = getAuth(app);
  firestoreInstance = getFirestore(app);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { app, authMain, firestoreInstance };
