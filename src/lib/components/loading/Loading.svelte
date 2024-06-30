<script lang="ts">
	import { Icon } from '../icon';

	export let loading = false;
	export let label = '';
</script>

{#if loading}
	<div class="w-full flex flex-col gap-1 items-center">
		<Icon name="Loading" className="animate-spin w-16 h-16 stroke-gray-300" />
		{#if label}
			<span class="text-sm font-medium text-gray-500">{label}</span>
		{/if}
	</div>
{/if}
