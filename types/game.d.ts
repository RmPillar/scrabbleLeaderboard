export interface SetupType {
  scoreMode: "Auto" | "Manual";
  firstPlayer: string;
}

export interface GameStateType extends SetupType {
  startGame: boolean;
  showSetup: boolean;
  startTimer: boolean;
}

export interface TimerStateType {
  msSinceStart: number;
  timer: string;
  interval: null | setInterval;
}

export interface LetterTileStateType {
  multiplier: 1 | 2 | 3;
}
