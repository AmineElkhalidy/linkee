import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.z4iLM8yh.js","_app/immutable/chunks/scheduler.1VmQr9R1.js","_app/immutable/chunks/index.PIup2QdQ.js","_app/immutable/chunks/stores.T4_kBduI.js","_app/immutable/chunks/singletons.pcA8qK1i.js","_app/immutable/chunks/index.nJu1civC.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/navigation.NnD2CsdX.js"];
export const stylesheets = [];
export const fonts = [];
