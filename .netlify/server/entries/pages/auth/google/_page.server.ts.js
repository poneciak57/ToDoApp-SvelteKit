import { r as redirect, e as error } from "../../../../chunks/index.js";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { G as GOOGLE_CLIENT_ID, a as GOOGLE_CLIENT_SECRET, S as SessionClient } from "../../../../chunks/SessionClient.js";
import { D as DbClient } from "../../../../chunks/PrismaClient.js";
class OIDCToken {
  token;
  sub;
  iss;
  exp;
  user;
  constructor(token, payload) {
    this.sub = payload.sub;
    this.iss = payload.iss;
    this.exp = payload.exp;
    this.token = token;
    this.user = {
      username: payload.name,
      email: payload.email,
      image: payload.picture,
      firstName: payload.given_name,
      lastName: payload.family_name
    };
  }
}
class OAuth2Client {
  options;
  constructor(options) {
    this.options = options;
  }
  async verify(id_token) {
    const JWKS = createRemoteJWKSet(new URL(this.options.JWK_URL));
    return jwtVerify(id_token, JWKS, {
      issuer: this.options.issuer,
      audience: this.options.clientId
    }).then((d) => d.payload).then((payload) => new OIDCToken(id_token, payload)).catch((e) => {
      console.error(e);
      return void 0;
    });
  }
  async token_from_code(code) {
    return fetch(this.options.TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `code=${code}&client_id=${this.options.clientId}&client_secret=${this.options.clientSecret}&grant_type=authorization_code&redirect_uri=${this.options.callback_uri}`
    }).then((response) => response.json()).then((data) => ({
      access_token: data.access_token,
      expires: data.expires_in,
      scope: data.scope,
      refresh_token: data.refresh_token,
      id_token: data.id_token
    }));
  }
  async revoke_token(token) {
    return fetch(this.options.REVOKE_URL + "?token" + token, {
      method: "POST"
    }).then((response) => response.ok);
  }
  async refresh_token(refresh_token) {
    return fetch(this.options.TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `refresh_token=${refresh_token}&client_id=${this.options.clientId}&client_secret=${this.options.clientSecret}&grant_type=refresh_token`
    }).then((response) => response.json()).then((data) => ({
      access_token: data.access_token,
      expires: data.expires_in,
      scope: data.scope,
      refresh_token
    }));
  }
  get_auth_url(state) {
    return this.options.AUTH_URL + "?" + [
      "scope=" + this.options.scopes?.join(" "),
      "access_type=offline",
      "response_type=code",
      "state=" + state,
      "redirect_uri=" + this.options.callback_uri,
      "client_id=" + this.options.clientId,
      "prompt=consent"
    ].join("&");
  }
}
const GoogleClient = new OAuth2Client({
  AUTH_URL: "https://accounts.google.com/o/oauth2/v2/auth",
  REFRESH_URL: "https://oauth2.googleapis.com/token",
  TOKEN_URL: "https://oauth2.googleapis.com/token",
  REVOKE_URL: "https://oauth2.googleapis.com/revoke",
  JWK_URL: "https://www.googleapis.com/oauth2/v3/certs",
  scopes: ["email", "openid", "profile"],
  callback_uri: "http://localhost:5173/auth/google",
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  issuer: "https://accounts.google.com"
});
const handle_oidc_login = async (oidcToken, redirect_uri, cookies) => {
  if (!oidcToken) {
    throw error(401, "Bad token");
  }
  let user = await DbClient.user.findUnique({
    where: {
      googleId: oidcToken.sub
    }
  });
  if (user == null) {
    cookies.set("googleUser", JSON.stringify({
      googleId: oidcToken.sub,
      username: oidcToken.user.username ?? "",
      lastName: oidcToken.user.lastName ?? "",
      firstName: oidcToken.user.firstName ?? "",
      image: oidcToken.user.image,
      email: oidcToken.user.email ?? ""
    }), {
      path: "/auth/register",
      expires: new Date(Date.now() + 1 * (60 * 60 * 1e3))
    });
    throw redirect(302, "/auth/register");
  }
  if (!await SessionClient.start_session({ user }, cookies)) {
    throw error(401, "Couldnt start session");
  }
  throw redirect(302, redirect_uri);
};
const load = async ({ url, cookies }) => {
  const code = url.searchParams.get("code");
  const id_token = url.searchParams.get("id_token");
  const state = url.searchParams.get("state");
  const redirect_uri = url.searchParams.get("redirect_uri") ?? "/";
  const cookie_state = cookies.get("state");
  cookies.delete("state");
  if (id_token) {
    let oidcToken2 = await GoogleClient.verify(id_token);
    await handle_oidc_login(oidcToken2, redirect_uri, cookies);
  }
  if (!code) {
    const state2 = "bfsvisvbsjvndfvndfk";
    cookies.set("state", state2);
    throw redirect(302, GoogleClient.get_auth_url(state2));
  }
  if (state != cookie_state) {
    throw error(401, "Incorrect state");
  }
  const token = await GoogleClient.token_from_code(code);
  let oidcToken = await GoogleClient.verify(token.id_token ?? "");
  await handle_oidc_login(oidcToken, redirect_uri, cookies);
};
export {
  load
};
