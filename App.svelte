<script lang="ts">
  import Router from 'svelte-spa-router';
  import { Button } from './components/button';
  import { Checkbox } from './components/checkbox';
  import { Dialog } from './components/dialog';
  import { Loading } from './components/loading';
  import { SlideOver } from './components/slide-over';
  import { Tabs } from './components/tabs';
  import { Heading } from './components/text';
  import { TabsRecord } from './constants/tabs.sample';
  import CaretDown from './icons/CaretDown.svelte';
  import routes from './routes';
  import { HeaderNavigationRecord } from './constants/navbar.sample';

  let show = false;
  let active = 0;

  const handleClick = () => {
    show = true;
  };
</script>

<div class="w-screen font-sans h-screen">
  <div
    class="flex h-[56px] w-full px-4 border-b border-gray-200 items-stretch"
  >
    <Tabs size="sm" items={HeaderNavigationRecord} activeTab={1} navbar
    ></Tabs>
  </div>
  <Router {routes} />
</div>
