export const dayMonthYearFromTimestamp = () => {
  const date = new Date(Date.now());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const convertMsToMinutesSecondsMilliseconds = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millisecondsLeft = milliseconds % 1000;

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }:${millisecondsLeft}`;
};

export const setTimeoutPromise = (ms?: number, callback?: () => unknown) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      const result = callback ? callback() : undefined;
      return resolve(result);
    }, ms || 0)
  );
};
