import {largeToSmall} from './array';

/**
 * Check if `a` is a superset of `b`.
 *
 * @param a - First set
 * @param b - Second set/iterable
 *
 * @see {@link isSubset} for checking if one set is a subset of another
 * 
 * @returns `true` if `a` is a superset of `b`, `false` otherwise
 */
export function isSuperset<A, B>(a: ReadonlySet<A | B>, b: Iterable<B>): boolean {
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
 * @see {@link isSuperset} for checking if one set is a superset of another
 *
 * @returns `true` if `a` is a subset of `b`, `false` otherwise
 */
export function isSubset<A, B>(a: Iterable<A>, b: ReadonlySet<A | B>): boolean {
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
export function union<A, B>(a: Iterable<A>, b: Iterable<B>): Set<A | B> {
	const result: Set<A | B> = new Set(a);

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
export function isDisjoint<A, B>(a: Iterable<A>, b: Iterable<B>): boolean {
	const set: Set<A | B> = new Set(a);

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
export function symmetricDifference<A, B>(a: Iterable<A>, b: Iterable<B>): Set<A | B> {
	const result: Set<A | B> = new Set(a);

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
export function difference<A, B>(a: Iterable<A>, b: Iterable<A | B>): Set<A> {
	const result = new Set(a);

	for (const element of b) {
		result.delete(element as A);
	}

	return result;
}
