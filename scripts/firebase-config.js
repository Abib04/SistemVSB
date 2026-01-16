const firebaseConfig = {
  apiKey: "AIzaSyC6zOHjRl6T1aMzDN80JeLPRFQ9HcQf-HY",
  authDomain: "studio-8885776968-b18ce.firebaseapp.com",
  databaseURL: "https://studio-8885776968-b18ce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "studio-8885776968-b18ce",
  storageBucket: "studio-8885776968-b18ce.firebasestorage.app",
  messagingSenderId: "300763605586",
  appId: "1:300763605586:web:13e04342ffe426d57a0d8b"
};

// Web Push Certificate (VAPID Key Pair)
const vapidPublicKey = "BMVP2VMkl1MyTsrJkRzY5hF5s2MgLIKXhBg0qjUIgFzm1nRgenYf7OLB5PwU5j6f7Y8ecfWgPqqATcYw1cHG3aA";

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Get Token
      messaging.getToken({ vapidKey: vapidPublicKey }).then((currentToken) => {
        if (currentToken) {
          console.log('FCM Token:', currentToken);
          // Save token to Realtime Database
          const tokensRef = firebase.database().ref('fcm_tokens');
          tokensRef.child(currentToken.substring(0, 20)).set({
            token: currentToken,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            userAgent: navigator.userAgent
          }).then(() => {
            console.log('Token saved to database successfully');
          }).catch((err) => {
            console.error('Error saving token to database:', err);
          });
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    } else {
      console.log('Unable to get permission to notify.');
    }
  });
}

// Auto-request permission on load (optional, better to trigger via button)
// requestPermission();