import { adminAuth } from "$lib/server/admin";
import type { RequestHandler } from "./$types";
import { error, json } from "@sveltejs/kit";

// To sign in
export const POST: RequestHandler = async ({ request, cookies }) => {
  // Pass IDTOKEN to server
  const { idToken } = await request.json();

  // Cookie expires in 5 days
  const expiresIn = 60 * 60 * 24 * 7 * 1000;

  const decodedIdToken = await adminAuth.verifyIdToken(idToken);

  if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
    const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
    const options = {
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
      path: "/",
    };

    // Set the cookie
    cookies.set("__session", cookie, options);

    return json({ status: "signedIn" });
  } else {
    throw error(401, "Recent sign in required!");
  }
};

// To sign out
export const DELETE: RequestHandler = async ({ cookies }) => {
  // Delete the cookie
  cookies.delete("__session", { path: "/" });
  return json({ status: "signedOut" });
};
