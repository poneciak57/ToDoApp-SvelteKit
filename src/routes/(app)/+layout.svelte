<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { Author } from '$lib/config';
	import { Footer, FooterCopyright, FooterLink, FooterLinkGroup, Skeleton } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import PageTransition from '$lib/components/pageTransition.svelte';

	export let data: PageData;
</script>

<div class="min-h-screen bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-slate-50">
	<Navbar
		user={data.user}
		routes={[
			{ url: '/', name: 'Dashboard' },
			{ url: '/items', name: 'Items' },
			{ url: '/about', name: 'About' }
		]}
	/>
	<main class="z-0">
		<PageTransition pathname={data.pathname}>
			<slot/>
		</PageTransition>
	</main>
	<Footer class="mt-10 z-20 w-full bg-white dark:bg-gray-900" >
		<FooterCopyright href="/" by="{Author}" year={2023} />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLink href="/">About</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>
