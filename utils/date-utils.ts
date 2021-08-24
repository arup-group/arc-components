export function isNight(date: Date) {
  const time = date.getTime();
  return time >= 19 || time < 7;
}
