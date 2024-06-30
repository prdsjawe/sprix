<script lang="ts">
	import { SvelteComponent, createEventDispatcher, type ComponentType } from 'svelte';
	import type { IconName } from '../../icons';
	import { classnames } from '../../utils/common';
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';
	import { Icon } from '../icon';
	export let className: string = '';

	export let href: string = '';
	export let link: boolean = false;
	export let target: HTMLAttributeAnchorTarget = '';

	export let id: string = '';
	export let size: BtnSize = 'md';
	export let type: BtnType = 'button';
	export let variant: BtnVariant = 'primary';
	export let rounded: BtnRounded = 'initial';

	export let grow: boolean = false;
	export let plain: boolean = false;
	export let nofill: boolean = false;
	export let active: boolean = false;
	export let outline: boolean = false;
	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let leftIcon: IconName = '';
	export let rightIcon: IconName = '';
	export let showLeftIcon: boolean = false;
	export let showRightIcon: boolean = false;
	export let removePadding: boolean = false;
	export let tabindex: number = 0;

	export let trigger: HTMLElement | null = null;

	const dispatch = createEventDispatcher();

	const BVR: BtnVariantRecord = {
		danger: 'btn-danger',
		success: 'btn-success',
		warning: 'btn-warning',
		primary: 'btn-primary',
		secondary: 'btn-secondary'
	};

	const BSR: BtnSizeRecord = {
		xs: 'btn-xs',
		sm: 'btn-sm',
		md: 'btn-md',
		lg: 'btn-lg',
		xl: 'btn-xl'
	};

	const BRR: BtnRoundedRecord = {
		initial: '',
		none: 'btn-rounded-none',
		full: 'btn-rounded-full'
	};

	$: finalClass = classnames(
		'btn',
		BSR[size],
		BVR[variant],
		BRR[rounded],
		plain && 'btn-plain',
		outline && 'btn-outline',
		nofill && 'btn-nofill',
		removePadding && 'btn-rmp',
		active && 'btn-active',
		className
	);

	$: disabledAttribute = disabled || loading;

	const handleClick = (event: MouseEvent) => {
		dispatch('click', { event });
	};
</script>

{#if link}
	<a
		{id}
		{href}
		{target}
		class={finalClass}
		on:keydown|preventDefault={(e) => ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
	>
		{#if showLeftIcon}
			<span class="left-icon">
				<Icon name={leftIcon} className="relative" />
			</span>
		{/if}
		{#if $$slots.label}
			<span class={grow ? 'flex-grow text-left' : ''}>
				<slot name="label"></slot>
			</span>
		{/if}
		{#if showRightIcon}
			<span class="right-icon">
				<Icon name={rightIcon} className="relative" />
			</span>
		{/if}
	</a>
{:else}
	<button
		{id}
		{type}
		class={finalClass}
		bind:this={trigger}
		disabled={disabledAttribute}
		on:keydown|preventDefault={(e) => ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
		tabindex={disabledAttribute ? -1 : tabindex}
		on:click={handleClick}
	>
		{#if loading}
			<span class="left-icon loading"></span>
		{:else if showLeftIcon}
			<span class="left-icon">
				<Icon name={leftIcon} className="relative" />
			</span>
		{/if}
		{#if $$slots.label}
			<span class={grow ? 'flex-grow text-left' : ''}>
				<slot name="label"></slot>
			</span>
		{/if}
		{#if showRightIcon}
			<span class="right-icon">
				<Icon name={rightIcon} className="relative" />
			</span>
		{/if}
	</button>
{/if}
