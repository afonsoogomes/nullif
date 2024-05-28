/**
 * Returns `null` if the two arguments are equal, otherwise returns the first argument.
 * 
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns The first value if the values are not equal, otherwise `null`.
 */
export function nullif<T>(a: T, b: T): T | null {
  return a === b ? null : a;
}
