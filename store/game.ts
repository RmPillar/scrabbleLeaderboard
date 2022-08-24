import { defineStore } from "pinia";

export const useGameStore = defineStore({
  id: "game-store",
  state: () => {
    return {
      game: {
        scores: {
          player1: [],
          player2: [],
        },
        totalScores: {
          player1: 0,
          player2: 0,
        },
        winner: null,
        loser: null,
        turn: 0,
      },
    };
  },
  actions: {
    setScore(score) {
      if (this.game.turn % 2 === 0) {
        this.game.totalScores.player1 =
          this.game.totalScores.player1 + parseInt(score);
        this.game.scores.player1.push(score);
      } else {
        this.game.totalScores.player2 =
          this.game.totalScores.player2 + parseInt(score);
        this.game.scores.player2.push(score);
      }
    },
    setResults() {
      if (this.game.totalScores.player1 > this.game.totalScores.player2) {
        this.game.winner = "player1";
        this.game.loser = "player2";
      } else {
        this.game.winner = "player2";
        this.game.loser = "player1";
      }
    },
    incrementTurn() {
      this.game.turn++;
    },
    resetGame() {
      this.game = {
        scores: {
          player1: [],
          player2: [],
        },
        totalScores: {
          player1: 0,
          player2: 0,
        },
        winner: null,
        loser: null,
        turn: 0,
      };
    },
  },
  getters: {},
});
