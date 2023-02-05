import { r as redirect } from "./index.js";
import { S as SessionClient } from "./SessionClient.js";
const SessionHandle = (options, sessionClient) => {
  return async ({ event, resolve }) => {
    let session = await sessionClient.get_session(event.cookies);
    event.locals = {
      session
    };
    if (session == void 0) {
      if (options.protected_routes.some((v) => event.url.pathname.startsWith(v))) {
        throw redirect(302, options.auth_url);
      }
    }
    const response = await resolve(event);
    return response;
  };
};
const handle = SessionHandle({
  protected_routes: ["/items"],
  auth_url: "/auth"
}, SessionClient);
export {
  handle
};
