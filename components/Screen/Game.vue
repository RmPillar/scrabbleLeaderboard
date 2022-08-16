<script setup lang="ts">
import { useAppStore } from "~~/store";
import { useGameStore } from "~~/store/game";
import { createMatch, getPlayers } from "~~/utils/firebase";

const appStore = useAppStore();
const gameStore = useGameStore();

const startGame = ref(false);

const timerRef = ref(null);

const finishGame = async () => {
  await createMatch(gameStore.game, appStore.players, timerRef.value.timer);
  const data = await getPlayers();
  appStore.setPlayers(data);
  appStore.setCurrentScreen("home");
};

onMounted(() => {
  startGame.value = true;
});
</script>

<template>
  <div
    class="relative h-full w-full grid-cols-2 bg-gray-100 lg:grid lg:grid-cols-3 lg:grid-rows-2"
  >
    <div
      class="col-span-2 row-span-1 grid grid-cols-2 grid-rows-1 divide-x-2 divide-gray-800 border-b-2 border-gray-800 lg:col-span-1 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2 lg:divide-y-2 lg:border-b-0 lg:border-r-2"
    >
      <GamePlayer
        v-if="appStore.players[0]"
        :name="appStore.players[0].name"
        :score="gameStore.game.totalScores.player1"
        activeClass="bg-green-400"
        :active="gameStore.game.turn % 2 === 0"
      />
      <GamePlayer
        v-if="appStore.players[1]"
        :name="appStore.players[1].name"
        :score="gameStore.game.totalScores.player2"
        activeClass="bg-indigo-400"
        :active="gameStore.game.turn % 2 === 1"
      />
    </div>

    <GameForm @submit="finishGame" />

    <div class="absolute bottom-25 right-0 flex w-150 justify-start">
      <GameTimer ref="timerRef" />
    </div>
  </div>
</template>
