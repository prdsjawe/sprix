<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

  export let class_: string = '';

  export let href: string = '#';
  export let link: boolean = false;
  export let target: HTMLAttributeAnchorTarget = '';

  export let size: BtnSize = 'lg';
  export let type: BtnType = 'button';
  export let variant: BtnVariant = 'primary';
  export let rounded: BtnRounded = 'initial';

  export let plain: boolean = false;
  export let outline: boolean = false;
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let showLeftIcon: boolean = false;
  export let showRightIcon: boolean = false;
  export let removePadding: boolean = false;

  export let trigger: HTMLElement | null = null;

  const BVR: BtnVariantRecord = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
    success: 'btn-success',
    warning: 'btn-warning',
    dropdown: 'btn-dropdown',
    'dropdown-item': 'btn-dropdown-item',
  };

  const BSR: BtnSizeRecord = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  };

  const BRR: BtnRoundedRecord = {
    initial: '',
    none: 'btn-rounded-none',
    full: 'btn-rounded-full',
  };

  $: finalClass = `btn ${class_}
    ${BSR[size]}
    ${BVR[variant]}
    ${BRR[rounded]}
    ${plain ? 'btn-plain' : ''}
    ${outline ? 'btn-outline' : ''}
    ${removePadding ? 'btn-rmp' : ''}`
    .trim()
    .replace(/\s+/g, ' ');

  $: disabledAttribute = disabled || loading;
</script>

{#if link}
  <a
    {href}
    {target}
    class={finalClass}
    on:keydown|preventDefault={e =>
      ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
  >
    {#if showLeftIcon}
      <span class="left-icon">
        <slot name="left-icon"></slot>
      </span>
    {/if}
    <slot name="label"></slot>
    {#if showRightIcon}
      <span class="right-icon">
        <slot name="left-icon"></slot>
      </span>
    {/if}
  </a>
{:else}
  <button
    {type}
    class={finalClass}
    bind:this={trigger}
    disabled={disabledAttribute}
    on:keydown|preventDefault={e =>
      ['Enter', 'Space'].includes(e.key) && e.currentTarget.click()}
    tabindex={disabledAttribute ? -1 : 0}
  >
    <div class="flex items-center">
      {#if loading}
        <span class="left-icon loading"></span>
      {:else if showLeftIcon}
        <span class="left-icon">
          <slot name="left-icon"></slot>
        </span>
      {/if}
      <slot name="label"></slot>
    </div>
    {#if showRightIcon}
      <span class="right-icon">
        <slot name="right-icon"></slot>
      </span>
    {/if}
  </button>
{/if}
