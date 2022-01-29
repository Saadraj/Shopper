require("dotenv").config();

module.exports = {
    future: {
        webpack5: true,
    },
    images: {
        domains: [
            "storage.googleapis.com",
            "lh1.googleusercontent.com",
            "lh2.googleusercontent.com",
            "lh3.googleusercontent.com",
            "lh4.googleusercontent.com",
            "lh5.googleusercontent.com",
            "lh6.googleusercontent.com",
        ],
    },
    publicRuntimeConfig: {
        FIREBASE_apiKey: "AIzaSyB5sKGyQJMz85U7A0r6QjbaLDSPhkKowJ4",
        FIREBASE_authDomain: "shopper-5e9f0.firebaseapp.com",
        FIREBASE_projectId: "shopper-5e9f0",
        FIREBASE_storageBucket: "shopper-5e9f0.appspot.com",
        FIREBASE_messagingSenderId: 984240915216,
        FIREBASE_appId: "1:984240915216:web:f45fd6abd4d5154bcc9b95",
        FIREBASE_measurementId: "G-VNRB2FM05R",
        FIREBASE_databaseURL:
            "https://shopper-5e9f0-default-rtdb.asia-southeast1.firebasedatabase.app",
        CONTENTFUL_SPACE_ID: "doo6cri3y11h",
        CONTENTFUL_ACCESS_KEY: "qC6PHdhvjl72S-kZojUJM2zgCOEiiN9lutZLBG9Dc30",
    },
};
