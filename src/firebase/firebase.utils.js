import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAe3D1xCXVeFS9A_jc7Bq_uB_fao5141Ts",
  authDomain: "crwn-db-9b5fd.firebaseapp.com",
  databaseURL: "https://crwn-db-9b5fd-default-rtdb.firebaseio.com",
  projectId: "crwn-db-9b5fd",
  storageBucket: "crwn-db-9b5fd.appspot.com",
  messagingSenderId: "725902458421",
  appId: "1:725902458421:web:cc360e37be048ea1493b7c",
  measurementId: "G-P8B500VZ6X"
};


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists){
    const {displayName, email } = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;