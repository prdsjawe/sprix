<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Heading from '$lib/components/text/Heading.svelte';
	import { HeaderNavigationRecord } from '$lib/constants/navbar.sample';
	import './style.css';
</script>

<div class="header">
	<div class="inner">
		<div class="flex items-center h-full gap-6">
			<div class="flex items-center flex-grow">
				<img src="/favicon.svg" class="h-10 w-full rounded" alt="" />
				<Heading level={4} className="text-brand-500">Sprix</Heading>
			</div>
			<div>
				<Navbar items={HeaderNavigationRecord}></Navbar>
			</div>
		</div>
		<div>sdgsdfg</div>
	</div>
</div>
