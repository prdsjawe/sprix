<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../button/Button.svelte';

  export let content: HTMLElement | null = null;
  export let items: DropdownItem[] = [];
  export let class_: string = '';

  const dispatch = createEventDispatcher();

  const handleClick = (item: DropdownItem) => {
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
        variant="dropdown-item"
        on:click={() => handleClick(item)}
      >
        <svelte:fragment slot="label">
          {item.label}
        </svelte:fragment>
      </Button>
    {/each}
  </div>
</div>
