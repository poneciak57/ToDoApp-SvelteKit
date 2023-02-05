import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
const GrowTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"font-mono bg-slate-100 dark:bg-gray-900 h-screen lg:py-0 py-7 flex items-center"}"><div class="${"container m-auto"}">${validate_component(GrowTransition, "GrowTransition").$$render($$result, { pathname: data.pathname }, {}, {
    default: () => {
      return `<div class="${"flex justify-center items-center px-6 h-fit"}"><div class="${"w-full xl:w-3/4 lg:w-11/12 flex"}">${slots.default ? slots.default({}) : ``}</div></div>`;
    }
  })}</div></div>`;
});
export {
  Layout as default
};
