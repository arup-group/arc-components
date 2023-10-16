let basePath = '';

/**
 * Sets the library's base path to the specified directory.
 */
function setBasePath(path: string) {
  basePath = path;
}

/**
 * Gets the library's base path.
 */
function getBasePath() {
  return basePath.replace(/\/$/, '');
}

export { setBasePath, getBasePath };
