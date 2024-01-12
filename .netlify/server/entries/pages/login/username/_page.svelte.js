import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { A as AuthCheck } from "../../../../chunks/AuthCheck.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let isTouched;
  let isTaken;
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let username = "";
  let loading = false;
  let isAvailable = false;
  isValid = username?.length > 2 && username.length < 16 && re.test(username);
  isTouched = username.length > 0;
  isTaken = isValid && !isAvailable && !loading;
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `${$userData?.username ? `<h2 class="text-lg sm:text-xl font-semibold text-white -mb-2">Your username is <span class="text-green-500">@${escape($userData.username)}</span></h2> <p class="mb-3 text-red-500" data-svelte-h="svelte-14cbc0k">*Usernames cannot be changed*</p> <a href="/login/photo" class="btn btn-primary px-10 text-white font-semibold sm:text-lg" data-svelte-h="svelte-1xyzfcd">Upload Profile Image</a>` : `<form class="w-5/6 sm:w-3/6"><input type="text" placeholder="Username" class="${[
        "input w-full",
        (!isValid && isTouched ? "input-error" : "") + " " + (isTaken ? "input-warning" : "") + " "
      ].join(" ").trim()}"${add_attribute("value", username, 0)}>  <div class="my-4 min-h-16 px-8 w-full">${``} ${!isValid && isTouched ? `<p class="text-error text-sm" data-svelte-h="svelte-1wurl8l">must be 3-16 characters long, alphanumeric only</p>` : ``} ${isValid && !isAvailable && !loading ? `<p class="text-warning text-sm">@${escape(username)} is not available</p>` : ``} ${isValid && isAvailable ? `<button class="btn btn-success text-white">Confirm Username @${escape(username)}</button>` : ``}</div></form>`}`;
    }
  })}`;
});
export {
  Page as default
};
