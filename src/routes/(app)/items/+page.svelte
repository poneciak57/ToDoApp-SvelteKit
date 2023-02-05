<script lang="ts">
	import type { ActionData, PageData } from "./$types";
	import ItemC from "./item.svelte";
    import type {Item} from "@prisma/client";
	import { applyAction, enhance, type SubmitFunction } from "$app/forms";
	import { onMount } from "svelte";


    export let data:PageData;
    let selected: Item|undefined = undefined;


    let nForm: ActionData;
    let uForm: ActionData;
    let isPageLoaded = 0;
    onMount(()=>{
        isPageLoaded = 1;
    })

    const deleteForm: SubmitFunction = (actionData) => {
        return async ({result,update}) =>{
            selected = undefined;
            await update();
			await applyAction(result);
		}
    }
    const updateForm: SubmitFunction = (actionData) =>{
        return async ({result,update}) =>{
            console.log(result);
            uForm = result.data;
            if(result.type=="success"){
                await update({
                    reset: false
                });
            }
			await applyAction(result);
		}
    }
    const addForm: SubmitFunction = (actionData) => {
        return async ({result,update}) =>{
            console.log(result);
            nForm = result.data;
            if(result.type=="success"){
                await update();
            }
			await applyAction(result);
		}
    }
    const onItemClick = (event: CustomEvent<{item: Item}>) =>{
        selected = event.detail.item
    }
</script>
<svelte:head>
    <title>Your items</title>
</svelte:head>
<div class="flex mt-5 flex-col md:flex-row">
    <div class="w-full md:w-1/2">
        <h1 class="text-2xl text-center h-[5vh]">Your ToDo list</h1>
        <div class="flex flex-col gap-3 max-h-[60vh] md:max-h-[80vh] overflow-y-scroll px-4">
            {#each data.items as item}
                <ItemC {...item} isNew={isPageLoaded} on:click={onItemClick}></ItemC>
                {:else}
                <div class="w-full flex justify-center text-2xl font-mono">
                    You don't have any items yet.
                </div>
            {/each}
        </div>
    </div>
    <div class="w-full md:w-1/2 flex flex-col" >
        {#if selected}
        <div class="w-full flex flex-col gap-3 justify-center items-center py-6">
            <h1 class="text-2xl">Update an item #{selected.id}</h1>
            <form class="flex flex-col items-center gap-4 w-2/3" action="?/update" use:enhance={updateForm} method="POST">
                <input class="hidden" name="id" type="number" value={selected.id}>
                <div class="w-full flex flex-col lg:flex-row lg:justify-between items-center">
                    <input type="text" name="title" class:invalid={uForm?.errors?.title?.[0]} class="w-full lg:w-auto bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400" placeholder="Title" style="--tw-ring-offset-shadow:none" value={selected.title}>
                    <div>Done: <input type="checkbox" name="done" class="bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 checked:bg-gray-400 checked:dark:bg-gray-700" style="--tw-ring-offset-shadow:none" checked={selected.done}></div>
                </div>
                <textarea class:invalid={uForm?.errors?.content?.[0]} class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 resize-none h-[20vh]" name="content" placeholder="Content ..." style="--tw-ring-offset-shadow:none">{selected.content}</textarea>
                <div class="w-full grid grid-cols-2 gap-3">
                    <button type="submit" class="bg-gray-100 border-gray-300 focus:border-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 border py-3 hover:dark:bg-gray-700" style="--tw-ring-offset-shadow:none">Update</button>
                    <form action="?/delete" method="POST" use:enhance={deleteForm}>
                        <input class="hidden" type="number" name="id" value={selected.id}>
                        <button type="submit" class="w-full bg-red-100 border-red-300 focus:border-red-400 hover:bg-red-200 dark:bg-red-900 dark:border-red-900 focus:dark:border-red-400 border py-3 hover:dark:bg-red-800" style="--tw-ring-offset-shadow:none">Delete</button>
                    </form>
                </div>
                </form>
            </div>
        {:else}
        <div class="w-full flex justify-center items-center text-2xl py-20">
            &#8592; Select an item to edit
        </div>
        {/if}
        <div class="w-full flex flex-col gap-3 justify-center items-center py-6">
            <h1 class="text-2xl">Add new item</h1>
            <form class="flex flex-col items-center gap-4 w-2/3" action="?/new" use:enhance={addForm} method="POST">
                <div class="w-full flex flex-col lg:flex-row lg:justify-between items-center">
                    <input type="text" name="title" class:invalid={nForm?.errors?.title?.[0]} class="w-full lg:w-auto bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400" placeholder="Title" style="--tw-ring-offset-shadow:none">
                    <div>Already done? <input type="checkbox" name="done" class="bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 checked:bg-gray-400 checked:dark:bg-gray-700" style="--tw-ring-offset-shadow:none"></div>
                </div>
                <textarea class:invalid={nForm?.errors?.content?.[0]} class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 resize-none h-[20vh]" name="content" placeholder="Content ..." style="--tw-ring-offset-shadow:none"></textarea>
                <button type="submit" class="w-full bg-gray-100 border-gray-300 focus:border-gray-400 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-900 focus:dark:border-gray-400 border py-3 hover:dark:bg-gray-700" style="--tw-ring-offset-shadow:none">Add</button>
            </form>
        </div>
    </div>
</div>

<style>

    .invalid{
        @apply border-red-500 text-red-400;
    }
    .invalid:focus{
        @apply border-red-400;
    }
</style>