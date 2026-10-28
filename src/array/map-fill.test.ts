import { expect, it } from 'vite-plus/test';
import { mapFill } from './map-fill.js';

it('fills arrays', () => {
	expect(mapFill(3, (i) => i)).toStrictEqual([0, 1, 2]);
});
