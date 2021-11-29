/**
 * Uncapitalizes the first letter of a string.
 *
 * Time complexity: _O(n)_
 *
 * Space complexity: _O(n)_
 *
 * @example
 * ```js
 * uncapitalize('HELLO'); // hELLO
 * ```
 *
 * @param text - Text to uncapitalize
 *
 * @see {@link capitalize} for the inverse operation
 *
 * @returns Uncapitalized string
 *
 * @public
 * @category String
 */
export function uncapitalize<T extends string>(text: T): Uncapitalize<T> {
	const firstCharacter = text.charAt(0).toLowerCase();

	return `${firstCharacter}${text.slice(firstCharacter.length)}` as Uncapitalize<T>;
}
