import { Sort } from '../index.js';

it('combines sorts', () => {
	const array = [
		{ a: 1, b: 2 },
		{ a: 1, b: 1 },
		{ a: 2, b: 2 },
		{ a: 2, b: 1 },
	];

	array.sort(
		Sort.combine(
			Sort.descending((x) => x.b),
			Sort.descending((x) => x.a),
		),
	);

	expect(array).toStrictEqual([
		{ a: 2, b: 2 },
		{ a: 1, b: 2 },
		{ a: 2, b: 1 },
		{ a: 1, b: 1 },
	]);
});
