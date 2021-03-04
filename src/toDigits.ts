/**
 * Round a number to n digits of precision after the decimal point.
 *
 * @example
 * ```ts
 * const value = 12.345;
 *
 * toDigits(value, 2) === 12.35;
 * ```
 *
 * @param value - Value to format
 * @param precision - Number of digits of precision after the decimal point
 *
 * @returns Number rounded to the specified number of digits
 */
export function toDigits(value: number, precision: number): number {
	const factor = 10 ** precision;

	return Math.round(value * factor * (1 + Number.EPSILON)) / factor;
}
