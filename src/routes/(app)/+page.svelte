<script lang="ts">
	import Paragraph from "$lib/components/paragraph.svelte";
	import { Transitions } from "$lib/config";

</script>
<div class="flex justify-center items-center h-[88vh] w-full">
    <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-mono">Welcome To ToDoApp</h1>
</div>

<div class="w-full flex flex-col">
    <div class="w-1/3 ml-40 h-96">
        <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        </Paragraph>
    </div>
    <div class=" w-1/3 ml-auto mr-40 h-96" >
        <Paragraph specs={{x:100,duration:Transitions.duration}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        </Paragraph>
    </div>
    <div class=" w-1/3 ml-40 h-96">
        <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        </Paragraph>
    </div>
    <div class=" w-1/3 ml-auto mr-40 h-96">
        <Paragraph specs={{x:+100,duration:Transitions.duration}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        </Paragraph>
    </div>
    <div class=" w-1/3 ml-40 h-96">
        <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni nostrum labore libero facere, praesentium eligendi doloribus repudiandae sapiente velit, itaque provident sequi necessitatibus mollitia at rerum, molestiae tenetur modi?
            Aliquam officiis aspernatur voluptate tempore quae quas, dolorem in doloremque nulla consequuntur nostrum iusto, illo praesentium velit ex neque, incidunt ratione? Quisquam voluptatibus nisi magnam consequatur deserunt possimus rem vel.
            Ratione libero quisquam fugit quis, numquam vel, laudantium explicabo esse velit facere sequi eos fuga odio aut nam atque enim laboriosam similique fugiat adipisci quas. Necessitatibus ea quaerat exercitationem reiciendis.
        </Paragraph>
    </div>



</div>

