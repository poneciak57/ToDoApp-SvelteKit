<script lang="ts">
	import { page } from '$app/stores';
	import type User from '$auth/interfaces/User.interface';

	interface Route {
		url: string;
		name: string;
	}
	export let user: Pick<User, 'username' | 'image'> | undefined;
	export let routes: Route[];

	let profile_expanded: boolean = false;
</script>

<nav class="bg-gray-800">
	<div class="px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center  sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img
						class="block h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						{#each routes as r}
							<a
								href={r.url}
								class={r.url === $page.url.pathname
									? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
									: 'text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white'}
								>{r.name}</a
							>
						{/each}
						{#if !user}
							<a href="/auth" class="not-current">Log in</a>
						{/if}
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<!-- Profile dropdown -->
				{#if user}
					<div
						class="relative ml-3"
						on:focusin={() => (profile_expanded = true)}
						on:focusout={() => (profile_expanded = false)}
					>
						<button
							type="button"
							class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
						>
							{#if user.image}
								<img class="h-8 w-8 rounded-full" src={user.image} alt="" />
							{:else}
								<div
									class="h-10 w-10 rounded-full bg-slate-300 flex justify-center items-center text-xl font-semibold"
								>
									{user.username?.charAt(0)}
								</div>
							{/if}
						</button>
						{#if profile_expanded}
							<div
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								tabindex="-1"
							>
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a
									href="/auth/profile"
									class="block px-4 py-2 text-sm text-gray-700"
									class:bg-gray-100={$page.url.pathname === '/auth/profile'}
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a
								>
								<!-- <a href="" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a> -->
								<a
									data-sveltekit-reload
									href="/auth/logout"
									class="block px-4 py-2 text-sm text-gray-700"
									class:bg-gray-100={$page.url.pathname === '/auth/logout'}
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Sign out</a
								>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Mobile menu. -->
	<div class="sm:hidden">
		<div class="space-y-1 px-2 pt-2 pb-3">
			{#each routes as r}
				<a
					href={r.url}
					class={r.url === $page.url.pathname
						? 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
						: 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
					>{r.name}</a
				>
			{/each}
			{#if !user}
				<a
					href="/auth"
					class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>Log in</a
				>
			{/if}
		</div>
	</div>
</nav>
