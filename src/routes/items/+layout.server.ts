import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    console.log("wszedl na itemy")
    return {};
}) satisfies LayoutServerLoad;