export const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }
  return "0:00";
};
