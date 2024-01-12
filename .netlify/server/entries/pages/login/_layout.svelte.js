import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const AnimatedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div class="pb-10">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title = "Login" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1258swp_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1258swp_END -->`, ""} <nav class="flex justify-center my-6 mt-16"><ul class="steps"><a href="/login" class="step step-primary" data-svelte-h="svelte-g5g2k4">Sign In</a> <a href="/login/username" class="${[
    "step",
    $page.route.id?.match(/username|photo/g) ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-9cbufa">Choose Username</a> <a href="/login/photo" class="${[
    "step",
    $page.route.id?.includes("photo") ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-vwtmt3">Upload Photo</a></ul></nav> ${validate_component(AnimatedRoute, "AnimatedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="card w-5/6 md:w-4/6 bg-neutral text-neutral-content mx-auto"><div class="card-body items-center text-center">${slots.default ? slots.default({}) : ``}</div></main>`;
    }
  })} `;
});
export {
  Layout as default
};
