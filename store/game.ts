import { defineStore } from "pinia";
import { getPlayers } from "~~/utils/firebase";

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
      activePlayer: "Robin",
      players: {
        player1: "Robin",
        player2: "Sami",
      },
    };
  },
  actions: {
    setScore(score) {
      if (this.activePlayer === this.players.player1) {
        this.game.totalScores.player1 =
          this.game.totalScores.player1 + parseInt(score);
        this.game.scores.player1.push(score);
      } else if (this.activePlayer === this.players.player2) {
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
    setActivePlayer(player) {
      this.activePlayer = player;
    },
    incrementTurn() {
      this.game.turn++;
      this.activePlayer =
        this.activePlayer === this.players.player1
          ? this.players.player2
          : this.players.player1;
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
