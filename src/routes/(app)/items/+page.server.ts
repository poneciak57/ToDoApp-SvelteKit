import DbClient from '$db/PrismaClient';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
    return {
        items: await DbClient.item.findMany({
            where: {
                authorId: locals.session.user.id
            }
        })
    };
}) satisfies PageServerLoad;