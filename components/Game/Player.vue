<script setup lang="ts">
const props = defineProps<{
  name: string;
  score: number;
  activeClass: string;
  active: boolean;
}>();
</script>

<template>
  <div
    class="col-span-1 flex flex-col items-center justify-center py-35 transition-colors duration-300"
    :class="active ? `text-gray-50 ${activeClass}` : 'text-gray-800'"
  >
    <h3 v-if="name" v-text="name" class="font-pally text-4xl lg:text-6xl" />
    <h4 v-text="score" class="font-pally text-4xl lg:text-6xl" />
  </div>
</template>
