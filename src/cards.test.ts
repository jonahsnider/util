import {newDeck} from './cards';

describe(newDeck.name, () => {
	it('creates a new deck of cards', () => {
		const deck = newDeck();

		expect(deck.length).toBe(52);
	});
});
