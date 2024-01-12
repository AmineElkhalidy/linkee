import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as createEventDispatcher, b as each, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { U as UserLink } from "../../../../chunks/UserLink.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index2.js";
const css$1 = {
  code: ".over.svelte-1fv7jio{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-border-opacity:1;border-color:rgb(156 163 175 / var(--tw-border-opacity))\n}",
  map: null
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css$1);
  return `${list?.length ? `<ul class="list-none p-0 flex flex-col items-center">${each(list, (item, index) => {
    return `<li class="${[
      "border-2 border-dashed border-transparent p-2 transition-all max-w-md w-full svelte-1fv7jio",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}"${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-center my-12 text-lg font-bold" data-svelte-h="svelte-1jmwi8z">No items</p>`}`;
});
const css = {
  code: ".Btn.svelte-vc7rob.svelte-vc7rob{display:flex;align-items:center;justify-content:flex-start;width:45px;height:45px;border:none;border-radius:50%;cursor:pointer;position:relative;overflow:hidden;transition-duration:0.3s;box-shadow:2px 2px 10px rgba(0, 0, 0, 0.199);background:rgb(255, 135, 65);background:linear-gradient(\r\n      250deg,\r\n      rgba(255, 135, 65, 1) 15%,\r\n      rgba(255, 65, 65, 1) 65%\r\n    )}.sign.svelte-vc7rob.svelte-vc7rob{width:100%;transition-duration:0.3s;display:flex;align-items:center;justify-content:center}.sign.svelte-vc7rob svg.svelte-vc7rob{width:17px}.sign.svelte-vc7rob svg path.svelte-vc7rob{fill:white}.text.svelte-vc7rob.svelte-vc7rob{position:absolute;right:0%;width:0%;opacity:0;color:white;font-size:1em;font-weight:600;transition-duration:0.3s}.Btn.svelte-vc7rob.svelte-vc7rob:hover{width:125px;border-radius:40px;transition-duration:0.3s}.Btn.svelte-vc7rob:hover .sign.svelte-vc7rob{width:30%;transition-duration:0.3s;padding-left:20px}.Btn.svelte-vc7rob:hover .text.svelte-vc7rob{opacity:1;width:70%;transition-duration:0.3s;padding-right:10px}.Btn.svelte-vc7rob.svelte-vc7rob:active{transform:translate(2px, 2px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $formData, $$unsubscribe_formData;
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const formDefaults = {
    icon: "custom",
    title: "",
    url: "https://"
  };
  const formData = writable(formDefaults);
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  $$result.css.add(css);
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $formData.title.length < 20 && $formData.title.length > 0;
  $$unsubscribe_user();
  $$unsubscribe_formData();
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `<main class="max-w-xl w-full mx-auto mt-32">${$userData?.username == $page.params.username ? `<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center text-white md:text-3xl" data-svelte-h="svelte-199dvnc">Edit your Profile</h1>  ${validate_component(SortableList, "SortableList").$$render($$result, { list: $userData?.links }, {}, {
    default: ({ item }) => {
      return `<div class="group relative">${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})}  <div class="absolute -top-5 -right-6 invisible group-hover:visible"><button class="Btn svelte-vc7rob" data-svelte-h="svelte-1dzb5a9"><div class="sign svelte-vc7rob"><svg viewBox="0 0 16 16" class="bi bi-trash3-fill svelte-vc7rob" fill="currentColor" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" class="svelte-vc7rob"></path></svg></div> <div class="text svelte-vc7rob">Delete</div></button></div></div>`;
    }
  })} ${`<button class="btn btn-outline btn-info block mx-auto my-4 px-10" data-svelte-h="svelte-16w985d">Add a Link</button>`}` : ``} </main>`;
});
export {
  Page as default
};
