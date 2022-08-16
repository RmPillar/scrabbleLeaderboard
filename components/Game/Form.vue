<script setup lang="ts">
import { ref } from "vue";
import { Form } from "vee-validate";

import { useGameStore } from "~~/store/game";

const emit = defineEmits(["submit"]);

const gameStore = useGameStore();

const submitScore = (data) => {
  gameStore.setScore(data.score);
};

const endTurn = () => {
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
    <Form
      class="mb-50 flex w-full flex-col lg:flex-row lg:items-end"
      @submit="submitScore"
    >
      <div class="mb-20 w-full lg:mb-0 lg:pr-50">
        <FormInput
          label="Enter Your Score"
          type="number"
          name="score"
          rules="required|min:0"
        />
      </div>

      <BtnBlock label="Submit" class="min-w-content" />
    </Form>
    <div
      class="mb-50 flex w-full flex-col space-y-20 sm:flex-row sm:space-y-0 sm:space-x-30 lg:space-x-50"
    >
      <BtnBlock label="End Turn" @click="endTurn" />
    </div>
    <div class="mt-auto mr-auto flex">
      <BtnBlock
        label="Finish Game"
        @click="finishGame"
        class="w-full sm:w-auto"
      />
    </div>
  </div>
</template>
