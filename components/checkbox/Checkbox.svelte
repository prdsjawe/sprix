<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { classnames } from '../../utils/common';
  import { Check } from '../../icons';

  const dispatch = createEventDispatcher();
  const TSR: CheckboxRecord = {
    sm: 'trigger-sm',
    md: 'trigger-md',
  };

  const TGSR: CheckboxRecord = {
    sm: 'checkbox-sm',
    md: 'checkbox-md',
  };

  export let key: number = 0;
  export let title: string = '';
  export let description: string = '';

  export let checked: boolean = false;
  export let size: CheckboxSize = 'sm';
  export let position: CheckboxPosition = 'left';

  let check: boolean = false;

  onMount(() => {
    check = checked;
    return () => (check = false);
  });

  const handleClick = () => {
    check = !check;
    dispatch('check', { check });
  };

  $: checkboxGroup = classnames(
    `checkbox flex flex-col w-full ${size === 'md' ? 'gap-1' : ''} ${TGSR[size]}`
  );

  $: checkbox = classnames(
    `trigger ${TSR[size]} ${check ? 'check' : ''}`
  );
</script>

<div class={checkboxGroup}>
  <div class="flex-1 flex gap-4 w-full items-center">
    <div class={position === 'left' ? 'order-1' : 'order-2'}>
      <button
        id="checkbox-{key}"
        type="button"
        class={checkbox}
        on:click={handleClick}
      >
        <span>
          {#if check}
            <Check></Check>
          {/if}
        </span>
      </button>
    </div>

    <label
      for="checkbox-{key}"
      class="select-none cursor-pointer flex-1 {position === 'left'
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
