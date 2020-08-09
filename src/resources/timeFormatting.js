export default (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.round(time) % 60;
  if (String(minutes).length === 1) {
    minutes = `0${minutes}`;
  }
  if (String(seconds).length === 1) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}