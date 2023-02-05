<script lang="ts">
    export let id: number;
    export let title: string;
    export let content: string;
    export let done: boolean;
    export let authorId: number;
</script>

<div class="w-full rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 hover:cursor-pointer py-3 px-5 flex justify-between" class:brightness-50={done}>
    <div>
        <div class="text-lg font-semibold" class:line-through={done}>{title}</div>
        <div class:line-through={done}>{content}</div>
    </div>
    <div>{done?"DONE":"NOT DONE"}</div>
</div>