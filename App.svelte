<script lang="ts">
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
    <Tabs
      items={TabsRecord}
      active={activeTab}
      on:active-tab={handleActiveTab}
    ></Tabs>
  </div>
</div>
