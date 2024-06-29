<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { Button } from '../button';

  export let activeTab: number = 0;
  export let size: TabsSize = 'md';
  export let items: TabItem[] = [];

  let active: number = 0;
  let outline: HTMLElement;
  let parentElement: HTMLElement;

  onMount(() => {
    active = activeTab;
    const activeButton = document.querySelector(
      '#tab-item-' + active
    ) as HTMLElement;
    updateOutline(activeButton);
    return () => (active = 0);
  });

  const dispatch = createEventDispatcher();

  const handleActiveTab = (item: TabItem) => (e: CustomEvent) => {
    active = item.id;
    const element = (e.detail.event.target as HTMLElement).closest(
      'button'
    ) as HTMLElement;
    updateOutline(element);
    dispatch('active-tab', { active: item.id });
  };

  const updateOutline = (element: HTMLElement) => {
    setTimeout(() => {
      const rect = element.getBoundingClientRect();
      const parentXPosition = parentElement.getBoundingClientRect().x;
      const elementStyle = getComputedStyle(element);

      outline.style.width = `${rect.width - parseFloat(elementStyle.paddingLeft) - parseFloat(elementStyle.paddingRight)}px`;
      outline.style.left = `${rect.x - parentXPosition + parseFloat(elementStyle.paddingLeft)}px`;
    }, 200);
  };
</script>

<div class="flex relative py-2 gap-2 h-full" bind:this={parentElement}>
  {#each items as item, i}
    <div class="flex items-center h-full">
      <Button
        id="tab-item-{item.id}"
        {size}
        plain
        nofill
        tabindex={i}
        variant="secondary"
        on:click={handleActiveTab(item)}
      >
        <svelte:fragment slot="label">{item.label}</svelte:fragment>
      </Button>
    </div>
  {/each}
  <div
    bind:this={outline}
    class="absolute h-0.5 bg-gray-700 left-0 bottom-0 transition-all duration-500"
  ></div>
</div>
