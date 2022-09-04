<script setup lang="ts">
import { convertMsToMinutesSecondsMilliseconds } from "~~/utils";
import { TimerStateType } from "~~/types/game";

const props = defineProps<{
  start: boolean;
}>();

const state = reactive<TimerStateType>({
  msSinceStart: 0,
  timer: "00:00:00",
  interval: null,
});

const startTimer = (): void => {
  state.msSinceStart = 0;
  const startTime = Date.now();
  state.interval = setInterval(() => {
    state.msSinceStart = Date.now() - startTime;
    state.timer = convertMsToMinutesSecondsMilliseconds(state.msSinceStart);
  }, 1);
};

watch(
  () => props.start,
  (value) => {
    if (value) {
      startTimer();
    }
  }
);

defineExpose({
  timer: state.timer,
});
</script>

<template>
  <span v-text="state.timer" class="font-pally text-3xl text-gray-800"></span>
</template>
