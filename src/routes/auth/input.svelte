<script lang="ts">
    export let name: string
    export let type: string = "text"
    export let placeholder: string = ""
    export let value: string = ""
    export let label: string = ""
    export let error: string | null | undefined = null;
</script>

<div class="mb-2">
	<label class="block mb-1 text-sm font-bold text-gray-700" for="email"> {label} </label>
	<input
		class="input focus:shadow-outline"
		class:invalid={error??false}
		type={type}
		placeholder={placeholder}
		name={name}
		value={value}
	/>
    {#if error??false}
        <p class="text-xs text-red-500">{error}</p>
    {/if}

</div>

<style>
	.input {
		@apply w-full px-3 py-2 text-sm leading-tight text-gray-700 border-2 rounded shadow appearance-none;
	}
	.invalid{
		@apply border-red-500 mb-1;
	}
</style>
