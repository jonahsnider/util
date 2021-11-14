import {combineIterables} from './combine-iterables';

it('combines iterables', () => {
	expect([...combineIterables([])]).toStrictEqual([]);
	expect([...combineIterables([1])]).toStrictEqual([1]);
	expect([...combineIterables([1], [2])]).toStrictEqual([1, 2]);
});
