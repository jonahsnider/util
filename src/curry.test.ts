import {not} from './curry';
import {nullish} from './nullish';

describe(not.name, () => {
	it('inverts conditions', () => {
		expect(not(() => true)()).toBe(false);
		expect(not(() => false)()).toBe(true);

		expect([0, null, '', undefined, false].filter(not(nullish))).toStrictEqual([0, '', false]);
	});
});
