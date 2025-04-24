import {Sort} from '../index.js';

it('sorts', () => {
	const array = [2, 3, 1, 3];

	array.sort(Sort.descending);

	expect(array).toStrictEqual([3, 3, 2, 1]);
});

it('sorts bigints', () => {
	const array = [2n, 3n, 1n, 3n];

	array.sort(Sort.descending);

	expect(array).toStrictEqual([3n, 3n, 2n, 1n]);
});

it('sorts Dates', () => {
	Sort.descending(new Date(), new Date());
});

it('sorts with predicate', () => {
	const array = [{value: 2}, {value: 3}, {value: 1}, {value: 3}];

	array.sort(Sort.descending(x => x.value));

	expect(array).toStrictEqual([{value: 3}, {value: 3}, {value: 2}, {value: 1}]);
});
