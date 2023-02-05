<script lang="ts">
	import GrowTransition from '$lib/components/growTransition.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="font-mono bg-slate-100 dark:bg-gray-900 h-screen lg:py-0 py-7 flex items-center">
	<div class="container m-auto">
		<GrowTransition pathname={data.pathname}>
			<div class="flex justify-center items-center px-6 h-fit">
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<slot />
				</div>
			</div>
		</GrowTransition>
	</div>
</div>
