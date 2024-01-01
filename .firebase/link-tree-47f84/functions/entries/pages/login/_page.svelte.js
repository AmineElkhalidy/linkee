import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { a as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return ` ${$user ? `<h2 class="text-xl md:text-2xl font-semibold text-white uppercase mb-2">Welcome <span class="gradient-text">${escape($user.displayName)}</span></h2> <button class="btn btn-primary text-white sm:text-lg px-10" data-svelte-h="svelte-1gc37a9">Change Username</button>` : `<h2 class="text-xl text-white font-semibold mb-2" data-svelte-h="svelte-1rs5yyk">Sign in to your account</h2> <button class="btn btn-primary text-white sm:text-lg" data-svelte-h="svelte-1t0pkyw">Sign in with Google</button>`}`;
});
export {
  Page as default
};
