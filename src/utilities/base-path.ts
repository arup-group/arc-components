let basePath = '';

/* Sets the library's base path to the specified directory. */
export function setBasePath(path: string) {
  basePath = path;
}

/* Gets the library's base path. */
export function getBasePath() {
  return basePath.replace(/\/$/, '');
}
