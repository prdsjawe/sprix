<script lang="ts">
  import { Button } from './components/button';
  import { Checkbox } from './components/checkbox';
  import { Dialog } from './components/dialog';
  import { Loading } from './components/loading';
  import { SlideOver } from './components/slide-over';
  import { Tabs } from './components/tabs';
  import { Heading } from './components/text';
  import { TabsRecord } from './constants/tabs.sample';
  import CaretDown from './icons/CaretDown.svelte';

  let show = false;
  let active = 0;

  const handleClick = () => {
    show = true;
  };
</script>

<div
  class="w-screen font-sans h-screen flex justify-center items-center"
>
  <div class="flex items-stretch">
    <Tabs size="sm" items={TabsRecord} activeTab={1}></Tabs>
  </div>
</div>
