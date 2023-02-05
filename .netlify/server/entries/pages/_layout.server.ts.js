const load = async ({ locals, url }) => {
  return {
    user: locals.session?.user,
    pathname: url.pathname
  };
};
export {
  load
};
