import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app-store",
  state: () => {
    return {
      players: [],
      currentScreen: "home",
      loggedIn: false,
    };
  },
  actions: {
    setPlayers(players) {
      this.players = players;
    },
    setCurrentScreen(screen) {
      this.currentScreen = screen;
    },
    setLoggedIn(loggedIn) {
      this.loggedIn = loggedIn;
    },
  },
  getters: {},
});
