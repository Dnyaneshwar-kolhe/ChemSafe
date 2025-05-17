// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAsAuXtsW-tPXomXSppKvj1SCeKqhyyqok",
  authDomain: "expiry-alert-system-f07f2.firebaseapp.com",
  databaseURL: "https://expiry-alert-system-f07f2-default-rtdb.firebaseio.com",
  projectId: "expiry-alert-system-f07f2",
  appId: "1:957639254120:ios:fa2071f0d2dc87ac965bdd"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, update , ref, push, onValue, remove};
