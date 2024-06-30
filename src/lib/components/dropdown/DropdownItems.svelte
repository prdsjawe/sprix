<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '../button/Button.svelte';

	export let className: string = '';
	export let size: DropdownSize = 'sm';
	export let items: DropdownItem[] = [];
	export let content: HTMLElement | null = null;

	const dispatch = createEventDispatcher();

	const handleClick = (item: DropdownItem) => (e: Event) => {
		dispatch('select-item', { item });
	};
</script>

<div bind:this={content} class="dropdown {className}">
	<div class="flex flex-col w-full gap-1">
		{#each items as item}
			<Button {size} variant="secondary" nofill grow on:click={handleClick(item)}>
				<svelte:fragment slot="label">
					{item.label}
				</svelte:fragment>
			</Button>
		{/each}
	</div>
</div>
