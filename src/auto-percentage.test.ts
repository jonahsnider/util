import {AutoPercentage} from './auto-percentage';

describe(AutoPercentage.name, () => {
	it('generates percentages', () => {
		const percentage = new AutoPercentage();

		const a = percentage.percentage();
		const b = percentage.percentage();

		expect(Number(a)).toBe(1 / 2);
		expect(Number(b)).toBe(1 / 2);

		const c = percentage.percentage();

		expect(Number(a)).toBe(1 / 3);
		expect(Number(b)).toBe(1 / 3);
		expect(Number(c)).toBe(1 / 3);
	});
});
