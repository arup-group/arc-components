/**
 * Is CI.
 *
 * Check if the current process is running on a CI server.
 * Returns true if the CI environment variable is set to true.
 */
export function isCI() {
  return process.env.CI === 'true';
}
