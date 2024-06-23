<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-xl', 'font-bold', className);
</script>

<h5 class={heading}>
  <slot />
</h5>
