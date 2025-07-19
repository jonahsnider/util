import * as http from 'node:http';
import { Method } from './method.js';

describe('Method', () => {
	it('has no invalid methods', () => {
		const expected = new Set(http.METHODS);

		const methods = Object.values(Method);

		for (const received of methods) {
			expect(expected).toContain(received);
		}
	});

	it('has correct methods', () => {
		expect(Method.Connect).toBe('CONNECT');
		expect(Method.Delete).toBe('DELETE');
		expect(Method.Get).toBe('GET');
		expect(Method.Head).toBe('HEAD');
		expect(Method.Options).toBe('OPTIONS');
		expect(Method.Patch).toBe('PATCH');
		expect(Method.Put).toBe('PUT');
		expect(Method.Trace).toBe('TRACE');
	});
});
