function uppercaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Convert a comma-separated string to an array of strings */
function stringToArray(string: string) {
  return string.split((/[ ,]+/));
}

export { uppercaseFirstLetter, stringToArray };
