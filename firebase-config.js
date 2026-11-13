/* SPMS UAE · Firebase settings (project spms-uae, owner UAEbfsi@gmail.com, database in me-central1 Doha)
   Paste your Firebase project's web settings here (Firebase console → Project settings → General → Your apps → Web app →
   "SDK setup and configuration" → Config). These values are not secret: the security rules in firestore.rules protect the data. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyATkCZVWZMyiHa9CbES7Vf7h42RI4prrkY",
  authDomain: "spms-uae.firebaseapp.com",
  projectId: "spms-uae",
  storageBucket: "spms-uae.firebasestorage.app",
  messagingSenderId: "17221639742",
  appId: "1:17221639742:web:f0f035430f35e73a9ebb6f"
};

/* Phone notifications (optional): Firebase console → Project settings → Cloud Messaging → Web Push certificates →
   "Generate key pair", then paste the key pair here. */
window.FIREBASE_VAPID_KEY = "BKaew9WuXm50x-2dfKlmsSzW9ubBRyLxyukXaP0UlcLEhROsPU3_xb2Du2H8rL-JemkU8SFrR5CIoDJvucbwboU";

/* The free notification sender (Google Apps Script): after you deploy it as a Web app, paste its Web app URL here.
   Leave it as it is if you use the Firebase server function (Blaze plan) instead. */
window.SPMS_PUSH_URL = "PASTE_SENDER_URL";
