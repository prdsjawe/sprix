<script lang="ts">
  import Button from '../button/Button.svelte';

  export let class_: string = '';
  export let items: DropdownItem[] = [];
  export let content: HTMLElement | null = null;

  const handleClick = (item: DropdownItem) => (e: Event) => {
    if (item.callback) {
      item.callback();
    }
  };
</script>

<div bind:this={content} class="dropdown {class_}">
  <div class="flex flex-col w-full gap-1">
    {#each items as item}
      <Button
        size="sm"
        variant="dropdown"
        item
        on:click={handleClick(item)}
      >
        <svelte:fragment slot="label">
          {item.label}
        </svelte:fragment>
      </Button>
    {/each}
  </div>
</div>
