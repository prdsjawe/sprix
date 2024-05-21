<script lang="ts">
  import Button from './components/button/Button.svelte';
  import Input from './components/input/Input.svelte';
  import { Tabs } from './components/tabs';
  import { TabsRecord } from './constants/tabs.sample';

  let activeTab = 1;
  const handleActiveTab = (e: CustomEvent) => {
    activeTab = e.detail.active;
  };
</script>

<div
  class="w-screen font-sans h-screen flex justify-center items-center"
>
  <div>
    <Button variant="primary" size="sm">
      <svelte:fragment slot="label">Hello</svelte:fragment>
    </Button>
  </div>
</div>
