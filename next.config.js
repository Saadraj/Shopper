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
        FIREBASE_apiKey: process.env.FIREBASE_apiKey,
        FIREBASE_authDomain: process.env.FIREBASE_authDomain,
        FIREBASE_projectId: process.env.FIREBASE_projectId,
        FIREBASE_storageBucket: process.env.FIREBASE_storageBucket,
        FIREBASE_messagingSenderId: process.env.FIREBASE_messagingSenderId,
        FIREBASE_appId: process.env.FIREBASE_appId,
        FIREBASE_measurementId: process.env.FIREBASE_measurementId,
        FIREBASE_databaseURL: process.env.FIREBASE_databaseURL,
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
    },
};
