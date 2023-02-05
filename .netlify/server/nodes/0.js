import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-6e5c795e.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-6e5c795e.js","_app/immutable/chunks/index-c1c725d1.js"];
export const stylesheets = ["_app/immutable/assets/_layout-b8da29c8.css"];
export const fonts = [];
