importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC6zOHjRl6T1aMzDN80JeLPRFQ9HcQf-HY",
    authDomain: "studio-8885776968-b18ce.firebaseapp.com",
    projectId: "studio-8885776968-b18ce",
    storageBucket: "studio-8885776968-b18ce.firebasestorage.app",
    messagingSenderId: "300763605586",
    appId: "1:300763605586:web:13e04342ffe426d57a0d8b"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    try {
        const notificationTitle = payload.notification.title || "System Notification";
        const notificationOptions = {
            body: payload.notification.body || "You have a new message",
            icon: 'img/logo-saja.png',
            badge: 'img/logo-saja.png',
            data: payload.data
        };

        self.registration.showNotification(notificationTitle, notificationOptions)
            .then(() => console.log('Notification shown successfully'))
            .catch(err => console.error('Error showing notification:', err));
    } catch (err) {
        console.error('Error processing background message:', err);
    }
});
