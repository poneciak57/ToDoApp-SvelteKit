<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import { Author } from '$lib/config';
	import { Footer, FooterCopyright, FooterLink, FooterLinkGroup, Skeleton } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import PageTransition from '$lib/components/pageTransition.svelte';

	export let data: PageData;
</script>

<div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono min-h-screen">
		<Navbar
			user={data.user}
			routes={[
				{ url: '/', name: 'Dashboard' },
				{ url: '/items', name: 'Items' },
				{ url: '/about', name: 'About' }
			]}
		/>
		<main class="z-0 min-h-[86vh]">
			<PageTransition pathname={data.pathname}>
				<slot />
			</PageTransition>
		</main>
	<Footer class="h-[5vh] z-20 w-full bg-white dark:bg-gray-900 rounded-none">
		<FooterCopyright href="/" by={Author} year={2023} />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLink href="/">About</FooterLink>
		</FooterLinkGroup>
	</Footer>
</div>
