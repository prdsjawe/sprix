<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { trimClass } from '../../utils/common';
  import { Check } from '../../icons';

  const dispatch = createEventDispatcher();
  const TSR: RadioRecord = {
    md: 'radio-md',
    lg: 'radio-lg',
  };

  const TGSR: RadioRecord = {
    md: 'radio-group-md',
    lg: 'radio-group-lg',
  };

  export let key: number = 0;
  export let title: string = '';
  export let description: string = '';

  export let size: RadioSize = 'md';
  export let checked: boolean = false;
  export let position: RadioPosition = 'left';

  let active: boolean = false;

  onMount(() => {
    active = checked;
    return () => (active = false);
  });

  const handleClick = () => {
    active = !active;
    dispatch('click', { active });
  };

  $: radioGroup = trimClass(`flex flex-col ${TGSR[size]}`);

  $: radio = trimClass(`radio ${TSR[size]} ${active ? 'active' : ''}`);

  $: titleClass = trimClass(
    `${size == 'md' ? 'text-sm' : 'text-base'} font-medium`
  );

  $: descriptionClass = trimClass(
    `${
      size == 'md' ? 'text-sm' : 'text-base'
    } font-medium text-gray-400`
  );
</script>

<div class={radioGroup}>
  <div class="flex-1 flex gap-4 w-full items-center">
    <div class={position === 'left' ? 'order-1' : 'order-2'}>
      <button
        id="radio-item-{key}"
        type="button"
        class={radio}
        on:click={handleClick}
      >
        {#if active}
          <span></span>
        {/if}
      </button>
    </div>

    <label
      for="radio-item-{key}"
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
