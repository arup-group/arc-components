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

/* Turns a camelCase value into a space separated string like so: Camel Case */
function camelCaseToSpaceSeparated(string: string) {
  const result = string.replace(/([A-Z])/g, ' $1');
  return `${result.charAt(0).toUpperCase()}${result.slice(1)}`;
}

/* Turns a CamelCase value into a hyphen separated string like so: camel-case */
function camelCaseToHyphenSeparated(string: string) {
  const result = string.replace(/([A-Z])/g, ' $1');
  return `${result.toLowerCase().replace(' ', '-')}`
}

/* Convert a comma-separated string to an array of strings */
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
  camelCaseToSpaceSeparated,
  camelCaseToHyphenSeparated,
  stringToArray,
  stringifyObject,
  parseObject,
};
