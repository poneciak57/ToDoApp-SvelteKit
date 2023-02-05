import { c as create_ssr_component, j as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import "devalue";
import { I as Input } from "../../../chunks/input.js";
const dog = "/_app/immutable/assets/dog1-049395a0.jfif";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<img${add_attribute("src", dog, 0)} alt="${"dog"}" class="${"hidden lg:block rounded-l-lg h-auto"}">
<div class="${"w-full bg-slate-50 p-5 rounded-lg lg:rounded-l-none flex flex-col justify-center"}"><h3 class="${"pt-4 text-2xl text-center"}">Welcome Back!</h3>
	<form class="${"px-8 pt-6 pb-8 mb-4 bg-slate-50 rounded"}" method="${"POST"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      error: form?.error
    },
    {},
    {}
  )}
		${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "password",
      type: "password",
      placeholder: "******************",
      label: "Password",
      error: form?.error
    },
    {},
    {}
  )}
		<div class="${"mb-4 text-center"}"><button class="${"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"}" type="${"submit"}">Sign In
			</button></div>
		<div class="${"mb-6 text-center"}"><button class="${"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"}" type="${"button"}">Sign In With Google
			</button></div>
		<hr class="${"mb-2 border-t"}">
		<div class="${"text-center"}"><a class="${"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"}" href="${"/auth/register"}">Create an Account!
			</a></div></form></div>`;
});
export {
  Page as default
};
