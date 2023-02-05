import SessionHandle from "$auth/Session.handle";
import type Session from "$auth/interfaces/Session.interface";
import SessionClient from '$lib/SessionClient';


export const handle = SessionHandle<Session>({
    protected_routes:["/items"],
    auth_url: "/auth"
},SessionClient)