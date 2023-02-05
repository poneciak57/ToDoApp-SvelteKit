import type { LayoutServerLoad } from './$types';
import type User from '$auth/interfaces/User.interface';

export const load = (async ({locals}) => {
    return {
        user: (locals.session?.user) as (User | undefined)
    };
}) satisfies LayoutServerLoad;