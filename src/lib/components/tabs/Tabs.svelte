<script lang="ts">
	import { Button } from '../button';
	import { createEventDispatcher, onMount } from 'svelte';
	import { classnames } from '../../utils/common';
	import tabs from '../../stores/tabs';

	export let name: string = '';
	export let size: TabsSize = 'md';
	export let items: TabItem[] = [];
	export let navbar: boolean = false;
	export let className: string = '';

	tabs.setName(name);
	tabs.setTabs(items);
	tabs.setCallBack(() => {
		const activeButton = document.querySelector('#tab-item-' + $tabs.active) as HTMLElement;
		updateOutline(activeButton);
	});

	let outline: HTMLElement;
	let parentElement: HTMLElement;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const activeButton = document.querySelector('#tab-item-' + $tabs.active) as HTMLElement;
		updateOutline(activeButton);
	});

	const handleActiveTab = (item: TabItem) => (e: CustomEvent) => {
		tabs.setActiveTab(item);
		const element = (e.detail.event.target as HTMLElement).closest('button') as HTMLElement;
		updateOutline(element);
		dispatch('active-tab', { value: $tabs.active });
	};

	const updateOutline = (element: HTMLElement) => {
		setTimeout(() => {
			const rect = element.getBoundingClientRect();
			const parentXPosition = parentElement.getBoundingClientRect().x;
			const elementStyle = getComputedStyle(element);

			outline.style.width = `${rect.width - parseFloat(elementStyle.paddingLeft) - parseFloat(elementStyle.paddingRight)}px`;
			outline.style.left = `${rect.x - parentXPosition + parseFloat(elementStyle.paddingLeft)}px`;
		}, 200);
	};

	$: parentClass = classnames('flex', 'relative', 'py-2', 'gap-2', 'h-full', className);
</script>

<div class={parentClass} bind:this={parentElement}>
	{#each items as item, i}
		<div class="flex items-center h-full">
			<Button
				id="tab-item-{item.value}"
				{size}
				plain
				nofill
				tabindex={i}
				link={navbar}
				href={item.value}
				variant={$tabs.active === item.value ? 'primary' : 'secondary'}
				on:click={handleActiveTab(item)}
			>
				<svelte:fragment slot="label">
					{item.label}
				</svelte:fragment>
			</Button>
		</div>
	{/each}
	<div
		bind:this={outline}
		class="absolute h-0.5 bg-brand-500 left-0 bottom-0 transition-all duration-700 ease-out"
	></div>
</div>
