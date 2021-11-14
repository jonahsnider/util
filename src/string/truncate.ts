/**
 * Truncate text to a certain length, optionally appending a suffix when truncated.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * truncate('hello, world', 5, '...'); // 'hello...'
 * ```
 *
 * @param text - Text to truncate
 * @param maxLength - Maximum length before text is truncated
 * @param suffix - Suffix to append if text was truncated
 *
 * @returns Truncated text
 *
 * @public
 */
export function truncate<T extends string>(text: T, maxLength: number, suffix = ''): T | `${string}${typeof suffix}` {
	if (text.length > maxLength) {
		return `${text.slice(0, maxLength)}${suffix}`;
	}

	return text;
}
