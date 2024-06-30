<script lang="ts">
	import { classnames } from '../../utils/common';

	export let size: AvatarSize = 'sm';
	export let placeholder: string = 'AA';
	export let image: string | null = null;
	export let trigger: HTMLElement | null = null;

	const ASR: AvatarSizeRecord = {
		sm: 'avatar-sm',
		md: 'avatar-md',
		lg: 'avatar-lg'
	};

	$: avatar = classnames('avatar', ASR[size]);
</script>

<div class={avatar} bind:this={trigger}>
	{#if !!image}
		<img src={image} alt="avatar" class="size-full object-fill" />
	{:else}
		<div>{placeholder}</div>
	{/if}
</div>
