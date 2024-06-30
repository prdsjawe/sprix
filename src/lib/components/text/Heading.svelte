<script lang="ts">
	import { classnames } from '../../utils/common';

	export let className = '';
	export let level: number = 1;

	$: level = Math.max(1, Math.min(level, 6));
	$: heading = classnames(className);
	$: element = `h${level}`;
</script>

<svelte:element this={element} class={heading}>
	<slot />
</svelte:element>
