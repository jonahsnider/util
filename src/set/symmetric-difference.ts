/**
 * Get the symmetric difference of 2 iterables (`a Δ b`).
 * For best performance `a` should have more elements than `b`.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @param a - First iterable
 * @param b - Second iterable
 *
 * @returns A new set which is the symmetric difference of `a` and `b`
 *
 * @public
 * @category Set
 */
export function symmetricDifference<A, B>(a: Iterable<A>, b: Iterable<B>): Set<A | B> {
	if (a === (b as unknown as typeof a)) {
		return new Set();
	}

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
