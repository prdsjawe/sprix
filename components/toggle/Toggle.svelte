<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { classnames } from '../../utils/common';

  const dispatch = createEventDispatcher();
  const TGSR: ToggleRecord = {
    sm: 'toggle-sm',
    md: 'toggle-md',
  };

  const TSR: ToggleRecord = {
    sm: 'trigger-sm',
    md: 'trigger-md',
  };

  export let key: number = 0;
  export let title: string = '';
  export let description: string = '';
  export let size: ToggleSize = 'md';
  export let checked: boolean = false;
  export let position: TogglePosition = 'left';

  let check: boolean = false;

  onMount(() => {
    check = checked;
    return () => (check = false);
  });

  const handleClick = () => {
    check = !check;
    dispatch('check', { check });
  };

  $: toggle = classnames(
    `toggle flex flex-col w-full ${size === 'md' ? 'gap-1' : ''}  ${TGSR[size]}`
  );

  $: trigger = classnames(
    `trigger ${TSR[size]} ${check ? 'check' : ''}`
  );
</script>

<div class={toggle}>
  <div class="flex-1 flex gap-4 w-full items-center">
    <div class={position === 'left' ? 'order-1' : 'order-2'}>
      <button
        id="toggle-{key}"
        type="button"
        class={trigger}
        on:click={handleClick}
      >
        <span class:check></span>
      </button>
    </div>

    <label
      for="toggle-{key}"
      class="select-none flex-1 cursor-pointer {position === 'left'
        ? 'order-2'
        : 'order-1'}"
    >
      <span class="title">{title}</span>
    </label>
  </div>

  {#if description}
    <div class="flex flex-1 gap-4 w-full items-center">
      <div class={position === 'left' ? 'order-1' : 'order-2'}>
        <div class="sr-hidden"></div>
      </div>
      <div
        class="flex-1 {position === 'left' ? 'order-2' : 'order-1'}"
      >
        <span class="description">
          {description}
        </span>
      </div>
    </div>
  {/if}
</div>
