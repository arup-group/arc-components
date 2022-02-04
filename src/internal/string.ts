function uppercaseFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* Retrieve the initials of a user */
function stringToInitials(string: string) {
  const fullName = string.split(' ');
  const firstName = fullName.shift() || '';
  const lastName = fullName.pop() || '';
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

/* Convert a comma-separated string to an array of strings */
function stringToArray(string: string) {
  return string.split((/[ ,]+/));
}

function stringifyObject(object: object) {
  try {
    return JSON.stringify(object);
  } catch (e) {
    throw new Error(e);
  }
}

function parseObject(string: string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    throw new Error(e);
  }
}


export { uppercaseFirstLetter, stringToInitials, stringToArray, stringifyObject, parseObject };
