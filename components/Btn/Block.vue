<script setup lang="ts">
const props = defineProps<{
  label: string;
  disabled?: boolean;
}>();
</script>

<template>
  <button
    class="btn-block group relative overflow-hidden border-2 border-gray-800 px-30 py-20 transition-colors duration-300 hover:border-green-400 hover:bg-green-400 disabled:border-gray-300 disabled:hover:bg-transparent"
    :disabled="disabled"
  >
    <span
      class="btn-block__text relative z-10 block font-pally text-2xl text-gray-800 transition-colors duration-300 group-hover:text-gray-50 group-disabled:text-gray-300 group-disabled:group-hover:text-gray-300 lg:text-3xl"
      v-text="label"
    ></span>
  </button>
</template>
