function formatTime(minutes, seconds) {
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}
console.log(formatTime(1, 4));

let num = 90;
console.log(String(num).padStart(4, 'oe'));

