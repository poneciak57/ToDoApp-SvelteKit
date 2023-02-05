<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="h-screen">
	<Navbar
		user={data.user}
		routes={[
			{ url: '/', name: 'Dashboard' },
			{ url: '/items', name: 'Items' }
		]}
	/>
	<main>
		<slot />
	</main>
</div>
