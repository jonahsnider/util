import {nullish} from '../nullish';
import {not} from './not';

it('negates booleans', () => {
	expect(not(() => true)()).toBe(false);
	expect(not(() => false)()).toBe(true);

	expect([0, null, '', undefined, false].filter(not(nullish))).toStrictEqual([0, '', false]);
});
