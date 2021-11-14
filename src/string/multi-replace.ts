/**
 * A string replacement function, but specialized for doing multiple replacements in a single pass through the input string.
 *
 * Based off [Nim's `strutils.multiReplace`](https://nim-lang.org/docs/strutils.html#multiReplace%2Cstring%2Cvarargs%5B%5D).
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * multiReplace('a b c', {a: 'c', c: 'a'}); // 'c b a'
 * ```
 *
 * @param string - The string to replace values in
 * @param replacements - An object of replacements where keys are the search values and values are the replacement values
 *
 * @returns A new string with the replacements applied
 *
 * @public
 */
export function multiReplace(string: string, replacements: Record<string, string>): string {
	const replacementsIterable: Iterable<[sub: string, by: string]> = Object.entries(replacements);
	let result = '';
	let index = 0;

	while (index < string.length) {
		/* eslint-disable no-labels */
		foundReplace: {
			for (const [searchValue, replaceValue] of replacementsIterable) {
				if (string.slice(index).startsWith(searchValue)) {
					result += replaceValue;
					index += searchValue.length;
					break foundReplace;
				}
			}

			result += string[index++];
		}
		/* eslint-enable no-labels */
	}

	return result;
}
