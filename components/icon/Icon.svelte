<script lang="ts">
  import * as Icons from '../../icons';
  import type { IconName } from '../../icons';
  import type { SvelteComponent } from 'svelte';

  type IconComponent = typeof SvelteComponent & {
    new (options: {
      target: HTMLElement;
      props?: {
        className?: string;
      };
    }): SvelteComponent;
  };

  export let name: IconName;
  export let className = '';

  let Icon: IconComponent | null = null;
  if (name) {
    Icon = Icons[name] as IconComponent;
  }
</script>

<svelte:component this={Icon} {className} />
