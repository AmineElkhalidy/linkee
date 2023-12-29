import { collection, getDocs, limit, query, where } from "firebase/firestore";
import type { PageLoad } from "./$types";
import { db } from "$lib/firebase";
import { error } from "@sveltejs/kit";

// Use username value to fetch data from firestore
export const load = (async ({ params }) => {
  // Ref to users collection
  const collectionRef = collection(db, "users");

  // Look for a username that's equal to the username in the params in URL
  const q = query(
    collectionRef,
    where("username", "==", params.username),
    limit(1)
  );

  // return an array of docs snapshot
  const snapshot = await getDocs(q);
  const exists = snapshot.docs[0]?.exists();
  const data = snapshot.docs[0]?.data();

  if (!exists) {
    throw error(404, "That user does not exist in our database!");
  }

  if (!data.published) {
    throw error(403, `The profile of @${data.username} is not public!`);
  }

  return {
    username: data.username,
    photoURL: data.photoURL,
    bio: data.bio,
    links: data.links ?? [],
  };
}) satisfies PageLoad;
