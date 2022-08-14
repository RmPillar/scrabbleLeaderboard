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
    <button
      class="group col-span-1 row-span-1 flex flex-col items-center justify-center border-b-2 border-gray-800 bg-green-400 transition-colors duration-300 md:row-span-2 md:border-r-2 lg:bg-inherit lg:hover:bg-green-400"
    >
      <h4
        class="font-pally text-7xl font-medium text-gray-50 transition-colors duration-300 lg:text-gray-800 lg:group-hover:text-gray-50"
        v-if="state?.players?.[0]?.wins"
        v-text="state.players[0].wins"
      />
      <h3
        class="font-pally text-6xl text-gray-50 transition-colors duration-300 lg:text-gray-800 lg:group-hover:text-gray-50"
        v-if="state?.players?.[0]?.name"
        v-text="state.players[0].name"
      />
    </button>

    <button
      class="group col-span-1 row-span-1 flex flex-col items-center justify-center border-b-2 border-gray-800 bg-indigo-400 transition-colors duration-300 md:row-span-2 lg:bg-inherit lg:hover:bg-indigo-400"
    >
      <h4
        class="font-pally text-7xl font-medium text-gray-50 transition-colors duration-300 lg:text-gray-800 lg:group-hover:text-gray-50"
        v-if="state?.players?.[1]?.wins"
        v-text="state.players[1].wins"
      />
      <h3
        class="font-pally text-6xl text-gray-50 transition-colors duration-300 lg:text-gray-800 lg:group-hover:text-gray-50"
        v-if="state?.players?.[1]?.name"
        v-text="state.players[1].name"
      />
    </button>

    <button
      class="col-span-1 row-span-1 flex items-center justify-center bg-red-400 font-pally text-6xl text-gray-50 transition-colors duration-300 md:col-span-2 lg:bg-inherit lg:text-gray-800 lg:hover:bg-red-400 lg:hover:text-gray-50"
      @click="setCurrentScreen('game')"
    >
      Play
    </button>
  </div>
</template>
