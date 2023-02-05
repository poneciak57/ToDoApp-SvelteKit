import { D as DbClient } from "../../../chunks/PrismaClient.js";
import { S as SessionClient } from "../../../chunks/SessionClient.js";
import { e as error, r as redirect } from "../../../chunks/index.js";
const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString() ?? "";
    const password = data.get("password")?.toString() ?? "";
    let user = await DbClient.user.findFirst({
      where: {
        email,
        password
      }
    });
    if (user == null) {
      return {
        error: "Email or password is incorect"
      };
    }
    if (!await SessionClient.start_session({ user }, cookies)) {
      throw error(401, "Couldnt start session");
    }
    throw redirect(302, "/");
  }
};
export {
  actions
};
