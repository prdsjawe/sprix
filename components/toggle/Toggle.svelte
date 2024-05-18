<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { trimClass } from '../../utils/common';

  const dispatch = createEventDispatcher();
  const TSR: ToggleRecord = {
    md: 'toggle-md',
    lg: 'toggle-lg',
  };

  const TGSR: ToggleRecord = {
    md: 'toggle-group-md',
    lg: 'toggle-group-lg',
  };

  export let key: number = 0;
  export let title: string = '';
  export let description: string = '';

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
    dispatch('click', { active });
  };

  $: toggleGroup = trimClass(`toggle-group ${TGSR[size]}`);

  $: toggle = trimClass(
    `toggle ${TSR[size]} ${active ? 'active' : ''}`
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

<div class={toggleGroup}>
  <div class="flex-1 flex gap-4 w-full items-center">
    <div class={position === 'left' ? 'order-1' : 'order-2'}>
      <button
        id="toggle-item-{key}"
        type="button"
        class={toggle}
        on:click={handleClick}
      >
        <span class:active></span>
      </button>
    </div>

    <label
      for="toggle-item-{key}"
      class="select-none flex-1 {position === 'left'
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
