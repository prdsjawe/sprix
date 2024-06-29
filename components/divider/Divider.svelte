<script lang="ts">
  import { classnames } from '../../utils/common';

  export let soft: boolean = false;

  $: divider = classnames(
    'border-t',
    soft ? 'border-gray-900/5' : 'border-gray-900/10'
  );
</script>

<hr class={divider} />
