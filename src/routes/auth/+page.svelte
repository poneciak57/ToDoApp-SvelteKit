<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from "$app/forms";
	import { goto } from "$app/navigation";
	import Input from "$lib/components/input.svelte";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	const submitForm: SubmitFunction = (actionData) =>{
		return async ({result,update}) =>{
			await applyAction(result);
		}
	}
</script>


<img
	src="https://source.unsplash.com/K4mSJ7kc0As/450x600"
	alt="dog"
	class="hidden lg:block rounded-l-lg h-auto"
/>
<div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none flex flex-col justify-center">
	<h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
	<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" method="POST" use:enhance={submitForm}>
		<Input
			name="email"
			type="email"
			placeholder="Email"
			label="Email"
			error={form?.error}
		/>
		<Input
			name="password"
			type="password"
			placeholder="******************"
			label="Password"
			error={form?.error}
		/>
		<div class="mb-4 text-center">
			<button
				class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Sign In
			</button>
		</div>
		<div class="mb-6 text-center">
			<button
				class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
				type="button"
				on:click={ () => {goto("/auth/google")}}
			>
				Sign In With Google
			</button>
		</div>
		<hr class="mb-2 border-t" />
		<div class="text-center">
			<a
				class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
				href="/auth/register"
			>
				Create an Account!
			</a>
		</div>
	</form>
</div>
