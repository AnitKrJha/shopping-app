import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

//------------------CONFIG FILES----------------------------

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyARi1kSsjiRBPPBvwsZHBJoxf1rQ1Eq5dg",
  authDomain: "shopping-app-dbase.firebaseapp.com",
  projectId: "shopping-app-dbase",
  storageBucket: "shopping-app-dbase.appspot.com",
  messagingSenderId: "899351958549",
  appId: "1:899351958549:web:160fbd9933cdaebdfe6a1c",
};

//----------------------------Services------------------------------

const app = initializeApp(FIREBASE_CONFIG); //initialize the Firebase app  - with my own config.
const authService = getAuth(app); // initialize the authServiceHandler for my app.
const googleProvider = new GoogleAuthProvider(); //initialize the google service to provide authentication.
const db = getFirestore();

// -----------------Add Data to collection to firestore-------------------------

export const addCollectionAndDocuments = async (
  collectionName,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionName);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

//---------------------------Get Data From Firestore------------------------------

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

//------------------------SETTING UP SOME BEHAVIOURS OF THE GOOGLE POPUP-------------------

googleProvider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com",
}); //

// console.log({ app }, { authService });

//-----------------------CREATE USER WITH EMAIL AND PASSWORD--------------------------------

export const createAuthorizedUserWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;

  const userCredentials = await createUserWithEmailAndPassword(
    authService,
    email,
    password
  );
  return userCredentials;
};

//------------------SIGN IN WITH POPUP------------------------------------------------------------

export const signInUserWithGooglePopup = async () => {
  try {
    const user = await signInWithPopup(authService, googleProvider);
    return user;
  } catch (error) {
    console.log(error);
  }
};

//------------------SIGN In With Email and Password---------------------

export const signInuserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    const signInResponse = await signInWithEmailAndPassword(
      authService,
      email,
      password
    );
    return signInResponse;
  } catch (e) {
    if (e.code === "auth/wrong-password") {
      alert("Email or Password is Incorrect");
    } else if (e.code === "auth/user-not-found")
      alert("No user with this email exists");
    else console.log(e);
  }
};

//-------------SignOutUser-----------------------
export const SignOutUser = async () => {
  return signOut(authService);
};

//-------------------------------------------

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(authService, callback);
};

//----------------------Make User Documnent------------------------

export const makeUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);

  //--------------------------------------------

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};
