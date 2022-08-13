<script setup lang="ts">
import { convertMsToMinutesSecondsMilliseconds } from "~~/utils";

const msSinceStart = ref(0);
const timer = ref("00:00:00");
const interval = ref(null);

const startTimer = () => {
  msSinceStart.value = 0;
  const startTime = Date.now();
  interval.value = setInterval(() => {
    msSinceStart.value = Date.now() - startTime;
    timer.value = convertMsToMinutesSecondsMilliseconds(msSinceStart.value);
  }, 1);
};

onMounted(startTimer);

defineExpose({
  timer,
});
</script>

<template>
  <span v-text="timer" class="font-pally text-3xl text-gray-800"></span>
</template>
