import {name} from '../object';
import {mapRepeat} from './map-repeat';

describe(name(mapRepeat), () => {
	it('repeats', () => {
		expect([...mapRepeat(i => i, 3)]).toStrictEqual([0, 1, 2]);
		expect([...mapRepeat(i => i, 0)]).toStrictEqual([]);
	});
});
