<script setup lang="ts">
import Swiper, { FreeMode, SwiperOptions } from "swiper";

const props = defineProps<{
  options?: SwiperOptions;
  wrapperClass?: string;
}>();

const swiper = ref(null);
const swiperRef = ref(null);

onMounted(() => {
  if (swiperRef.value) {
    swiper.value = new Swiper(swiperRef.value, {
      ...props.options,
      modules: [FreeMode],
    });
  }
});

defineExpose({ swiper });
</script>

<template>
  <div class="swiper" ref="swiperRef">
    <div class="swiper-wrapper" :class="wrapperClass">
      <slot />
    </div>
  </div>
</template>
