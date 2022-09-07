<script setup lang="ts">
const props = defineProps<{
  wordArray: {
    letter: string;
    score: number;
    multiplier: 1 | 2 | 3;
  }[];
}>();

const swiperRef = ref(null);

watch(
  () => props.wordArray,
  () => {
    console.log(swiperRef.value.swiper);
    setTimeout(() => {
      swiperRef.value.swiper.update();
    }, 100);
  }
);

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
};

const emit = defineEmits<{
  (e: "multiplierChange", value: { multiplier: number; index: number });
}>();

const updateMultiplier = (multiplier, index) => {
  emit("multiplierChange", { multiplier, index });
};
</script>

<template>
  <Swiper
    ref="swiperRef"
    :options="swiperOptions"
    class="mr-auto !ml-0 w-120 !overflow-visible"
    wrapper-class="overflow-visible"
  >
    <GameLetterTile
      v-for="(letter, index) in wordArray"
      :key="index"
      :letter="letter"
      class="swiper-slide"
      @multiplierChange="(multiplier) => updateMultiplier(multiplier, index)"
    />
  </Swiper>
</template>
