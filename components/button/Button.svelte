<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from 'svelte/elements';
  import { classnames } from '../../utils/common';
  import {
    SvelteComponent,
    createEventDispatcher,
    type ComponentType,
  } from 'svelte';

  export let class_: string = '';

  export let href: string = '#';
  export let link: boolean = false;
  export let target: HTMLAttributeAnchorTarget = '';

  export let size: BtnSize = 'lg';
  export let type: BtnType = 'button';
  export let variant: BtnVariant = 'primary';
  export let rounded: BtnRounded = 'initial';

  export let item: boolean = false;
  export let plain: boolean = false;
  export let nofill: boolean = false;
  export let active: boolean = false;
  export let outline: boolean = false;
  export let loading: boolean = false;
  export let disabled: boolean = false;
  export let leftIcon: ComponentType | null = null;
  export let rightIcon: ComponentType | null = null;
  export let showLeftIcon: boolean = false;
  export let showRightIcon: boolean = false;
  export let removePadding: boolean = false;
  export let tabindex: number = 0;

  export let trigger: HTMLElement | null = null;

  const dispatch = createEventDispatcher();

  const BVR: BtnVariantRecord = {
    danger: 'btn-danger',
    success: 'btn-success',
    warning: 'btn-warning',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
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

  $: finalClass = classnames(`btn ${class_}
    ${BSR[size]}
    ${BVR[variant]}
    ${BRR[rounded]}
    ${plain ? 'btn-plain' : ''}
    ${outline ? 'btn-outline' : ''}
    ${nofill ? 'btn-nofill' : ''}
    ${removePadding ? 'btn-rmp' : ''}
    ${item ? 'btn-item' : ''} 
    ${active ? 'btn-active' : ''}`);

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
        <svelte:component this={leftIcon} className="relative"
        ></svelte:component>
      </span>
    {/if}
    <slot name="label"></slot>
    {#if showRightIcon}
      <span class="right-icon">
        <svelte:component this={rightIcon} className="relative"
        ></svelte:component>
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
    tabindex={disabledAttribute ? -1 : tabindex}
    on:click={() => dispatch('click')}
  >
    {#if loading}
      <span class="left-icon loading"></span>
    {:else if showLeftIcon}
      <span class="left-icon">
        <svelte:component this={leftIcon} className="relative"
        ></svelte:component>
      </span>
    {/if}
    <slot name="label"></slot>
    {#if showRightIcon}
      <span class="right-icon">
        <svelte:component this={rightIcon} className="relative"
        ></svelte:component>
      </span>
    {/if}
  </button>
{/if}
