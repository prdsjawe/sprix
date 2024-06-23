<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-base', className);
</script>

<p class={heading}>
  <slot />
</p>
