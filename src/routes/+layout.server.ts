import type { LayoutServerLoad } from './$types';

export const load = (async ({locals,url}) => {
    return {
        user: locals.session?.user,
        pathname: url.pathname
    };
}) satisfies LayoutServerLoad;