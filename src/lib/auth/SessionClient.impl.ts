import type ISessionClient from '$auth/interfaces/SessionClient.interface';

import type { Cookies } from '@sveltejs/kit';
import {type JWTPayload,SignJWT,jwtVerify} from 'jose'
import { HS256 } from '$auth/Keys';
export default class DefaultSessionClient<Session extends JWTPayload> implements ISessionClient<Session>{
    private SESS_COOKIE_NAME = "SESS_COOKIE";
    private ISSUER = "ToDoApp";
    private AUDIENCE = "USERS_SESSION"

    async start_session(session:Session,cookies: Cookies): Promise<boolean>{
        try{
            const jwt = await new SignJWT(session)
                .setProtectedHeader({ alg:HS256.alg })
                .setIssuer(this.ISSUER)
                .setAudience(this.AUDIENCE)
                .sign(HS256.secret)
            cookies.set(this.SESS_COOKIE_NAME,jwt,{
                path: "/"
            });
        }catch{
            return false
        }
        return true;
    }
    stop_session(cookies: Cookies): void{
        return cookies.delete(this.SESS_COOKIE_NAME,{
            path: "/"
        });
    }

    async get_session(cookies: Cookies): Promise<Session | undefined>{
        try{
            let cookie = cookies.get(this.SESS_COOKIE_NAME);
            return await jwtVerify(cookie??"", HS256.secret, {
                issuer: this.ISSUER,
                audience: this.AUDIENCE,
            }).then(jwt => jwt.payload as Session);
        }catch {
            return undefined;
        }
    }
}