<script setup lang="ts">
import { Form } from "vee-validate";
import { useGameStore } from "~~/store/game";
import { letterScores } from "~~/data/scores";

const emit = defineEmits(["submit"]);

const gameStore = useGameStore();

const state = reactive({
  word: "",
  wordArray: [],
  wordMultiplier: 1,
  allLetterBonus: 0,
  challengeDeduction: 0,
});

const updateWord = (word) => {
  state.word = word;
  state.wordArray = word.split("").map((letter) => {
    return {
      letter,
      score: letterScores[letter.toUpperCase()],
      multiplier: 1,
    };
  });
};

const updateMultiplier = (multiplier, index) => {
  state.wordArray[index].multiplier = multiplier;
};

const setWordMultiplier = (multiplier) => {
  if (state.wordMultiplier === multiplier) {
    state.wordMultiplier = 1;
  } else {
    state.wordMultiplier = multiplier;
  }
};

const setAllLetterBonus = () => {
  state.allLetterBonus = state.allLetterBonus === 0 ? 50 : 0;
};

const setChallengeDeduction = () => [
  (state.challengeDeduction = state.challengeDeduction === 0 ? -10 : 0),
];

const score = computed(
  () =>
    state.wordArray.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.score * currentValue.multiplier,
      0
    ) *
      state.wordMultiplier +
    state.allLetterBonus +
    state.challengeDeduction
);

const submitScore = () => {
  gameStore.setScore(score.value);
  state.word = "";
  state.wordArray = [];
  state.wordMultiplier = 1;
  state.allLetterBonus = 0;
  state.challengeDeduction = 0;

  gameStore.incrementTurn();
};

const finishGame = () => {
  gameStore.setResults();
  emit("submit");
};
</script>

<template>
  <div
    class="col-span-2 flex flex-grow flex-col items-center px-40 pt-50 pb-25 lg:row-span-2 lg:px-50 lg:pt-100"
  >
    <Form class="mb-50 w-full" @submit="submitScore">
      <div class="mb-50 flex w-full flex-col lg:flex-row lg:items-end">
        <FormInput label="Enter Your Word" name="word" @input="updateWord" />
      </div>
      <div class="mb-50 flex min-h-120 flex-wrap gap-10">
        <GameLetterTile
          v-for="(letter, index) in state.wordArray"
          :letter="letter"
          :key="index"
          @multiplierChange="
            (multiplier) => updateMultiplier(multiplier, index)
          "
        />
      </div>

      <div class="mb-50 flex gap-10">
        <button
          @click="setWordMultiplier(2)"
          class="relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-50"
          :class="{ 'bg-yellow-400 text-gray-50': state.wordMultiplier === 2 }"
          type="button"
        >
          Double
        </button>
        <button
          @click="setWordMultiplier(3)"
          :class="{ 'bg-teal-400 text-gray-50': state.wordMultiplier === 3 }"
          class="relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-teal-400 hover:text-gray-50"
          type="button"
        >
          Triple
        </button>
        <button
          @click="setAllLetterBonus"
          :class="{ 'bg-purple-400 text-gray-50': state.allLetterBonus === 50 }"
          class="relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-purple-400 hover:text-gray-50"
          type="button"
        >
          +50
        </button>
        <button
          @click="setChallengeDeduction"
          :class="{
            'bg-red-500 text-gray-50': state.challengeDeduction === -10,
          }"
          class="relative flex aspect-square h-120 w-120 items-center justify-center border-2 border-gray-800 font-pally text-3xl transition-colors duration-300 hover:bg-red-500 hover:text-gray-50"
          type="button"
        >
          -10
        </button>
      </div>

      <h3 class="mb-20 font-pally text-3xl text-gray-800 lg:text-5xl">
        Score: {{ score }}
      </h3>

      <div class="flex gap-10">
        <BtnBlock label="Submit" type="submit" class="min-w-content" />

        <BtnBlock
          label="Finish Game"
          @click="finishGame"
          class="w-full sm:w-auto"
        />
      </div>

      <div class="mt-auto mr-auto flex"></div>
    </Form>
  </div>
</template>
