<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { trimClass } from '../../utils/common';

  const dispatch = createEventDispatcher();

  const TGSR: RadioRecord = {
    md: 'radio-md',
    lg: 'radio-lg',
  };

  const TSR: RadioRecord = {
    md: 'radio-trigger-md',
    lg: 'radio-trigger-lg',
  };

  export let key: number = 0;
  export let title: string = '';
  export let description: string = '';

  export let size: RadioSize = 'md';
  export let checked: boolean = false;
  export let position: RadioPosition = 'left';

  let check: boolean = false;

  onMount(() => {
    check = checked;
    return () => (check = false);
  });

  const handleClick = () => {
    check = !check;
    dispatch('check', { check });
  };

  $: radio = trimClass(`radio ${TGSR[size]}`);

  $: trigger = trimClass(
    `trigger ${TSR[size]} ${check ? 'check' : ''}`
  );

  $: titleClass = trimClass(
    `${size == 'md' ? 'text-sm' : 'text-base'} font-medium`
  );

  $: descriptionClass = trimClass(
    `${
      size == 'md' ? 'text-sm' : 'text-base'
    } font-medium text-gray-400`
  );
</script>

<div class={radio}>
  <div class="flex-1 flex gap-4 w-full items-center">
    <div class={position === 'left' ? 'order-1' : 'order-2'}>
      <button
        id="radio-trigger-{key}"
        type="button"
        class={trigger}
        on:click={handleClick}
      >
        {#if check}
          <span></span>
        {/if}
      </button>
    </div>

    <label
      for="radio-trigger-{key}"
      class="select-none cursor-pointer flex-1 {position === 'left'
        ? 'order-2'
        : 'order-1'}"
    >
      <span class={titleClass}>{title}</span>
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
        <span class={descriptionClass}>
          {description}
        </span>
      </div>
    </div>
  {/if}
</div>
