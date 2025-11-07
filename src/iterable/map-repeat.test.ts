import { expect, it } from 'vitest';
import { mapRepeat } from './map-repeat.js';

it('repeats', () => {
	expect([...mapRepeat((i) => i, 3)]).toStrictEqual([0, 1, 2]);
	expect([...mapRepeat((i) => i, 0)]).toStrictEqual([]);
});
