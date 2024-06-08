<script lang="ts">
  import Button from './components/button/Button.svelte';
  import { Checkbox } from './components/checkbox';
  import { Input } from './components/input';
  import { Radio } from './components/radio';
  import { Toggle } from './components/toggle';
  import CaretDown from './icons/CaretDown.svelte';
</script>

<div
  class="w-screen font-sans h-screen flex justify-center items-center"
>
  <div class="flex w-96">
    <!-- <Button
      variant="warning"
      size="md"
      nofill
      showLeftIcon
      showRightIcon
      leftIcon={CaretDown}
      rightIcon={CaretDown}
    >
      <svelte:fragment slot="label">Hello</svelte:fragment>
    </Button> -->

    <!-- <Checkbox
      title="Remember Me"
      size="sm"
      description="Testing Description"
    ></Checkbox> -->

    <!-- <Toggle
      title="Remember Me"
      size="md"
      description="Testing Description"
    ></Toggle> -->

    <!-- <Radio
      title="Remember Me"
      size="md"
      description="Testing Description"
    ></Radio> -->

    <Input label="Password" size="md" />
  </div>
</div>
