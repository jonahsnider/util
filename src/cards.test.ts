import {newDeck} from './cards';

describe('cards', () => {
	it('creates a new deck of cards', () => {
		const deck = newDeck();

		expect(deck.length).toBe(52);
	});
});