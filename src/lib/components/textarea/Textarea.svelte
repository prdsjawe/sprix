<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { classnames } from '../../utils/common';

	const ISR: InputRecord = {
		sm: 'input-sm',
		md: 'input-md'
	};

	const LSR: InputRecord = {
		sm: 'label-sm',
		md: 'label-md'
	};

	export let label: string;
	export let showLabel: boolean = true;

	export let value: string = '';
	export let rows: number = 4;

	export let size: InputSize = 'md';
	export let invalid: boolean = false;
	export let disabled: boolean = false;

	export let placeholder: string = '';
	export let helper: string = '';
	export let error: string = '';

	const dispatch = createEventDispatcher();

	const handleInput = (e: Event) => {
		dispatch('input', { value: (e.target as HTMLInputElement).value });
	};

	$: labelClass = classnames('label', LSR[size]);

	$: inputClass = classnames('input', ISR[size], invalid && 'invalid', disabled && 'disabled');
</script>

<div class="input-group">
	{#if showLabel}
		<span class={labelClass}>{label}</span>
	{/if}
	<div class={inputClass}>
		<textarea {rows} {value} {disabled} {placeholder} on:input={handleInput}></textarea>
	</div>
	{#if helper}
		<div class="helper">
			<span class="text-sm font-medium text-gray-500">{helper}</span>
		</div>
	{/if}
	{#if error}
		<div class="error">
			<span class="text-sm font-medium text-gray-500">{error}</span>
		</div>
	{/if}
</div>
