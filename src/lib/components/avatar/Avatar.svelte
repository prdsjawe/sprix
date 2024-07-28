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

<style lang="postcss">
	.avatar {
		@apply relative overflow-hidden rounded-full;
		@apply bg-gray-100 border border-gray-200;
		@apply flex items-center justify-center;
		@apply font-medium;

		&.avatar-sm {
			@apply size-6 text-xs;
		}

		&.avatar-md {
			@apply size-10 text-sm;
		}

		&.avatar-lg {
			@apply size-14 text-xl;
		}
	}
</style>
