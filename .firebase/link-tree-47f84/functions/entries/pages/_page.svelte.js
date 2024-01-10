import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { a as user } from "../../chunks/firebase.js";
import "firebase/auth";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<header class="fixed top-5 left-0 w-full px-4 sm:px-8 md:px-10 z-50"><nav class="navbar bg-slate-100 rounded-full px-4"><div class="flex-1"><a href="/" class="text-xl text-black font-semibold md:text-2xl ml-3" data-svelte-h="svelte-j1l36e">Linkee</a></div> ${$user ? `<button class="btn gradient-btn text-white px-10 rounded-full border-none md:text-lg duration-300 hover:scale-110" data-svelte-h="svelte-1yr1zv6">Logout</button>` : `<a href="/login" class="btn gradient-btn text-white px-14 rounded-full border-none md:text-lg duration-300 hover:scale-110" data-svelte-h="svelte-1ijrdwz">Login</a>`}</nav></header>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main><div class="hero min-h-screen bg-base-200"><div class="hero-content text-center mt-20"><div class="max-w-4xl"><h1 class="text-4xl sm:text-5xl font-bold text-white"><span class="gradient-text" data-svelte-h="svelte-vr1qvt">Linkee:</span> Shape Yourself in One Link</h1> <p class="py-6 text-gray-200 mb-6 px-4 sm:px-10" data-svelte-h="svelte-1mxqqo7">Join 40M+ people using Linkee for their link in bio. One link to help
          you share everything you create, curate and sell from your Instagram,
          TikTok, Twitter, YouTube and other social media profiles.</p> <a href="/login" class="gradient-btn text-white rounded-full font-semibold px-10 py-4 text-lg md:text-xl duration-300 hover:scale-110" data-svelte-h="svelte-1ob5su5">Get Started</a></div></div></div></main>`;
});
export {
  Page as default
};
