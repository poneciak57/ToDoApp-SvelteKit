import { PrismaClient } from "@prisma/client";
const DbClient = new PrismaClient();
const deleteFromUser = (user) => {
  delete user.password;
  delete user.googleId;
};
DbClient.$use(async (params, next) => {
  let result = await next(params);
  if (params?.model === "User" && params?.args?.select?.password !== true && result !== null) {
    if (params?.action in ["findMany"]) {
      result.forEach(deleteFromUser);
    } else {
      deleteFromUser(result);
    }
  }
  return result;
});
export {
  DbClient as D
};
