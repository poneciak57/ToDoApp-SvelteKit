<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import Input from '$lib/components/input.svelte';
	import type { ActionData, PageData } from './$types';
	import { RegisterSchema } from './verificationSchemas';

	export let data: PageData;
	export let form: ActionData;

	let form_data = {
		username: form?.data?.username.toString() ?? data.user.username,
		firstName: form?.data?.firstName.toString() ?? data.user.firstName,
		lastName: form?.data?.lastName.toString() ?? data.user.lastName,
		email: form?.data?.email.toString() ?? data.user.email,
		password: form?.data?.password,
		passwordConfirm: form?.data?.passwordConfirm
	}
	
	const submitForm: SubmitFunction = ({form: form1,data: data1,action,cancel}) =>{
		
		console.log()
		console.log("form",form);
		const formData = Object.fromEntries(data1)
		const result = RegisterSchema.safeParse(formData)

		if(!result.success){

		}
		return async ({result,update}) =>{
			// await update();
			await applyAction(result);
		}
	}
</script>

<img
	src="https://source.unsplash.com/Mv9hjnEUHR4/450x600"
	alt="dog"
	class="hidden lg:block rounded-l-lg h-auto"
/>
<div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
	<h3 class="pt-3 text-2xl text-center">Create an Account!</h3>
	<form class="px-8 pt-3 pb-8 bg-white rounded" method="POST" use:enhance={submitForm} novalidate>
		<Input
			name="username"
			value={form?.data?.username.toString() ?? data.user.username}
			placeholder="Username"
			label="Username"
			error={form?.errors?.username?.[0]}
		/>
		<div class="mb-4 md:flex gap-3">
			<Input
				name="firstName"
				value={form?.data?.firstName.toString() ?? data.user.firstName}
				placeholder="FirstName"
				label="FirstName"
				error={form?.errors?.firstName?.[0]}
			/>
			<Input
				name="lastName"
				value={form?.data?.lastName.toString() ?? data.user.lastName}
				placeholder="LastName"
				label="LastName"
				error={form?.errors?.lastName?.[0]}
			/>
		</div>
		<Input
			name="email"
			value={form?.data?.email.toString() ?? data.user.email}
			type="email"
			placeholder="Email"
			label="Email"
			error={form?.errors?.email?.[0]}
		/>
		<div class="mb-4 md:flex gap-3">
			<Input
				name="password"
				type="password"
				placeholder="******************"
				value={form?.data?.password}
				label="Password"
				error={form?.errors?.password?.[0]}
			/>
			<Input
				name="passwordConfirm"
				type="password"
				placeholder="******************"
				value={form?.data?.passwordConfirm}
				label="Confirm Password"
				error={form?.errors?.password?.[0]}
			/>
		</div>
		<div class="mb-4 text-center">
			<button
				class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Register Account
			</button>
		</div>
		{#if !data.user.googleId}
			<div class="mb-6 text-center">
				<button
					class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
					type="button"
				>
					Sign in with Google
				</button>
			</div>
		{/if}
		<hr class="mb-2 border-t" />
		<div class="text-center">
			<a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/auth">
				Already have an account?
			</a>
		</div>
	</form>
</div>
