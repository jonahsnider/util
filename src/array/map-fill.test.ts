import {mapFill} from './map-fill';

it('fills arrays', () => {
	expect(mapFill(i => i, 3)).toStrictEqual([0, 1, 2]);
});
