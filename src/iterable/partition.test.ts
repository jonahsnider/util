import {expectType} from 'tsd';
import {partition} from './partition';

it('partitions an array', () => {
	expect(partition([1, 2, 3, 4, 5, 6], number => number % 2)).toStrictEqual([
		[1, 3, 5],
		[2, 4, 6],
	]);

	const [numbers, strings] = partition(['a', 2, 'b', 3, 'c'], (element): element is number => typeof element === 'number');

	expectType<number[]>(numbers);
	expectType<string[]>(strings);
});
