import {largeToSmall} from './array';

/**
 * Check if `a` is a superset of `b`.
 *
 * @param a - First set
 * @param b - Second set/iterable
 *
 * @returns `true` if `a` is a superset of `b`, `false` otherwise
 */
export function isSuperset<T>(a: ReadonlySet<T>, b: Iterable<T>): boolean {
	for (const element of b) {
		if (!a.has(element)) {
			return false;
		}
	}

	return true;
}

/**
 * Check if `a` is a subset of `b`.
 *
 * @param a - First set/iterable
 * @param b - Second set
 *
 * @returns `true` if `a` is a subset of `b`, `false` otherwise
 */
export function isSubset<T>(a: Iterable<T>, b: ReadonlySet<T>): boolean {
	for (const element of a) {
		if (!b.has(element)) {
			return false;
		}
	}

	return true;
}

/**
 * Get the union of 2 iterables.
 * For best performance `a` should have more elements than `b`.
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns A new set which is the union of `a` and `b`
 */
export function union<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
	const result = new Set(a);

	for (const element of b) {
		result.add(element);
	}

	return result;
}

/**
 * Check if `a` and `b` are disjoint.
 * For best performance `a` should have more elements than `b`.
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns `true` if `a` and `b` are disjoint
 */
export function isDisjoint<T>(a: Iterable<T>, b: Iterable<T>): boolean {
	const set = new Set(a);

	for (const element of b) {
		if (set.has(element)) {
			return false;
		}
	}

	return true;
}

/**
 * Get the intersection of 2 `Set`s.
 *
 * @param a - First set
 * @param b - Second set
 *
 * @returns A new set which is the intersection of `a` and `b`
 */
export function intersection<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): Set<T> {
	const result: Set<T> = new Set();
	const [largest, smallest] = largeToSmall(a, b);

	for (const element of largest) {
		if (smallest.has(element)) {
			result.add(element);
		}
	}

	return result;
}

/**
 * Get the symmetric difference of 2 iterables (`a Δ b`).
 * For best performance `a` should have more elements than `b`.
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns A new set which is the symmetric difference of `a` and `b`
 */
export function symmetricDifference<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
	const result = new Set(a);

	for (const element of b) {
		if (result.has(element)) {
			result.delete(element);
		} else {
			result.add(element);
		}
	}

	return result;
}

/**
 * Get a set representing the difference of `a` and `b` (`a \ b`).
 * The order of parameters matters.
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns A new set which is the difference of `a` and `b`
 */
export function difference<T>(a: Iterable<T>, b: Iterable<T>): Set<T> {
	const result = new Set(a);

	for (const element of b) {
		result.delete(element);
	}

	return result;
}
