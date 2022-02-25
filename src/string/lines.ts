const LINE_REG_EXP = /\r\n?|\n/gim;

/**
 * Get each line in a string.
 * Works with LF and CRLF line endings.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * lines('a\nb\r\nc'); // ['a', 'b', 'c']
 * ```
 *
 * @param string - String to get the lines of
 *
 * @returns An array of lines
 *
 * @public
 * @category String
 */
export function lines(string: string): string[] {
	return string.split(LINE_REG_EXP)!;
}
