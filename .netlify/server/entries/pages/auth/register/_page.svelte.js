import { c as create_ssr_component, j as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import "devalue";
import { I as Input } from "../../../../chunks/input.js";
const dog = "/_app/immutable/assets/dog2-8c6c24d2.jfif";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<img${add_attribute("src", dog, 0)} alt="${"dog"}" class="${"hidden lg:block rounded-l-lg h-auto"}">
<div class="${"w-full bg-slate-50 p-5 rounded-lg lg:rounded-l-none"}"><h3 class="${"pt-3 text-2xl text-center"}">Create an Account!</h3>
	<form class="${"px-8 pt-3 pb-8 bg-slate-50 rounded"}" method="${"POST"}" novalidate>${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "username",
      value: data.user.username,
      placeholder: "Username",
      label: "Username",
      error: form?.errors?.username?.[0]
    },
    {},
    {}
  )}
		<div class="${"md:flex gap-3"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "firstName",
      value: data.user.firstName,
      placeholder: "FirstName",
      label: "FirstName",
      error: form?.errors?.firstName?.[0]
    },
    {},
    {}
  )}
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "lastName",
      value: data.user.lastName,
      placeholder: "LastName",
      label: "LastName",
      error: form?.errors?.lastName?.[0]
    },
    {},
    {}
  )}</div>
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "email",
      value: data.user.email,
      type: "email",
      placeholder: "Email",
      label: "Email",
      error: form?.errors?.email?.[0]
    },
    {},
    {}
  )}
		<div class="${"mb-4 md:flex gap-3"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "password",
      type: "password",
      placeholder: "******************",
      label: "Password",
      error: form?.errors?.password?.[0]
    },
    {},
    {}
  )}
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "passwordConfirm",
      type: "password",
      placeholder: "******************",
      label: "Confirm Password",
      error: form?.errors?.passwordConfirm?.[0]
    },
    {},
    {}
  )}</div>
		<div class="${"mb-4 text-center"}"><button class="${"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"}" type="${"submit"}">Register Account
			</button></div>
		${!data.user.googleId ? `<div class="${"mb-6 text-center"}"><button class="${"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"}" type="${"button"}">Sign in with Google
				</button></div>` : ``}
		<hr class="${"mb-2 border-t"}">
		<div class="${"text-center"}"><a class="${"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}" href="${"/auth"}">Already have an account?
			</a></div></form></div>`;
});
export {
  Page as default
};
