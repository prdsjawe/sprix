<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-2xl', 'font-extrabold', className);
</script>

<h4 class={heading}>
  <slot />
</h4>
