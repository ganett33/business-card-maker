import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

//console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export default firebaseApp;
export const firebaseAuth = firebaseApp.auth();
export const firebaseStore = firebaseApp.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
