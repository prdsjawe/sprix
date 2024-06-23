<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-4xl', 'font-bold', className);
</script>

<h2 class={heading}>
  <slot />
</h2>
