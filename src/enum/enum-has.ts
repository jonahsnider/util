/**
 * A type for an enum value.
 *
 * @public
 * @category Enum
 */
export type EnumValue = number | string;
/**
 * A type for an enum.
 *
 * @public
 * @category Enum
 */
export type Enum<T extends EnumValue> = Readonly<Record<string | number, T>>;

const lookup = new WeakMap<Enum<EnumValue>, ReadonlySet<EnumValue>>();

/**
 * Check whether a given value is a member value of an enum.
 *
 * Time complexity: _O(1)_ if `Enum` has been seen before. Otherwise, _O(n)_ where _n_ is the number of enum values.
 *
 * Space complexity: _O(1)_ if `Enum` has been seen before. Otherwise, _O(n)_ where _n_ is the number of unique enum values.
 *
 * @example
 * ```ts
 * enum Enum {
 *   A,
 *   B,
 * }
 *
 * enumHas(Enum, 0); // true
 * enumHas(Enum, 2); // false
 * ```
 *
 * @param Enum - The enum to use as the source of member values
 * @param value - The value to check
 *
 * @returns Whether `value` is a member value of `Enum`
 *
 * @public
 * @category Enum
 */
export function enumHas<T extends EnumValue>(Enum: Enum<T>, value: unknown): value is T {
	if (!lookup.has(Enum)) {
		lookup.set(Enum, new Set(Object.values(Enum)));
	}

	const values = lookup.get(Enum)!;

	return values.has(value as any);
}
