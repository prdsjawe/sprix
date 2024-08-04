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
			const parentYPosition = parentElement.getBoundingClientRect().y;
			const elementStyle = getComputedStyle(element);

			outline.style.height = `${rect.height - parseFloat(elementStyle.paddingTop) - parseFloat(elementStyle.paddingBottom)}px`;
			outline.style.top = `${rect.y - parentYPosition + parseFloat(elementStyle.paddingTop)}px`;
		}, 200);
	};

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			if (browser) {
				currentPath = $page.url.pathname;

				if ($page.url.pathname.split('/').length <= 2) {
					return;
				}

				const activeItem = items.find((item) => item.href === currentPath) as NavbarItem;
				const activeButton = document.getElementById(
					`vert-navbar-item-${activeItem.id}`
				) as HTMLElement;
				updateOutline(activeButton);
			}
		});

		return () => {
			unsubscribe();
		};
	});
</script>

<ul class="flex flex-col relative px-2 gap-2 h-full" bind:this={parentElement}>
	{#each items as item, i}
		<li class="flex items-center h-full">
			<Button
				id={'vert-navbar-item-' + item.id}
				{size}
				plain
				nofill
				grow
				tabindex={i}
				link={!item.locked}
				disabled={item.locked}
				href={item.href}
				variant={currentPath === item.href ? 'primary' : 'secondary'}
			>
				{item.label}
			</Button>
		</li>
	{/each}
	<div
		bind:this={outline}
		class="absolute w-0.5 bg-brand-500 left-0 top-0 transition-all duration-500"
	></div>
</ul>
