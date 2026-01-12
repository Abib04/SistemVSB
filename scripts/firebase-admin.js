/**
 * Firebase Admin Configuration
 * Gunakan file ini hanya di backend/server, BUKAN di frontend!
 */

const admin = require('firebase-admin');
const serviceAccount = require('../firebase-credentials.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://testing-14ef0-default-rtdb.asia-southeast1.firebasedatabase.app'
});

// Get database reference
const db = admin.database();
const auth = admin.auth();

module.exports = {
  admin,
  db,
  auth
};
