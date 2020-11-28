import {mean, sum} from './reducers';

/**
 * Calculate the variance of a sequence of numbers.
 *
 * @param values - Values to use in the calculation
 *
 * @returns The variance of `values`
 */
export function variance(values: readonly number[]): number {
	const meanValue = values.reduce(mean);

	return values.map(value => (value - meanValue) ** 2).reduce(sum) / (values.length - 1);
}

/**
 * Calculate the standard deviation of a sequence of numbers.
 *
 * @param values - Values to use in the calculation
 *
 * @returns The standard deviation of `values`
 */
export function stddev(values: readonly number[]): number {
	return Math.sqrt(variance(values));
}

/**
 * Calculate the median of a sequence of numbers.
 *
 * @param values - Values to use in the calculation
 *
 * @returns The median of `values`
 */
export function median(values: readonly number[]): number {
	const {length} = values;
	const even = length % 2 === 0;

	if (even) {
		return (values[length / 2 - 1] + values[length / 2]) / 2;
	}

	return values[Math.floor(length / 2)];
}

/**
 * Calculate the mode of an `Iterable`.
 * Strict equality (`===`) is used to compare elements.
 *
 * @param values - Values to use in the calculation
 *
 * @returns An array of the modes of `values`
 */
export function mode<T>(values: Iterable<T>): T[] {
	const frequencyTable: Map<T, number> = new Map();
	let maxOccurrences = 0;
	let modes: T[] = [];

	for (const element of values) {
		const occurrences = frequencyTable.get(element);
		const newOccurrences = occurrences === undefined ? 1 : occurrences + 1;

		frequencyTable.set(element, newOccurrences);

		if (newOccurrences > maxOccurrences) {
			maxOccurrences = newOccurrences;
			modes = [element];
		} else if (newOccurrences === maxOccurrences) {
			modes.push(element);
		}
	}

	return modes;
}
