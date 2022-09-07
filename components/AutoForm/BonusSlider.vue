<script setup lang="ts">
const swiperRef = ref(null);

const state = reactive({
  wordMultiplier: 1,
  allLetterBonus: 0,
  challengeDeduction: 0,
});

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
};

const emit = defineEmits<{
  (e: "changeBonusState", value: { key: string; value: number }): void;
}>();

const setWordMultiplier = (multiplier) => {
  if (state.wordMultiplier === multiplier) {
    state.wordMultiplier = 1;
  } else {
    state.wordMultiplier = multiplier;
  }

  emit("changeBonusState", {
    key: "wordMultiplier",
    value: state.wordMultiplier,
  });
};

const setAllLetterBonus = () => {
  state.allLetterBonus = state.allLetterBonus === 0 ? 50 : 0;

  emit("changeBonusState", {
    key: "allLetterBonus",
    value: state.allLetterBonus,
  });
};

const setChallengeDeduction = () => {
  state.challengeDeduction = state.challengeDeduction === 0 ? -10 : 0;

  emit("changeBonusState", {
    key: "challengeDeduction",
    value: state.challengeDeduction,
  });
};
</script>

<template>
  <Swiper
    ref="swiperRef"
    :options="swiperOptions"
    class="mr-auto !ml-0 w-120 !overflow-visible"
    wrapper-class="overflow-visible"
  >
    <button
      @click="setWordMultiplier(2)"
      class="swiper-slide relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-50"
      :class="{ 'bg-yellow-400 text-gray-50': state.wordMultiplier === 2 }"
      type="button"
    >
      ×2
    </button>
    <button
      @click="setWordMultiplier(3)"
      :class="{ 'bg-teal-400 text-gray-50': state.wordMultiplier === 3 }"
      class="swiper-slide relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-teal-400 hover:text-gray-50"
      type="button"
    >
      ×3
    </button>
    <button
      @click="setAllLetterBonus"
      :class="{ 'bg-purple-400 text-gray-50': state.allLetterBonus === 50 }"
      class="swiper-slide relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-purple-400 hover:text-gray-50"
      type="button"
    >
      +50
    </button>
    <button
      @click="setChallengeDeduction"
      :class="{
        'bg-red-500 text-gray-50': state.challengeDeduction === -10,
      }"
      class="swiper-slide relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-red-500 hover:text-gray-50"
      type="button"
    >
      -10
    </button>
  </Swiper>
</template>
