<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { classnames } from '../../utils/common';
	import Icon from '../icon/Icon.svelte';
	import type { IconName } from '../../icons';

	const ISR: InputRecord = {
		sm: 'input-sm',
		md: 'input-md'
	};

	const LSR: InputRecord = {
		sm: 'label-sm',
		md: 'label-md'
	};

	export let label: string = '';
	export let showLabel: boolean = true;

	export let value: string = '';

	export let size: InputSize = 'md';
	export let invalid: boolean = false;
	export let disabled: boolean = false;

	export let placeholder: string = '';
	export let type: HTMLInputTypeAttribute = 'text';

	export let showLeftIcon: boolean = false;
	export let leftIcon: IconName = '';
	export let helper: string = '';
	export let error: string = '';

	export let showRightSlot: boolean = false;

	export let trigger: HTMLElement | null = null;
	const dispatch = createEventDispatcher();
	let isPassword = false;

	onMount(() => {
		isPassword = type === 'password';

		return () => {
			isPassword = false;
		};
	});
	const handleInput = (e: Event) => {
		dispatch('input', { value: (e.target as HTMLInputElement).value });
	};

	$: labelClass = classnames('label', LSR[size]);

	$: inputClass = classnames('field', ISR[size], invalid && 'invalid', disabled && 'disabled');
</script>

<div class="input" bind:this={trigger}>
	{#if showLabel}
		<span class={labelClass}>{label}</span>
	{/if}
	<div class={inputClass}>
		{#if showLeftIcon}
			<span class="left-icon">
				<Icon name={leftIcon} className="relative" />
			</span>
		{/if}
		<input {type} {value} {disabled} {placeholder} on:input={handleInput} />
		{#if showRightSlot}
			<span class="text-sm font-medium text-gray-500">
				<slot name="right-slot"></slot>
			</span>
		{/if}
	</div>
	{#if helper}
		<div class="helper">
			<span class="text-sm font-medium text-gray-500">{helper}</span>
		</div>
	{/if}
	{#if error}
		<div class="error">
			<span class="text-sm font-medium text-red-500">{error}</span>
		</div>
	{/if}
</div>
