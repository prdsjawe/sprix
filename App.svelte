<script lang="ts">
  import { Alert } from './components/alert';
  import Avatar from './components/avatar/Avatar.svelte';
  import { Badge } from './components/badge';
  import { Button } from './components/button';
  import { Checkbox } from './components/checkbox';
  import { Dialog } from './components/dialog';
  import { Divider } from './components/divider';
  import { Dropdown } from './components/dropdown';
  import { Input } from './components/input';
  import { Radio } from './components/radio';
  import { Toggle } from './components/toggle';
  import { DropdownRecordSample } from './constants/dropdown.sample';
  import CaretDown from './icons/CaretDown.svelte';

  let show = false;
  const handleClick = () => {
    show = true;
  };
</script>

<div
  class="w-screen font-sans h-screen flex justify-center items-center"
>
  <div class="flex flex-col gap-12">
    <h1 class="text-5xl font-bold">Hello</h1>
    <div>
      <Button variant="primary" size="md" on:click={handleClick}>
        <svelte:fragment slot="label">Hello</svelte:fragment>
      </Button>
    </div>

    <div>
      <Avatar size="md"></Avatar>
    </div>

    <Divider />

    <!-- <Dialog {show} on:close={() => (show = false)}></Dialog>  -->
    <div class="flex">
      <Badge
        label="Hello"
        size="sm"
        type="base"
        variant="primary"
        determiner
      />
    </div>

    <!-- <Alert {show} on:close={() => (show = false)}></Alert> -->

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

    <!-- <Input label="Password" size="md" /> -->

    <!-- <Dropdown
      label="Hello"
      size="md"
      items={DropdownRecordSample}
      variant="dropdown"
    ></Dropdown> -->
  </div>
</div>
