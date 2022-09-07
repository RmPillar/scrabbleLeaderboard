<script setup lang="ts">
import DualSelect from "../Form/DualSelect.vue";

interface stateType {
  firstPlayer: string;
  scoreMode: "Auto" | "Manual";
}

const emit = defineEmits<{
  (e: "startGame", value: stateType): void;
}>();

const state = reactive<stateType>({
  firstPlayer: "Robin",
  scoreMode: "Auto",
});

const setFirstPlayer = (value: string) => {
  state.firstPlayer = value;
};

const setScoreMode = (value: "Auto" | "Manual") => {
  state.scoreMode = value;
};

const startGame = () => {
  emit("startGame", state);
};
</script>

<template>
  <section
    class="game-setup absolute inset-0 z-40 h-full w-full bg-gray-900/50"
  >
    <div class="flex h-full w-full items-center justify-center p-20 lg:p-50">
      <div class="flex w-full flex-col bg-gray-100">
        <div class="mb-auto p-20 lg:p-50">
          <div class="mb-auto flex flex-col">
            <h3 class="mb-20 font-pally text-3xl text-gray-800 lg:text-5xl">
              Who's going first?
            </h3>

            <DualSelect
              option-one="Robin"
              option-two="Sami"
              class="mb-30"
              @input="setFirstPlayer"
            />

            <h3 class="mb-20 font-pally text-3xl text-gray-800 lg:text-5xl">
              Score Mode:
            </h3>
            <div class="flex items-center gap-20">
              <DualSelect
                option-one="Auto"
                option-two="Manual"
                class="mb-30"
                @input="setScoreMode"
              />
            </div>
          </div>
        </div>

        <button
          class="flex h-100 w-full items-center justify-center border-t-2 border-gray-800 font-pally text-4xl text-gray-800 transition-colors duration-300 hover:bg-red-400 hover:text-gray-100 lg:h-[200px] lg:text-6xl"
          @click="startGame"
        >
          Start Game
        </button>
      </div>
    </div>
  </section>
</template>
