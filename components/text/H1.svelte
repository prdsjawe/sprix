<script lang="ts">
  import { classnames } from '../../utils/common';

  export let className = '';
  let heading = classnames('text-5xl', 'font-extrabold', className);
</script>

<h1 class={heading}>
  <slot />
</h1>
