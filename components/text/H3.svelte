<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-3xl', 'font-bold', className);
</script>

<h3 class={heading}>
  <slot />
</h3>
