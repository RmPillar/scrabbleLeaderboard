<script setup lang="ts">
import { Player } from "~~/types/player";

const props = defineProps<{
  player: Player;
}>();
</script>

<template>
  <div
    class="group col-span-1 row-span-1 flex flex-col items-center justify-center border-b-2 border-gray-800 transition-colors duration-300 md:row-span-2 lg:bg-inherit"
  >
    <h4
      class="font-pally text-7xl font-medium text-gray-50 transition-colors duration-300 lg:text-gray-800 lg:group-hover:text-gray-50"
      v-if="player?.wins"
      v-text="player.wins"
    />
    <h3
      class="font-pally text-6xl text-gray-50 transition-colors duration-300 lg:text-gray-800 lg:group-hover:text-gray-50"
      v-if="player?.name"
      v-text="player.name"
    />
  </div>
</template>
