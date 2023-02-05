import type { LayoutServerLoad } from './$types';
import type User from '$auth/interfaces/User.interface';

export const load = (async ({locals,url}) => {
    return {
        user: (locals.session?.user) as (User | undefined),
        pathname: url.pathname
    };
}) satisfies LayoutServerLoad;