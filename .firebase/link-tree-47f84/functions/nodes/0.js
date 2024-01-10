

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.JrHxvDgs.js","_app/immutable/chunks/scheduler.1VmQr9R1.js","_app/immutable/chunks/index.PIup2QdQ.js","_app/immutable/chunks/firebase.d7i5Tn_k.js","_app/immutable/chunks/index.nJu1civC.js"];
export const stylesheets = ["_app/immutable/assets/0.c-xocg_t.css"];
export const fonts = [];
