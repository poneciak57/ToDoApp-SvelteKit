import { r as redirect } from "../../../../chunks/index.js";
import { S as SessionClient } from "../../../../chunks/SessionClient.js";
const load = async ({ cookies, url }) => {
  const redirect_uri = url.searchParams.get("redirect_uri") ?? "/";
  SessionClient.stop_session(cookies);
  throw redirect(302, redirect_uri);
};
export {
  load
};
