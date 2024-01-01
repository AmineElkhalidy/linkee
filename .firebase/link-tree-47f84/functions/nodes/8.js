import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.px0F3HZN.js","_app/immutable/chunks/scheduler.9Ql2hydF.js","_app/immutable/chunks/index.4xqnpTo_.js","_app/immutable/chunks/stores.BuEVWlXw.js","_app/immutable/chunks/singletons.-0ypGXDU.js","_app/immutable/chunks/index.byaqG6WR.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/navigation.6o0cEVid.js"];
export const stylesheets = [];
export const fonts = [];
