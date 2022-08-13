<script setup lang="ts">
import { useAppStore } from "~~/store";

const props = defineProps<{
  isActive: boolean;
}>();

const state = useAppStore();
</script>

<template>
  <div
    class="loading-grid absolute inset-0 z-40 grid h-full w-full grid-cols-2 grid-rows-2"
    :class="isActive ? 'active' : 'pointer-events-none'"
  >
    <div
      class="loading-grid__topLeft col-span-1 row-span-1 bg-teal-400 transition-transform duration-500"
    ></div>
    <div
      class="loading-grid__topRight col-span-1 row-span-1 bg-red-400 transition-transform duration-500"
    ></div>
    <div
      class="loading-grid__bottomLeft col-span-1 row-span-1 bg-indigo-400 transition-transform duration-500"
    ></div>
    <div
      class="loading-grid__bottomRight col-span-1 row-span-1 bg-yellow-400 transition-transform duration-500"
    ></div>
  </div>
</template>

<style lang="postcss">
.loading-grid {
  &__topLeft {
    transform: translate(-100%, -100%);
  }
  &__topRight {
    transform: translate(100%, -100%);
  }
  &__bottomLeft {
    transform: translate(-100%, 100%);
  }
  &__bottomRight {
    transform: translate(100%, 100%);
  }

  &.active {
    .loading-grid__topLeft {
      transform: translate(0, 0);
    }
    .loading-grid__topRight {
      transform: translate(0, 0);
    }
    .loading-grid__bottomLeft {
      transform: translate(0, 0);
    }
    .loading-grid__bottomRight {
      transform: translate(0, 0);
    }
  }
}
</style>
