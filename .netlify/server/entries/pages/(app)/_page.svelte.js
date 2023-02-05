import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { T as Transitions } from "../../../chunks/config.js";
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { specs = { x: -100, duration: Transitions.duration } } = $$props;
  if ($$props.specs === void 0 && $$bindings.specs && specs !== void 0)
    $$bindings.specs(specs);
  return `<div style="${"height:inherit"}" class="${"flex items-center"}">${``}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-16vjav2_START -->${$$result.title = `<title>ToDoApp</title>`, ""}<!-- HEAD_svelte-16vjav2_END -->`, ""}

<div class="${"flex justify-center items-center h-[88vh] w-full"}"><h1 class="${"text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-mono"}">Welcome To ToDoApp</h1></div>

<div class="${"w-full flex flex-col"}"><div class="${"w-1/3 ml-40 h-96"}">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        `;
    }
  })}</div>
    <div class="${"w-1/3 ml-auto mr-40 h-96"}">${validate_component(Paragraph, "Paragraph").$$render(
    $$result,
    {
      specs: { x: 100, duration: Transitions.duration }
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        `;
      }
    }
  )}</div>
    <div class="${"w-1/3 ml-40 h-96"}">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        `;
    }
  })}</div>
    <div class="${"w-1/3 ml-auto mr-40 h-96"}">${validate_component(Paragraph, "Paragraph").$$render(
    $$result,
    {
      specs: { x: 100, duration: Transitions.duration }
    },
    {},
    {
      default: () => {
        return `Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        `;
      }
    }
  )}</div>
    <div class="${"w-1/3 ml-40 h-96"}">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        `;
    }
  })}</div></div>`;
});
export {
  Page as default
};
