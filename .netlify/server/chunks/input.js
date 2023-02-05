import { c as create_ssr_component, e as escape, j as add_attribute } from "./index2.js";
const input_svelte_svelte_type_style_lang = "";
const css = {
  code: ".input.svelte-1ji9cqt{@apply w-full px-3 py-2 text-sm leading-tight text-gray-700 border-2 rounded shadow appearance-none;}.invalid.svelte-1ji9cqt{@apply border-red-500 mb-1;}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { value = "" } = $$props;
  let { label = "" } = $$props;
  let { error = null } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `<div class="${"mb-2"}"><label class="${"block mb-1 text-sm font-bold text-gray-700"}" for="${"email"}">${escape(label)}</label>
	<input class="${["input focus:shadow-outline svelte-1ji9cqt", error ?? false ? "invalid" : ""].join(" ").trim()}"${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}>
    ${error ?? false ? `<p class="${"text-xs text-red-500"}">${escape(error)}</p>` : ``}

</div>`;
});
export {
  Input as I
};
