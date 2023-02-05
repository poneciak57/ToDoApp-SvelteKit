import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import SessionClient from '$lib/SessionClient';

export const load = (async ({cookies,url}) => {
    const redirect_uri = url.searchParams.get("redirect_uri")??"/";
    SessionClient.stop_session(cookies);
    throw redirect(302,redirect_uri);
}) satisfies PageServerLoad;