<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		DarkMode
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	import type User from '$auth/interfaces/User.interface';

	interface Route {
		url: string;
		name: string;
	}
	export let user: Pick<User, 'username' | 'image' | 'email'> | undefined;
	export let routes: Route[];
</script>

<Navbar let:hidden let:toggle navDivClass="flex flex-wrap justify-between items-center" fluid={false}>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<div class="mr-3">
			<DarkMode />
		</div>
		{#if user}
			<Avatar id="avatar-menu" src={user.image} />
		{/if}
		<NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1" />
	</div>
	{#if user}
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm"> {user.username} </span>
				<span class="block truncate text-sm font-medium"> {user.email} </span>
			</DropdownHeader>
			<DropdownItem href="/auth/profile">Profile</DropdownItem>
			<DropdownDivider />
			<DropdownItem href="/auth/logout" data-sveltekit-preload-data="off" data-sveltekit-reload="">Sign out</DropdownItem>
		</Dropdown>
	{/if}
	<NavUl {hidden} divClass="w-full md:block md:w-auto md:mr-auto md:ml-4" 
		ulClass="flex gap-3 flex-col p-4 mt-4 md:gap-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
		{#each routes as r}
			<NavLi href={r.url} active={r.url === $page.url.pathname}>{r.name}</NavLi>
		{/each}
	</NavUl>
</Navbar>