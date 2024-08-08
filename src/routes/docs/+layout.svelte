<script lang="ts">
	import { Button } from '$lib/components/button';
	import { Text } from '$lib/components/text';
	import { ComponentNavigation } from '$lib/constants/components';
	import { VerticalNavbar } from '$lib/components/vertical-navbar';
</script>

<div class="flex w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
	<div
		class="w-[250px] flex flex-col min-h-[calc(100vh-56px)] relative overflow-y-auto overflow-x-hidden border-r border-gray-200"
	>
		<div class="absolute w-full h-full top-0 left-0 p-4 py-20">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-4">
					<VerticalNavbar items={ComponentNavigation}></VerticalNavbar>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-grow relative overflow-y-auto overflow-x-hidden">
		<div class="absolute w-full h-full top-0 left-0 p-4 py-20">
			<slot />
		</div>
	</div>
</div>
