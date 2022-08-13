<script setup lang="ts">
import { getPlayers, setupAuthListener, signOut } from "~~/utils/firebase";
import { setTimeoutPromise } from "~~/utils";

import { useAppStore } from "~~/store";

useFirebase();

const state = useAppStore();

const showLoader = ref(true);
const activeScreen = ref("home");

const toggleLoader = (showLoaderBool: boolean, timeout?: number) => {
  showLoader.value = showLoaderBool;
  return setTimeoutPromise(timeout);
};

const authWatcher = async (user) => {
  await toggleLoader(true, 700);

  console.log(user);
  state.setLoggedIn(!!user);

  const players = await getPlayers();

  state.setPlayers(players);
  state.setCurrentScreen("home");
  toggleLoader(false);
};

watch(
  () => state.currentScreen,
  async () => {
    await toggleLoader(true, 700);
    activeScreen.value = state.currentScreen;
    toggleLoader(false);
  }
);

onMounted(() => {
  setupAuthListener(authWatcher);
  signOut();
});
</script>

<template>
  <div class="relative flex h-full overflow-hidden bg-gray-100">
    <ScreenHome v-if="state.loggedIn && activeScreen === 'home'" />
    <ScreenGame v-if="state.loggedIn && activeScreen === 'game'" />
    <ScreenLogin v-if="!state.loggedIn" />

    <Loader :isActive="showLoader" />
  </div>
</template>
