import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { u as userData, a as user } from "../../chunks/firebase.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  let $$unsubscribe_user;
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  let { title = "Linkee - Everything you are in one link" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-1258swp_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1258swp_END -->`, ""} <div class="min-h-screen flex flex-col">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
