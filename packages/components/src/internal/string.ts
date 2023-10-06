function isPascalCase(string: string) {
  return /^([A-Z]([a-z]+))(([A-Z]([a-z]+))+)$/.test(string);
}

function isCamelCase(string: string) {
  return /^([a-z]+)(([A-Z]([a-z]+))+)$/.test(string);
}

function uppercaseFirstLetter(string: string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

/* Retrieve the initials of a user. */
function stringToInitials(string: string) {
  const fullName = string.split(' ');
  const firstName = fullName.shift() || '';
  const lastName = fullName.pop() || '';
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

/* Turns a camelCase or PascalCase string into a space separated string. */
function stringToSpaceSeparated(string: string) {
  if (!isPascalCase(string) && !isCamelCase(string)) {
    return uppercaseFirstLetter(string);
  }
  const camelStr = `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
  const spacedString = camelStr.replace(/([A-Z])/g, ' $1');
  return uppercaseFirstLetter(spacedString);
}

/* Turns a PascalCase or camelCase string into a hyphen separated string. */
function stringToHyphenSeparated(string: string) {
  if (!isPascalCase(string) && !isCamelCase(string)) return string;

  const camelStr = `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
  const hyphenString = camelStr.replace(/([A-Z])/g, '-$1');
  return hyphenString.toLowerCase();
}

/* Convert a comma-separated string to an array of strings. */
function stringToArray(string: string) {
  return string.split(/[ ,]+/);
}

function stringifyObject(object: object) {
  try {
    return JSON.stringify(object);
  } catch (e) {
    throw new Error('Invalid JSON object');
  }
}

function parseObject(string: string) {
  try {
    return JSON.parse(string);
  } catch (e) {
    throw new Error('Invalid JSON string');
  }
}

export {
  uppercaseFirstLetter,
  stringToInitials,
  stringToSpaceSeparated,
  stringToHyphenSeparated,
  stringToArray,
  stringifyObject,
  parseObject,
};
