import { AUTH_SECRET } from "$env/static/private";


export const HS256 = {
    alg: "HS256",
    secret: new TextEncoder().encode(AUTH_SECRET)
}