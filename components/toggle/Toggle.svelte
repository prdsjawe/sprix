<script lang="ts">
  import { onMount } from 'svelte';
  import { trimClass } from '../../utils/common';

  const TSR: ToggleRecord = {
    md: 'toggle-md',
    lg: 'toggle-lg',
  };

  export let size: ToggleSize = 'md';
  export let checked: boolean = false;
  export let position: TogglePosition = 'left';
  let active: boolean = false;

  onMount(() => {
    active = checked;
    return () => (active = false);
  });

  const handleClick = () => {
    active = !active;
  };

  $: toggle = trimClass(
    `toggle ${TSR[size]} ${active ? 'active' : ''}`
  );

  $: title = trimClass(
    `${size == 'md' ? 'text-sm' : 'text-base'} font-medium`
  );

  $: description = trimClass(
    `${
      size == 'md' ? 'text-sm' : 'text-base'
    } font-medium text-gray-400`
  );
</script>

<div class="flex flex-1 min-w-[500px] gap-4 items-start">
  <div class="flex {position === 'left' ? 'order-1' : 'order-2'}">
    <button type="button" class={toggle} on:click={handleClick}>
      <span class:active></span>
    </button>
  </div>

  <div
    class="flex-1 flex flex-col gap-0.5 {position === 'left'
      ? 'order-2'
      : 'order-1'}"
  >
    <span class={title}> Remember Me </span>
    <span class={description}>
      Save my login details for the next time.
    </span>
  </div>
</div>
