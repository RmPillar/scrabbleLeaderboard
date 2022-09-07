<script setup lang="ts">
const props = defineProps<{
  optionOne: string;
  optionTwo: string;
}>();

const emit = defineEmits<{
  (e: "input", value: string): void;
}>();

const activeOption = ref<string>(props.optionOne);

const setActiveOption = (option: string) => {
  activeOption.value = option;

  emit("input", activeOption.value);
};
</script>

<template>
  <div class="flex h-80 w-full lg:h-100">
    <button
      class="flex h-full w-6/12 items-center justify-center border-2 border-gray-800 font-pally text-2xl text-gray-800 transition-colors duration-300 hover:bg-green-400 hover:text-gray-100 lg:text-4xl"
      :class="{ 'bg-green-400 text-gray-100': activeOption === optionOne }"
      v-text="optionOne"
      @click="setActiveOption(optionOne)"
    />
    <button
      class="flex h-full w-6/12 items-center justify-center border-2 border-l-0 border-gray-800 font-pally text-2xl text-gray-800 transition-colors duration-300 hover:bg-indigo-400 hover:text-gray-100 lg:text-4xl"
      :class="{ 'bg-indigo-400 text-gray-100': activeOption === optionTwo }"
      v-text="optionTwo"
      @click="setActiveOption(optionTwo)"
    />
  </div>
</template>
