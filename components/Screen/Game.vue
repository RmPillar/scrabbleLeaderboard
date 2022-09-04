<script setup lang="ts">
import { useAppStore } from "~~/store";
import { useGameStore } from "~~/store/game";
import { createMatch, getPlayers } from "~~/utils/firebase";

import { GameStateType, SetupType } from "~~/types/game";

const appStore = useAppStore();
const gameStore = useGameStore();

const state = reactive<GameStateType>({
  startGame: false,
  showSetup: true,
  startTimer: false,
  scoreMode: "Auto",
  firstPlayer: "Robin",
});

const timerRef = ref(null);

const startGame = (value: SetupType) => {
  state.startGame = true;
  state.startTimer = true;
  state.showSetup = false;
  state.scoreMode = value.scoreMode;
  state.firstPlayer = value.firstPlayer;
  gameStore.setActivePlayer(value.firstPlayer);
};

const finishGame = async () => {
  await createMatch(gameStore.game, appStore.players, timerRef.value.timer);
  const data = await getPlayers();
  gameStore.resetGame();
  appStore.setPlayers(data);
  appStore.setCurrentScreen("home");
};
</script>

<template>
  <div
    class="relative flex h-full w-full grid-cols-2 flex-col bg-gray-100 lg:grid lg:grid-cols-3 lg:grid-rows-2"
  >
    <div
      class="col-span-2 row-span-1 grid grid-cols-2 grid-rows-1 divide-x-2 divide-gray-800 border-b-2 border-gray-800 lg:col-span-1 lg:row-span-2 lg:grid-cols-1 lg:grid-rows-2 lg:divide-y-2 lg:border-b-0 lg:border-r-2"
    >
      <GamePlayer
        v-if="appStore.players[0]"
        :name="appStore.players[0].name"
        :score="gameStore.game.totalScores.player1"
        activeClass="bg-green-400"
        :active="gameStore.activePlayer === appStore.players[0].name"
      />
      <GamePlayer
        v-if="appStore.players[1]"
        :name="appStore.players[1].name"
        :score="gameStore.game.totalScores.player2"
        activeClass="bg-indigo-400"
        :active="gameStore.activePlayer === appStore.players[1].name"
      />
    </div>

    <GameManualForm @submit="finishGame" v-if="state.scoreMode === 'Manual'" />
    <GameAutoForm @submit="finishGame" v-if="state.scoreMode === 'Auto'" />

    <div class="absolute bottom-25 right-0 hidden w-150 justify-start sm:flex">
      <GameTimer ref="timerRef" :start="state.startTimer" />
    </div>

    <transition>
      <GameSetup v-if="state.showSetup" @startGame="startGame" />
    </transition>
  </div>
</template>
