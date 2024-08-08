<script>
	import Heading from '$lib/components/text/Heading.svelte';
	import Button from '$lib/components/button/Button.svelte';
	import Text from '$lib/components/text/Text.svelte';
</script>

<div class="flex flex-col px-8 w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
	<div class="flex flex-col py-40 justify-center items-center gap-2">
		<Heading level={6} className="text-brand-500">Sprix UI</Heading>
		<Heading level={1} className="tracking-tight">
			Beautifully crafted components for Svelte.
		</Heading>
		<Text>For my personal use only. And this documentation is for my portfolio.</Text>
		<div class="mt-4">
			<Button>Get Started</Button>
		</div>
	</div>
	<hr class="w-full border-gray-200" />
</div>
