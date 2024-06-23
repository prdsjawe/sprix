<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-lg', 'font-bold', className);
</script>

<h6 class={heading}>
  <slot />
</h6>
