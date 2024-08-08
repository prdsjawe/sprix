<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '../button';
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import NavItem from './NavItem.svelte';

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

	const findActiveItem = (items: NavbarItem[], path: string): NavbarItem | undefined => {
		for (const item of items) {
			if (item.href === path) {
				return item;
			}
			if (item.subItems) {
				const subItem = findActiveItem(item.subItems, path);
				if (subItem) {
					return subItem;
				}
			}
		}
		return undefined;
	};

	onMount(() => {
		const unsubscribe = page.subscribe(($page) => {
			if (browser) {
				currentPath = $page.url.pathname;
				const activeItem = findActiveItem(items, currentPath) as NavbarItem;
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
		{#if item.subItems && item.subItems.length > 0}
			<li class="flex flex-col justify-center gap-2 h-full mt-4">
				<span class="text-sm font-medium py-2">{item.label}</span>
				<ul class="flex flex-col gap-2 h-full">
					{#each item.subItems as subItem, i}
						<NavItem item={subItem} {i} {size} {currentPath} />
					{/each}
				</ul>
			</li>
		{:else}
			<NavItem {item} {i} {size} {currentPath} />
		{/if}
	{/each}
	<div
		bind:this={outline}
		class="absolute w-0.5 bg-brand-500 left-0 top-0 transition-all duration-500"
	></div>
</ul>
