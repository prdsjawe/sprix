<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button } from '../button';
  import Tab from './Tab.svelte';

  export let items: TabItem[] = [];
  export let active: number = 0;
  export let size: TabsSize = 'md';

  const dispatch = createEventDispatcher();

  const handleActiveTab = (item: TabItem) => (e: Event) => {
    dispatch('active-tab', { active: item.id });
  };
</script>

<div class="tabs tabs-underline">
  {#each items as item, i}
    <div>
      <Tab
        {size}
        tabindex={i}
        active={active === item.id}
        notification={item.notification}
        on:click={handleActiveTab(item)}
      >
        <svelte:fragment slot="label">
          {item.label}
        </svelte:fragment>
      </Tab>
    </div>
  {/each}
</div>
