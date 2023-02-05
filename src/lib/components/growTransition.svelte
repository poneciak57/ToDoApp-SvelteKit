<script lang="ts">
	import { Transitions } from '$lib/config';
	import { expoIn,expoOut } from 'svelte/easing';
	import type { TransitionConfig } from 'svelte/transition';
    const grow = (node: Element, { duration,delay }:{duration: number,delay:number} ) :TransitionConfig=>{
		return {
			duration,
			delay,
			css: t => {
				const eased = expoOut(t);
				return `
					transform: scale(${eased});`
			}
		};
	}
	const shrink = (node: Element, { duration,delay }:{duration: number,delay:number} ) :TransitionConfig=>{
		return {
			duration,
			delay,
			css: t => {
				const eased = expoIn(t);
				return `
					transform: scale(${eased});`
			}
		};
	}
    export let pathname: string = '';
</script>

{#key pathname}
    <div in:grow={{duration:Transitions.duration,delay:Transitions.duration}} out:shrink={{duration:Transitions.duration,delay:0}}>
        <slot/>
    </div>
{/key}