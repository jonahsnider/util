/**
 * Capitalizes the first letter of a string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * capitalize('hello'); // 'Hello'
 * ```
 *
 * @param text - Text to capitalize
 *
 * @see {@link uncapitalize} for the inverse operation
 *
 * @returns Capitalized string
 *
 * @public
 * @category String
 */
export function capitalize<T extends string>(text: T): Capitalize<T> {
	const firstCharacter = text.charAt(0).toUpperCase();

	return `${firstCharacter}${text.slice(firstCharacter.length)}` as Capitalize<T>;
}
