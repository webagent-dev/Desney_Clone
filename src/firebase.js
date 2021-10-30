import firebase  from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyD6RryVQKJIXL2h2uEBAAVSAFTii1cZE88",
  authDomain: "flipping-card.firebaseapp.com",
  projectId: "flipping-card",
  storageBucket: "flipping-card.appspot.com",
  messagingSenderId: "607060718619",
  appId: "1:607060718619:web:3402c0c4375f98ccd234be",
  measurementId: "G-NWG78B3B2F"
};

// Initialize Firebase
 firebase.initializeApp(Config);

 export const auth = firebase.auth()
 export const db = firebase.firestore()
 export const provider = new firebase.auth.GoogleAuthProvider()


 export default firebase


