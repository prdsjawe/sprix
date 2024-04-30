<script lang="ts">
  import Button from './components/Button.svelte';
  import Link from './components/Link.svelte';
</script>

<div
  class="w-screen font-sans h-screen flex justify-center items-center"
>
  <div class="flex">
    <Link variant="primary" href="https://google.com" size="md">
      <svelte:fragment slot="label">Hello</svelte:fragment>
    </Link>
  </div>
</div>
