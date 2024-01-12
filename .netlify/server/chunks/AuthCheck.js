import { s as subscribe } from "./utils.js";
import { c as create_ssr_component } from "./ssr.js";
import { a as user } from "./firebase.js";
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<p class="text-error mb-2 text-lg" data-svelte-h="svelte-1fkc5dz">You must be signed in to view this page.</p> <a class="btn btn-primary text-white text-lg px-10" href="/login" data-svelte-h="svelte-11gajmw">Sign in</a>`}`;
});
export {
  AuthCheck as A
};
