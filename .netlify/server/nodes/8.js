import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BKIwMNXO.js","_app/immutable/chunks/scheduler.Wg5GNPtG.js","_app/immutable/chunks/index.duQI-8tc.js","_app/immutable/chunks/stores.HvoZ5hE6.js","_app/immutable/chunks/singletons.jEl-JlI1.js","_app/immutable/chunks/index.16ufeVlB.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/navigation.ljY_uk39.js"];
export const stylesheets = [];
export const fonts = [];
