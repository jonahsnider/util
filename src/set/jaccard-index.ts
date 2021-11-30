import {clamp} from '../math/clamp';
import {largeToSmall} from '../array/large-to-small';

/**
 * Get the Jaccard index of 2 sets.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(1)_
 *
 * @param a - First set
 * @param b - Second set
 *
 * @returns The Jaccard index of `a` and `b`
 *
 * @public
 * @category Set
 */
export function jaccardIndex<T>(a: ReadonlySet<T>, b: ReadonlySet<T>): number {
	if (a.size === 0 && b.size === 0) {
		return 1;
	}

	// TODO: Consider exporting this as an intersectionSize() function and creating other functions for difference(), union(), etc
	let intersectionSize = 0;
	const [largest, smallest] = largeToSmall(a, b);

	for (const element of largest) {
		if (smallest.has(element)) {
			intersectionSize++;
		}
	}

	const unionSize = a.size + b.size - intersectionSize;

	return clamp(intersectionSize / unionSize, 0, 1);
}
