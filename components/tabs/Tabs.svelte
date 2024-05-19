<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '../button';

  export let items: TabItem[] = [];
  export let active: number = 0;

  const dispatch = createEventDispatcher();

  const handleActiveTab = (item: TabItem) => (e: Event) => {
    dispatch('active-tab', { active: item.id });
  };
</script>

<div
  class="flex w-full gap-3 items-center justify-start border-b border-gray-100"
>
  {#each items as item, i}
    <div>
      <Button
        size="sm"
        variant="tab"
        tabindex={i}
        active={active === item.id}
        item
        on:click={handleActiveTab(item)}
      >
        <svelte:fragment slot="label">
          {item.label}
        </svelte:fragment>
      </Button>
    </div>
  {/each}
</div>
