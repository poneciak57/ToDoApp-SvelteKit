<script lang="ts">
	import type { PageData } from "./$types";
	import ItemC from "./item.svelte";
    import type {Item} from "@prisma/client";


    export let data:PageData;

    let selected: Item|undefined = undefined;
</script>

<div class="flex mt-5 flex-col md:flex-row">
    <div class="w-full md:w-1/2">
        <h1 class="text-2xl text-center h-[5vh]">Your ToDo list</h1>
        <div class="flex flex-col gap-3 max-h-[60vh] md:max-h-[80vh] overflow-y-scroll px-4">
            {#each data.items as item}
                <ItemC {...item}></ItemC>
                {:else}
                <div class="w-full flex justify-center text-2xl font-mono">
                    You don't have any items yet.
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full md:w-1/2 flex flex-col justify-center" >
        {#if selected}
            <h1 class="text-2xl">Update an item</h1>
            <form class="flex flex-col items-center gap-4 w-2/3">
                <div class="w-full flex flex-col lg:flex-row lg:justify-between items-center">
                    <input type="text" name="title" class="w-full lg:w-auto bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400" placeholder="Title" style="--tw-ring-offset-shadow:none" value={selected.title}>
                    <div>Done: <input type="checkbox" name="done" value="true" class="bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 checked:bg-gray-400 checked:dark:bg-gray-700" style="--tw-ring-offset-shadow:none" checked={selected.done}></div>
                </div>
                <textarea class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 resize-none h-[25vh]" name="content" placeholder="Content ..." style="--tw-ring-offset-shadow:none">{selected.content}</textarea>
                <button class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 border py-3 hover:dark:bg-gray-700" style="--tw-ring-offset-shadow:none">Add</button>
            </form>
        {:else}
        <div class="w-full flex justify-center items-center text-2xl py-20">
            Select an item to edit
        </div>
        {/if}
        <div class="w-full flex flex-col gap-3 justify-center items-center py-6">
            <h1 class="text-2xl">Add new item</h1>
            <form class="flex flex-col items-center gap-4 w-2/3">
                <div class="w-full flex flex-col lg:flex-row lg:justify-between items-center">
                    <input type="text" name="title" class="w-full lg:w-auto bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400" placeholder="Title" style="--tw-ring-offset-shadow:none">
                    <div>Already done? <input type="checkbox" name="done" value="true" class="bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 checked:bg-gray-400 checked:dark:bg-gray-700" style="--tw-ring-offset-shadow:none"></div>
                </div>
                <textarea class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 resize-none h-[25vh]" name="content" placeholder="Content ..." style="--tw-ring-offset-shadow:none"></textarea>
                <button class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 border py-3 hover:dark:bg-gray-700" style="--tw-ring-offset-shadow:none">Add</button>
            </form>
        </div>
    </div>
</div>