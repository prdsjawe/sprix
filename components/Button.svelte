<script lang="ts">
  import {
    BtnSizeRecord,
    BtnVariantRecord,
    BtnRoundedRecord,
  } from '../constants/btn-records';

  export let class_: string = '';
  export let size: BtnSize = 'lg';
  export let hug: boolean = false;
  export let plain: boolean = false;
  export let type: BtnType = 'button';
  export let outline: boolean = false;
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let showLeftIcon: boolean = false;
  export let showRightIcon: boolean = false;
  export let removePadding: boolean = false;
  export let variant: BtnVariant = 'primary';
  export let rounded: BtnRounded = 'initial';
  export let trigger: HTMLElement | null = null;

  $: finalClass = `btn ${class_}
    ${BtnSizeRecord[size]}
    ${BtnVariantRecord[variant]}
    ${BtnRoundedRecord[rounded]}
    ${hug ? 'flex-grow-0' : ''}
    ${outline ? 'btn-outline' : ''}
    ${plain ? 'btn-plain' : ''}
    ${removePadding ? 'btn-rm-padding' : ''}`
    .trim()
    .replace(/\s+/g, ' ');

  $: disabledAttribute = disabled || loading;
</script>

<button
  {type}
  class={finalClass}
  bind:this={trigger}
  disabled={disabledAttribute}
  on:keydown|preventDefault={e =>
    ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
  tabindex={disabledAttribute ? -1 : 0}
>
  {#if loading}
    <span class="left-icon loading"></span>
  {:else if showLeftIcon}
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
</button>
