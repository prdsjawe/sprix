<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '../button';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	export let size: TabsSize = 'sm';
	export let items: NavbarItem[] = [];

	let currentPath: string;
	let outline: HTMLElement;
	let parentElement: HTMLElement;

	const updateOutline = (element: HTMLElement) => {
		setTimeout(async () => {
			await tick();
			const rect = element.getBoundingClientRect();
			const parentXPosition = parentElement.getBoundingClientRect().x;
			const elementStyle = getComputedStyle(element);

			outline.style.width = `${rect.width - parseFloat(elementStyle.paddingLeft) - parseFloat(elementStyle.paddingRight)}px`;
			outline.style.left = `${rect.x - parentXPosition + parseFloat(elementStyle.paddingLeft)}px`;
		}, 200);
	};

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			if (browser) {
				currentPath = $page.url.pathname;
				const activeItem = items.find((item) => item.href === currentPath) as NavbarItem;
				const activeButton = document.getElementById(`navbar-item-${activeItem.id}`) as HTMLElement;
				updateOutline(activeButton);
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<ul class="flex relative py-2 gap-2 h-full" bind:this={parentElement}>
	{#each items as item, i}
		<li class="flex items-center h-full">
			<Button
				id={'navbar-item-' + item.id}
				{size}
				plain
				nofill
				tabindex={i}
				link={true}
				href={item.href}
				variant={currentPath === item.href ? 'primary' : 'secondary'}
			>
				<svelte:fragment slot="label">{item.label}</svelte:fragment>
			</Button>
		</li>
	{/each}
	<div
		bind:this={outline}
		class="absolute h-0.5 bg-brand-500 left-0 bottom-0 transition-all duration-500"
	></div>
</ul>
