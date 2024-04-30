<script lang="ts">
  import {
    BtnSizeRecord,
    BtnVariantRecord,
    BtnRoundedRecord,
  } from '../constants/btn-records';
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

  export let href: string = '#';
  export let class_: string = '';
  export let size: BtnSize = 'lg';
  export let hug: boolean = false;
  export let plain: boolean = false;
  export let outline: boolean = false;
  export let showLeftIcon: boolean = false;
  export let showRightIcon: boolean = false;
  export let removePadding: boolean = false;
  export let variant: BtnVariant = 'primary';
  export let rounded: BtnRounded = 'initial';
  export let target: HTMLAttributeAnchorTarget = '';

  $: finalClass = `btn ${class_}
      ${BtnSizeRecord[size]}
      ${BtnVariantRecord[variant]}
      ${BtnRoundedRecord[rounded]}
      ${hug ? 'flex-grow-0' : ''}
      ${outline ? 'btn-outline' : ''}
      ${plain ? 'btn-plain' : ''}
      ${removePadding ? 'btn-rmp' : ''}`
    .trim()
    .replace(/\s+/g, ' ');
</script>

<a
  {href}
  {target}
  class={finalClass}
  on:keydown|preventDefault={e =>
    ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
>
  {#if showLeftIcon}
    <span class="left-icon">
      <slot name="leftIcon"></slot>
    </span>
  {/if}
  <slot name="label"></slot>
  {#if showRightIcon}
    <span class="right-icon">
      <slot name="rightIcon"></slot>
    </span>
  {/if}
</a>
