import type { Cookies } from '@sveltejs/kit';
import type { JWTPayload } from 'jose';
export default interface ISessionClient<Session extends JWTPayload>{
    start_session(session:Session,cookies: Cookies): Promise<boolean>
    stop_session(cookies: Cookies): void
    get_session(cookies: Cookies): Promise<Session | undefined>
}