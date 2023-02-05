import { SignJWT, jwtVerify } from "jose";
const GOOGLE_CLIENT_ID = "1084541048893-ifpivdl3h3p117mk113ua7q6bl7g1ohb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const AUTH_SECRET = "ahvfgsavfjdsvhcvhBCvhjxfsdfysdvuygaifiuakjpqdqioduytsqkj";
const HS256 = {
  alg: "HS256",
  secret: new TextEncoder().encode(AUTH_SECRET)
};
class DefaultSessionClient {
  SESS_COOKIE_NAME = "SESS_COOKIE";
  ISSUER = "ToDoApp";
  AUDIENCE = "USERS_SESSION";
  async start_session(session, cookies) {
    try {
      const jwt = await new SignJWT(session).setProtectedHeader({ alg: HS256.alg }).setIssuer(this.ISSUER).setAudience(this.AUDIENCE).sign(HS256.secret);
      cookies.set(this.SESS_COOKIE_NAME, jwt, {
        path: "/"
      });
    } catch {
      return false;
    }
    return true;
  }
  stop_session(cookies) {
    return cookies.delete(this.SESS_COOKIE_NAME, {
      path: "/"
    });
  }
  async get_session(cookies) {
    try {
      let cookie = cookies.get(this.SESS_COOKIE_NAME);
      return await jwtVerify(cookie ?? "", HS256.secret, {
        issuer: this.ISSUER,
        audience: this.AUDIENCE
      }).then((jwt) => jwt.payload);
    } catch {
      return void 0;
    }
  }
}
const SessionClient = new DefaultSessionClient();
export {
  GOOGLE_CLIENT_ID as G,
  SessionClient as S,
  GOOGLE_CLIENT_SECRET as a
};
