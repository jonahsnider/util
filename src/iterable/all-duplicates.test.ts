import {allDuplicates} from './all-duplicates';

it('returns duplicate elements', () => {
	expect(allDuplicates([1, 2, 2, 2, 3])).toStrictEqual([2, 2]);
});

it('returns empty when there are no duplicates', () => {
	expect(allDuplicates([1, 2, 3])).toStrictEqual([]);
	expect(allDuplicates([])).toStrictEqual([]);
});
