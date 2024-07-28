<script>
	import Button from '$lib/components/button/Button.svelte';
</script>

<div>
	<Button leftIcon="CaretUpDown" showLeftIcon>
		<svelte:fragment slot="label">Hello</svelte:fragment>
	</Button>
</div>
