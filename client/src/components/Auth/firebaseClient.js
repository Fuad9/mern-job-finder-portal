// import * as firebase from "firebase/app";
// import "firebase/auth";
// import { firebaseConfig } from "./firebase.config";

import firebase from "firebase";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxi-njPnOOTuJKz79x3inFdAJDozV5k_I",
  authDomain: "job-finder-portal.firebaseapp.com",
  projectId: "job-finder-portal",
  storageBucket: "job-finder-portal.appspot.com",
  messagingSenderId: "229343385479",
  appId: "1:229343385479:web:1818a6c55d962b80e3a522",
};

export const firebaseClient = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
};

// export const initializeLoginFramework = () => {
//   if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
//   }
// };

// to configure JWT token
export const storeAuthToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((idToken) => {
      sessionStorage.setItem("token", idToken);
    })
    .catch((error) => {
      console.log(error);
    });
};

// google sign in
// export const handleGoogleSignIn = () => {
//   const googleProvider = new firebase.auth.GoogleAuthProvider();
//   return firebase
//     .auth()
//     .signInWithPopup(googleProvider)
//     .then((res) => {
//       const signedInUser = {
//         isSignedIn: true,
//         name: res.user.displayName,
//         email: res.user.email,
//         photo: res.user.photoURL,
//         success: true,
//       };
//       return signedInUser;
//     })
//     .catch((err) => {
//       console.log(err);
//       console.log(err.message);
//     });
// };
