/**
 * Round a number to n digits of precision after the decimal point.
 * @param value - Value to format
 * @param precision - Number of digits of precision after the decimal point
 * @returns Number rounded to the specified precision
 */
export function toPrecision(value: number, precision: number): number {
	return Number(value.toFixed(precision));
}
