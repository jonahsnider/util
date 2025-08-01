import { nullish } from '../nullish.js';
import { not } from './not.js';

it('negates booleans', () => {
	expect(not(() => true)()).toBe(false);
	expect(not(() => false)()).toBe(true);

	expect([0, null, '', undefined, false].filter(not(nullish))).toStrictEqual([0, '', false]);
});
