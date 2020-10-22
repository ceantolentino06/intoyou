import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDwTOKmDmfLg0XeTox1DR-0XJucRRUGAyo",
  authDomain: "intoyou-db.firebaseapp.com",
  databaseURL: "https://intoyou-db.firebaseio.com",
  projectId: "intoyou-db",
  storageBucket: "intoyou-db.appspot.com",
  messagingSenderId: "187334732404",
  appId: "1:187334732404:web:8e85f8b1a0f05beb907f21",
  measurementId: "G-6VFZ55FLN7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // any method that we use CRUD on we use documentRef
    // we can also use documentRef to get snapshopObject using .get()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
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
