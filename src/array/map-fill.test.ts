import {name} from '../object';
import {mapFill} from './map-fill';

describe(name(mapFill), () => {
	it('fills arrays', () => {
		expect(mapFill(i => i, 3)).toStrictEqual([0, 1, 2]);
	});
});
