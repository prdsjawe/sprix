<script lang="ts">
	import './style.css';
	import { createEventDispatcher, onMount } from 'svelte';
	import { classnames } from '../../utils/common';

	const dispatch = createEventDispatcher();

	const TGSR: RadioRecord = {
		sm: 'radio-sm',
		md: 'radio-md'
	};

	const TSR: RadioRecord = {
		sm: 'trigger-sm',
		md: 'trigger-md'
	};

	export let key: number = 0;
	export let title: string = '';
	export let description: string = '';

	export let size: RadioSize = 'md';
	export let checked: boolean = false;
	export let position: RadioPosition = 'left';

	let check: boolean = false;

	onMount(() => {
		check = checked;
		return () => (check = false);
	});

	const handleClick = () => {
		check = !check;
		dispatch('check', { check });
	};

	$: radio = classnames('radio flex flex-col w-full', size === 'md' && 'gap-1', TGSR[size]);

	$: trigger = classnames('trigger', TSR[size], check && 'check');
</script>

<div class={radio}>
	<div class="flex-1 flex gap-4 w-full items-center">
		<div class={position === 'left' ? 'order-1' : 'order-2'}>
			<button id="radio-{key}" type="button" class={trigger} on:click={handleClick}>
				{#if check}
					<span></span>
				{/if}
			</button>
		</div>

		<label
			for="radio-{key}"
			class="select-none cursor-pointer flex-1 {position === 'left' ? 'order-2' : 'order-1'}"
		>
			<span class="title">{title}</span>
		</label>
	</div>

	{#if description}
		<div class="flex flex-1 gap-4 w-full items-center">
			<div class={position === 'left' ? 'order-1' : 'order-2'}>
				<div class="sr-hidden"></div>
			</div>
			<div class="flex-1 {position === 'left' ? 'order-2' : 'order-1'}">
				<span class="description">
					{description}
				</span>
			</div>
		</div>
	{/if}
</div>
