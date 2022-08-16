<script setup lang="ts">
import { useAppStore } from "~~/store";

const state = useAppStore();

const setCurrentScreen = (screen) => {
  state.setCurrentScreen(screen);
};
</script>

<template>
  <div
    class="grid h-full w-full grid-cols-1 grid-rows-3 bg-gray-100 md:grid-cols-2"
  >
    <HomePlayer
      :player="state.players[0]"
      v-if="state?.players?.[0]"
      class="bg-green-400 md:border-r-2 lg:hover:bg-green-400"
    />
    <HomePlayer
      :player="state.players[1]"
      v-if="state?.players?.[1]"
      class="bg-indigo-400 lg:hover:bg-indigo-400"
    />

    <button
      class="col-span-1 row-span-1 flex items-center justify-center bg-red-400 font-pally text-6xl text-gray-50 transition-colors duration-300 md:col-span-2 lg:bg-inherit lg:text-gray-800 lg:hover:bg-red-400 lg:hover:text-gray-50"
      @click="setCurrentScreen('game')"
    >
      Play
    </button>
  </div>
</template>
