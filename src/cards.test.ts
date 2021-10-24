import {newDeck} from './cards';
import {name} from './object';

describe(name(newDeck), () => {
	it('creates a new deck of cards', () => {
		const deck = newDeck();

		expect(deck.length).toBe(52);
	});
});
