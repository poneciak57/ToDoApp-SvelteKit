import type { PageServerLoad } from "./$types";
import { error, redirect } from '@sveltejs/kit';
import { GoogleClient } from "$lib/GoogleClient";
import SessionClient from '$lib/SessionClient';
import DbClient from '../../../db/PrismaClient';
import type UserToRegister from '$lib/UserToRegister.interface';

export const load = (async ({url,cookies}) => {
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const redirect_uri = url.searchParams.get("redirect_uri")??"/";
    const cookie_state = cookies.get("state");
    cookies.delete("state");

    if(!code){
        const state = "bfsvisvbsjvndfvndfk"
        // TODO do state generating
        cookies.set("state",state);

        throw redirect(302,GoogleClient.get_auth_url(state))
    }
    if(state != cookie_state){
        throw error(401,"Incorrect state")
    }
    const token = await GoogleClient.token_from_code(code);
    let oidcToken = await GoogleClient.verify(token.id_token??"");
    if(!oidcToken){
        throw error(401,"Bad token")
    }
    let user = await DbClient.user.findUnique({
        where: {
            googleId: oidcToken.sub
        }   
    })
    if(user == null){
        cookies.set("googleUser",JSON.stringify({
            googleId: oidcToken.sub,
            username: oidcToken.user.username??"",
            lastName: oidcToken.user.lastName??"",
            firstName: oidcToken.user.firstName??"",
            image: oidcToken.user.image,
            email: oidcToken.user.email??""
        } satisfies UserToRegister));
        throw redirect(302,"/auth/register")
    }
    if(!(await SessionClient.start_session({user: user},cookies))){
        throw error(401,"Couldnt start session")
    }
    throw redirect(302,redirect_uri);
}) satisfies PageServerLoad;