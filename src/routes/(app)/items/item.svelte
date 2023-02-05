<script lang="ts">
	import type { Item } from "@prisma/client";
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";
	import SvelteMarkdown from 'svelte-markdown'

	// example of creating prop with reserved name
	// let className: string = "";
	// export {className as class};

	export let id: number;
	export let title: string;
	export let content: string;
	export let done: boolean;
	export let authorId: number;

	export let isNew: number = 0;
    const dispatch = createEventDispatcher();
    const click = () =>{
        dispatch('click',{
            item: {
                id, title,content,done,authorId
            } satisfies Item
        });
    }
	$: addClasses = (done?"brightness-90 dark:brightness-50":"")
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="w-full rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 hover:cursor-pointer py-3 px-5 flex justify-between {addClasses}"
    in:fly={{x:-100,duration:300 * isNew}}
	out:fly|local={{x:-100,duration: 300}}
    on:click={click}
>
	<div>
		<div class="text-lg font-semibold" class:line-through={done}>{title}</div>
		<div class="prose dark:prose-invert" class:line-through={done}>
			<SvelteMarkdown source={content} />
		</div>
		<!-- <pre class:line-through={done} >{content}</pre> -->
	</div>
	<div class:text-green-400={done}>{done ? 'DONE' : 'NOT DONE'}</div>
</div>
