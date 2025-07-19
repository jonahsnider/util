import {mapFill} from './map-fill.js';

it('fills arrays', () => {
	expect(mapFill(3, i => i)).toStrictEqual([0, 1, 2]);
});
