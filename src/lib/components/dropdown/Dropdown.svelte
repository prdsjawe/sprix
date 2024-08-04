<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '../button';
	import type { Instance } from 'tippy.js';
	import createTippy from '../../utils/tippy';
	import DropdownItems from './DropdownItems.svelte';

	export let label: string = '';
	export let size: DropdownSize = 'sm';
	export let variant: DropdownVariant = 'dropdown';
	export let triggerClass: string = '';
	export let contentClass: string = '';
	export let items: DropdownItem[] = [];

	let content: HTMLElement;
	let trigger: HTMLElement;
	let instance: Instance | null = null;

	let placeholderLabel = label;

	onMount(() => {
		instance = createTippy(trigger, content, {
			onShow() {
				const width = trigger.offsetWidth;
				content.style.width = `${width}px`;
			}
		});

		return () => {
			if (instance) instance.destroy();
		};
	});

	const handleSelectItem = (e: CustomEvent) => {
		const item = e.detail.item as DropdownItem;

		if (instance) {
			instance.hide();
		}

		if (variant !== 'dropdown') {
			placeholderLabel = item.label;
		}

		if (!!item) {
			item.callback();
		}
	};
</script>

<Button
	{size}
	bind:trigger
	variant="secondary"
	outline
	grow
	showRightIcon={true}
	rightIcon="CaretUpDown"
	className="{triggerClass} !shadow-sm !shadow-gray-700/10 {variant === 'listbox'
		? 'min-w-40'
		: ''}"
>
	{placeholderLabel}
</Button>

<DropdownItems
	{items}
	{size}
	bind:content
	className={contentClass}
	on:select-item={handleSelectItem}
></DropdownItems>
