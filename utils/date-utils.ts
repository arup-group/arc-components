export function isNight(date?: Date) {
  const currDate = date || new Date();
  const currTime = currDate.getHours();
  return currTime >= 19 || currTime < 7;
}
