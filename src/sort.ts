/**
 * Sort an array in ascending order (least to greatest).
 *
 * @example
 * ```ts
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(ascending);
 * ```
 *
 * @param a - Element
 * @param b - Element
 *
 * @returns A negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise
 */
export function ascending(a: number, b: number): number {
	return a - b;
}

/**
 * Sort an array in descending order (greatest to least).
 * @example
 * ```ts
 * const array = [5, 3, 2, 4, 1];
 *
 * array.sort(descending);
 * ```
 *
 * @param a - Element
 * @param b - Element
 *
 * @returns A negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise
 */
export function descending(a: number, b: number): number {
	return b - a;
}
