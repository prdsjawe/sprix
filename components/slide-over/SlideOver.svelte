<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let show: boolean = true;
  let _show = false;

  $: if (show) {
    setTimeout(() => (_show = true), 10);
  }

  const handleClick = () => {
    _show = false;
    dispatch('close');
  };
</script>

{#if show}
  <div
    class="fixed w-screen h-screen overflow-hidden top-0 left-0 z-[999] bg-gray-900/20"
    transition:fade={{ duration: 300 }}
  >
    <div class="relative size-full">
      <div
        class="w-96 h-full bg-white absolute top-0 right-0 transition-all duration-500 {_show
          ? 'translate-x-0'
          : 'translate-x-full'}"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
{/if}
