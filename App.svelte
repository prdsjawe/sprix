<script lang="ts">
  import { Button } from './components/button';
  import { Checkbox } from './components/checkbox';
  import { Dialog } from './components/dialog';
  import { Loading } from './components/loading';
  import { SlideOver } from './components/slide-over';
  import { H1, H2, H3 } from './components/text';
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
    <H1>Hello</H1>
    <div>
      <Button on:click={handleClick}>
        <svelte:fragment slot="label">Click me</svelte:fragment>
      </Button>
      <Loading loading={true} />
    </div>
  </div>
</div>
