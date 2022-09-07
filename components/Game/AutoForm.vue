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

const updateMultiplier = ({ multiplier, index }) => {
  state.wordArray[index].multiplier = multiplier;
};

const handleBonusChange = ({ key, value }) => {
  state[key] = value;
};

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
    class="col-span-2 flex flex-grow flex-col items-center overflow-hidden px-40 pt-40 pb-25 lg:row-span-2 xl:px-50 xl:pt-100"
  >
    <Form class="mb-50 w-full" @submit="submitScore">
      <div class="mb-50 flex w-full flex-col lg:flex-row lg:items-end">
        <FormInput label="Enter Your Word" name="word" @input="updateWord" />
      </div>
      <AutoFormWordSlider
        class="mb-20 xl:mb-50"
        :word-array="state.wordArray"
        @multiplier-change="updateMultiplier"
      />

      <AutoFormBonusSlider
        class="mb-50"
        @changeBonusState="handleBonusChange"
      />

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
