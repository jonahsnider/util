import {clientErrors, informational, redirects, serverErrors, success} from './status-range';

describe('Informational', () => {
	it('has correct ranges', () => {
		expect(informational.lower).toBe(100);
		expect(informational.upper).toBe(200);
	});
});

describe('Success', () => {
	it('has correct ranges', () => {
		expect(success.lower).toBe(200);
		expect(success.upper).toBe(300);
	});
});

describe('Redirect', () => {
	it('has correct ranges', () => {
		expect(redirects.lower).toBe(300);
		expect(redirects.upper).toBe(400);
	});
});

describe('ClientErrors', () => {
	it('has correct ranges', () => {
		expect(clientErrors.lower).toBe(400);
		expect(clientErrors.upper).toBe(500);
	});
});

describe('ServerErrors', () => {
	it('has correct ranges', () => {
		expect(serverErrors.lower).toBe(500);
		expect(serverErrors.upper).toBe(600);
	});
});
