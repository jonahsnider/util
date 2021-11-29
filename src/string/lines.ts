/**
 * Get each line in a string with leading and trailing whitespace removed.
 * Works with LF and CRLF line endings.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * lines('a\nb\nc'); // ['a', 'b', 'c']
 * ```
 *
 * @param string - String to get the lines of
 *
 * @returns An array of lines with leading and trailing whitespace removed
 *
 * @public
 * @category String
 */
export function lines(string: string): string[] {
	return string
		.split('\n')
		.map(line => line.trim())
		.filter(line => line.length > 0);
}
