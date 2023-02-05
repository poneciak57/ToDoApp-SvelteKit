<script lang="ts">
	import { Transitions } from "$lib/config";
	import { fly } from "svelte/transition";



    export let pathname: string = '';

</script>

{#key pathname}
    <div in:fly={{y:-50,duration:Transitions.duration,delay:Transitions.duration}} out:fly={{y:-50,duration:Transitions.duration}} class="z-0">
        <slot/>
    </div>
{/key}