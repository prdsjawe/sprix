<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button from '../button/Button.svelte';

  const dispatch = createEventDispatcher();

  export let show: boolean = true;
  export let role: BtnVariant = 'danger';
  export let confirmLabel: string = 'Confirm';
</script>

{#if show}
  <div
    class="fixed w-screen h-screen overflow-hidden top-0 left-0 p-8 z-[999] bg-gray-900/20"
  >
    <div class="grid grid-rows-[1fr_auto_3fr] flex-grow h-full">
      <div class="flex items-center justify-center row-start-2">
        <div
          class="p-6 h-full flex flex-col gap-4 w-[500px] bg-white rounded-2xl border-gray-600 shadow"
        >
          <div class="flex-grow flex flex-col gap-2">
            <h2 class="font-semibold text-sm/6">
              <slot name="title">Enter title here</slot>
            </h2>
            <span class="text-sm/6 text-gray-600">
              <slot name="description">Enter description here</slot>
            </span>
            <div class="w-full flex items-center justify-end gap-4">
              <div>
                <Button
                  size="sm"
                  variant="secondary"
                  on:click={() => dispatch('close')}
                  plain
                >
                  <svelte:fragment slot="label">
                    Cancel
                  </svelte:fragment>
                </Button>
              </div>
              <div>
                <Button
                  size="sm"
                  variant={role}
                  on:click={() => dispatch('confirm')}
                >
                  <svelte:fragment slot="label">
                    {confirmLabel}
                  </svelte:fragment>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
