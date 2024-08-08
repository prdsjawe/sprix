<script lang="ts">
	import Button from '../button/Button.svelte';

	export let i: number;
	export let size: BtnSize;
	export let item: NavbarItem;
	export let currentPath: string;
</script>

<li class="flex items-center h-full">
	<Button
		id={'vert-navbar-item-' + item.id}
		{size}
		plain
		nofill
		grow
		tabindex={i}
		link={!item.locked}
		disabled={item.locked}
		href={item.href}
		variant={currentPath === item.href ? 'primary' : 'secondary'}
	>
		{item.label}
	</Button>
</li>
