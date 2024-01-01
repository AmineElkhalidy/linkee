import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, g as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { U as UserLink } from "../../../chunks/UserLink.js";
import { u as userData } from "../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let href;
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  href = `/${$userData?.username}/edit`;
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-kxq3ok_START --><meta name="description"${add_attribute("content", data.bio, 0)}>${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<!-- HEAD_svelte-kxq3ok_END -->`, ""} <main class="prose text-center mx-auto mt-16"><h1 class="text-5xl sm:text-6xl md:text-7xl text-purple-500">@${escape(data.username)}</h1> <div class="my-6"><img${add_attribute("src", data.photoURL ?? "/profile.webp", 0)} alt="Pic URL" width="256" class="mx-auto rounded-full border border-purple-500"></div> <p class="text-lg sm:text-xl my-8 text-white">${escape(data.bio ?? "No bio yet...")}</p> <div><p class="text-lg mb-2" data-svelte-h="svelte-1w37t3">Your social links:</p> <ul class="list-none mb-6 flex flex-col justify-center items-center gap-4">${each(data.links, (item) => {
    return `${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})}`;
  })}</ul></div> <div class="flex justify-center items-center mb-8"><a${add_attribute("href", href, 0)} class="btn btn-outline btn-info mx-auto my-4 px-10">Add a Link</a></div></main>`;
});
export {
  Page as default
};
