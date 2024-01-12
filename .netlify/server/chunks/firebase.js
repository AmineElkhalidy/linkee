import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { d as derived, w as writable } from "./index2.js";
const firebaseConfig = {
  apiKey: "AIzaSyAK0o5ZohFJiZk-eF6wHMgFFyoemMOPGeE",
  authDomain: "link-tree-47f84.firebaseapp.com",
  projectId: "link-tree-47f84",
  storageBucket: "link-tree-47f84.appspot.com",
  messagingSenderId: "580180879535",
  appId: "1:580180879535:web:6603e2068de6e69d664c5a"
};
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
getStorage();
function userStore() {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth?.currentUser, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  return { subscribe };
}
const user = userStore();
function docStore(path) {
  const docRef = doc(db, path);
  let unsubscribe;
  const { subscribe } = writable(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
const userData = derived(
  user,
  ($user, set) => {
    if ($user) {
      return docStore(`users/${$user.uid}`).subscribe(set);
    } else {
      set(null);
    }
  }
);
export {
  user as a,
  db as d,
  userData as u
};
