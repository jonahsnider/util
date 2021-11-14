import {combineIterables} from '../iterable';

/**
 * Get the union of 2 iterables.
 * For best performance `a` should have more elements than `b`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns A new set which is the union of `a` and `b`
 *
 * @public
 */
export function union<A, B>(a: Iterable<A>, b: Iterable<B>): Set<A | B> {
	if (a === (b as unknown as typeof a)) {
		return new Set(a);
	}

	return new Set(combineIterables<A | B>(a, b));
}
