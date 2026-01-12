const firebaseConfig = {
  apiKey: "AIzaSyD0PlgYwLBVnDzttkilJIwZiWfawG0bQ0w",
  authDomain: "testing-14ef0.firebaseapp.com",
  databaseURL: "https://testing-14ef0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testing-14ef0",
  storageBucket: "testing-14ef0.firebasestorage.app",
  messagingSenderId: "843126323970",
  appId: "1:843126323970:web:78f1ac1bc9fb7228f7601b"
};

// Web Push Certificate (VAPID Key Pair)
const vapidPublicKey = "BN77_ngLxk-uqsXTSqUD6JkPRa-8rAse7Qf8yVkErnDDH00QmtR8yLm3SoFNQZlChhA3bnyHKZvXiv4LTRCZa8c";

const app = firebase.initializeApp(firebaseConfig);