<script setup lang="ts">
const props = defineProps<{
  letter: {
    letter: string;
    score: number;
    multiplier: 1 | 2 | 3;
  };
}>();

const emit = defineEmits<{
  (e: "multiplierChange", value: number): void;
}>();

const letterScore = computed(
  () => props.letter.score * props.letter.multiplier
);

const multiplierClass = computed(() =>
  props.letter.multiplier === 2
    ? "bg-blue-400 text-gray-50"
    : props.letter.multiplier === 3
    ? "bg-red-400 text-gray-50"
    : "text-gray-800"
);

const setMultipler = () => {
  const newMultiplier =
    props.letter.multiplier === 1 ? 2 : props.letter.multiplier === 2 ? 3 : 1;

  emit("multiplierChange", newMultiplier);
};
</script>

<template>
  <button
    class="relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 transition-all duration-300 hover:shadow-lg"
    :class="multiplierClass"
    @click="setMultipler"
    type="button"
  >
    <span v-text="letter.letter" class="font-pally text-3xl uppercase" />
    <span
      class="absolute top-5 right-10 font-pally text-xl"
      v-text="letterScore"
    ></span>
  </button>
</template>
