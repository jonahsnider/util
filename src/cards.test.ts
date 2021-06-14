import {newDeck} from './';

describe(newDeck.name, () => {
	it('creates a new deck of cards', () => {
		const deck = newDeck();

		expect(deck.length).toBe(52);
	});
});
