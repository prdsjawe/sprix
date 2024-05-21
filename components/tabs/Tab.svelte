<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { trimClass } from '../../utils/common';

  export let class_: string = '';
  export let tabindex: number = 0;
  export let size: TabsSize = 'md';
  export let notification: number | null = null;
  export let active: boolean = false;
  export let disabled: boolean = false;

  const dispatch = createEventDispatcher();

  const TS: TabsSizeRecord = {
    sm: 'tab-sm',
    md: 'tab-md',
  };

  $: finalClass = trimClass(
    `tab 
    ${class_} 
    ${TS[size]}
    ${active ? 'tab-active' : ''}`
  );
</script>

<button
  type="button"
  class={finalClass}
  {disabled}
  on:keydown|preventDefault={e =>
    ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
  tabindex={disabled ? -1 : tabindex}
  on:click={() => dispatch('click')}
>
  <slot name="label"></slot>
  {#if notification}
    <span>
      <span class="notification">
        {notification}
      </span>
    </span>
  {/if}
</button>
