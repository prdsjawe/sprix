<script lang="ts">
  import { Button } from './components/button';
  import { Checkbox } from './components/checkbox';
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
      <Checkbox />
    </div>
  </div>
</div>
