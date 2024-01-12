

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.xF-oZvBE.js","_app/immutable/chunks/scheduler.Wg5GNPtG.js","_app/immutable/chunks/index.duQI-8tc.js","_app/immutable/chunks/firebase.yKvdBRg-.js","_app/immutable/chunks/index.16ufeVlB.js"];
export const stylesheets = [];
export const fonts = [];
