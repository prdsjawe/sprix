<script lang="ts">
	import Header from '$lib/components/header/landing/Header.svelte';
	import '../app.css';
</script>

<Header></Header>
<div class="flex flex-col items-center w-screen">
	<slot />
</div>
