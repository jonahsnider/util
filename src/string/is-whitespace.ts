const notWhitespaceRegExp = /\S/;
/**
 * Check whether a string is empty or whitespace.
 *
 * Time complexity: _O(1)_
 *
 * Space complexity: _O(1)_
 *
 * @example
 * ```js
 * isWhitespace(' \n '); // true
 * ```
 *
 * @example
 * ```js
 * isWhitespace(''); // true
 * ```
 *
 * @param string - String to check
 *
 * @returns Whether the string is whitespace
 *
 * @public
 */
export function isWhitespace(string: string): boolean {
	return !notWhitespaceRegExp.test(string);
}
