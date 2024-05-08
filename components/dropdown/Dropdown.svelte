<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '../button';
  import createTippy from '../../utils/tippy';
  import type { Instance } from 'tippy.js';
  import DropdownItems from './DropdownItems.svelte';
  import { CaretUpDown } from '../../icons';

  export let label: string = '';
  export let triggerClass: string = '';
  export let contentClass: string = '';
  export let items: DropdownItem[] = [];

  let content: HTMLElement;
  let trigger: HTMLElement;
  let instance: Instance | null = null;

  onMount(() => {
    instance = createTippy(trigger, content);

    return () => {
      if (instance) instance.destroy();
    };
  });
</script>

<Button
  size="sm"
  bind:trigger
  variant="secondary"
  showRightIcon={true}
  class_={triggerClass}
>
  <svelte:fragment slot="label">
    {label}
  </svelte:fragment>
  <svelte:fragment slot="right-icon">
    <CaretUpDown></CaretUpDown>
  </svelte:fragment>
</Button>

<DropdownItems {items} bind:content class_={contentClass}
></DropdownItems>
