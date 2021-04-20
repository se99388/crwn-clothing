import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyADGx6JmT_qrWxYBDQ1avt1XklWBuDZtg8",
  authDomain: "crwn-db-6e924.firebaseapp.com",
  projectId: "crwn-db-6e924",
  storageBucket: "crwn-db-6e924.appspot.com",
  messagingSenderId: "254811805824",
  appId: "1:254811805824:web:0b632b5c00e8c38abbee65",
  measurementId: "G-L8W5GDNZTX",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    const { displayName, email } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
