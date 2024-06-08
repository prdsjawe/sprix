<script lang="ts">
  import Button from './components/button/Button.svelte';
  import CaretDown from './icons/CaretDown.svelte';
</script>

<div
  class="w-screen font-sans h-screen flex justify-center items-center"
>
  <div>
    <Button
      variant="warning"
      size="md"
      nofill
      showLeftIcon
      showRightIcon
      leftIcon={CaretDown}
      rightIcon={CaretDown}
    >
      <svelte:fragment slot="label">Hello</svelte:fragment>
    </Button>
  </div>
</div>
