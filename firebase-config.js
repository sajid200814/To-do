// Firebase v9 modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtxFh_va78cfQqZqw6FensbD7lm1ZjhPM",
  authDomain: "to-do-000.firebaseapp.com",
  projectId: "to-do-000",
  storageBucket: "to-do-000.firebasestorage.app",
  messagingSenderId: "821552276781",
  appId: "1:821552276781:web:018b00234003ba9543dfa4",
  measurementId: "G-VY1RLMS673"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);