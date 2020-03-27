import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAUkFVTd-jsAg1hEot_pAI5MJ6daq6jhJc",
  authDomain: "crwn-db-e9360.firebaseapp.com",
  databaseURL: "https://crwn-db-e9360.firebaseio.com",
  projectId: "crwn-db-e9360",
  storageBucket: "crwn-db-e9360.appspot.com",
  messagingSenderId: "458035741532",
  appId: "1:458035741532:web:d7df5016e6f19c22b2f799",
  measurementId: "G-KDT0FH1QHH"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;