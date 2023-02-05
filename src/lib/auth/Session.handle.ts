import type { Handle } from "@sveltejs/kit"
import type SessionClient from '$auth/interfaces/SessionClient.interface';
import type { JWTPayload } from 'jose';
import { redirect } from '@sveltejs/kit';
interface Options {
    protected_routes: string[]
    auth_url: string
}
export default <session extends JWTPayload>(options: Options,sessionClient: SessionClient<session>) => {
    return (async ({ event, resolve }) => {
        let session = await sessionClient.get_session(event.cookies);
        event.locals = {
            session: session
        }
        if(session == undefined){
            if(options.protected_routes.some(v => event.url.pathname.startsWith(v))){
                throw redirect(302,options.auth_url)
            }
        }
        const response = await resolve(event);
        return response;
    }) satisfies Handle
}