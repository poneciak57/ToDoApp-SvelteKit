<script lang="ts">
	import { fly, type FlyParams } from 'svelte/transition';
	import viewport from '$lib/useViewportAction';
	import { Transitions } from '$lib/config';

	let inView = false;
	export let specs: FlyParams = {x:-100,duration:Transitions.duration};
</script>
<div
use:viewport
on:enterViewport ={() => {inView = true} }
on:exitViewport ={() => inView = false }
style="height:inherit"
class="flex items-center"
>
{#if inView}
	<div in:fly|local={specs} >
		<slot />
	</div>
{/if}
</div>
