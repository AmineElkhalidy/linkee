// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { derived, writable, type Readable } from "svelte/store";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK0o5ZohFJiZk-eF6wHMgFFyoemMOPGeE",
  authDomain: "link-tree-47f84.firebaseapp.com",
  projectId: "link-tree-47f84",
  storageBucket: "link-tree-47f84.appspot.com",
  messagingSenderId: "580180879535",
  appId: "1:580180879535:web:6603e2068de6e69d664c5a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return { subscribe };
}

export const user = userStore();

// export const userData = writable<any>(null);

// Subscribe to existing user
// user.subscribe((user) => {
//   const docRef = doc(db, `users/${user?.uid}`);
//   onSnapshot(docRef, (snapshot) => {
//     userData.set(snapshot.data());
//   });
// });

export function docStore<T>(path: string) {
  // Create a ref for that document
  const docRef = doc(db, path);

  let unsubscribe: () => void;
  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}

interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  links: any[];
}

export const userData: Readable<UserData | null> = derived(
  user,
  ($user, set) => {
    if ($user) {
      return docStore(`users/${$user.uid}`).subscribe(set);
    } else {
      set(null);
    }
  }
);
