<script lang="ts">
	import Header from '$lib/components/header/landing/Header.svelte';
	import '../app.css';
</script>

<Header></Header>
<div class="h-[calc(100vh-56px)] flex w-screen items-center justify-center">
	<div class="flex h-full p-8 max-w-screen-2xl w-full">
		<slot />
	</div>
</div>
