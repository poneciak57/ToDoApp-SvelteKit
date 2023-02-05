import OAuth2Client from '$lib/auth/OAuth2Client.impl';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

export const GoogleClient = new OAuth2Client({
    AUTH_URL: "https://accounts.google.com/o/oauth2/v2/auth",
    REFRESH_URL: "https://oauth2.googleapis.com/token",
    TOKEN_URL: "https://oauth2.googleapis.com/token",
    REVOKE_URL: "https://oauth2.googleapis.com/revoke",
    JWK_URL: "https://www.googleapis.com/oauth2/v3/certs",

    scopes: ["email","openid","profile"],
    callback_uri: "http://localhost:5173/auth/google",

    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    issuer: "https://accounts.google.com"
})